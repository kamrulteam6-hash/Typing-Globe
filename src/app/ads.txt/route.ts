// A static file in /public would normally serve this, but the root-level
// dynamic src/app/[slug] route was intercepting the request instead of
// falling through to the public folder. An explicit route handler is
// guaranteed to win over a dynamic segment at the same level, so this is
// the reliable way to serve ads.txt.
export function GET() {
  return new Response("google.com, pub-1010914018637240, DIRECT, f08c47fec0942fa0\n", {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
