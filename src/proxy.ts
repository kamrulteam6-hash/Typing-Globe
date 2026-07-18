import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

const GATED_PREFIXES = ["/typing-certificate/dashboard", "/blog/admin"];

/**
 * Next.js 16 renamed middleware to "proxy" (this file must be named proxy.ts
 * and export a function named `proxy`, not `middleware` — it also only runs
 * on the Node.js runtime). This does an OPTIMISTIC check only: it refreshes
 * the Supabase session cookie and redirects if there's clearly no session.
 * Real authorization is re-verified server-side in the DAL
 * (src/lib/auth/dal.ts) for every gated request — this layer is just a fast
 * redirect, not the source of truth.
 */
export async function proxy(request: NextRequest) {
  let response = NextResponse.next({ request });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value)
          );
          response = NextResponse.next({ request });
          cookiesToSet.forEach(({ name, value, options }) =>
            response.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user && GATED_PREFIXES.some((prefix) => request.nextUrl.pathname.startsWith(prefix))) {
    const loginUrl = new URL("/typing-certificate/login", request.url);
    loginUrl.searchParams.set("next", request.nextUrl.pathname);
    return NextResponse.redirect(loginUrl);
  }

  return response;
}

export const config = {
  matcher: ["/typing-certificate/dashboard/:path*", "/blog/admin/:path*"],
};
