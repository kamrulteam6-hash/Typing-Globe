import { Node, mergeAttributes } from "@tiptap/core";

export type PromoVariant = "test" | "practice" | "certificate" | "game" | "course";

export const PROMO_KICKERS: Record<PromoVariant, string> = {
  test: "Typing Test",
  practice: "Typing Practice",
  certificate: "Certificate",
  game: "Arcade Game",
  course: "Typing Course",
};

const CARD_CLASS =
  "not-prose group my-6 flex items-center gap-4 rounded-2xl border border-border bg-surface-2 p-4 no-underline transition-colors hover:border-primary/40";
const KICKER_CLASS = "block text-xs font-semibold uppercase tracking-wide text-primary";
const LABEL_CLASS = "block text-base font-bold text-foreground";
const ARROW_CLASS = "text-primary transition-transform group-hover:translate-x-0.5";

declare module "@tiptap/core" {
  interface Commands<ReturnType> {
    promoCard: {
      insertPromoCard: (attrs: { variant: PromoVariant; href: string; label: string; icon: string }) => ReturnType;
    };
  }
}

export const PromoCard = Node.create({
  name: "promoCard",
  group: "block",
  atom: true,
  selectable: true,
  draggable: false,

  addAttributes() {
    return {
      variant: {
        default: "test",
        parseHTML: (el) => el.getAttribute("data-variant"),
        renderHTML: (attrs) => ({ "data-variant": attrs.variant }),
      },
      href: {
        default: "/",
        parseHTML: (el) => el.getAttribute("href"),
        renderHTML: (attrs) => ({ href: attrs.href }),
      },
      label: {
        default: "",
        parseHTML: (el) => el.getAttribute("data-label"),
        renderHTML: (attrs) => ({ "data-label": attrs.label }),
      },
      icon: {
        default: "⌨️",
        parseHTML: (el) => el.getAttribute("data-icon"),
        renderHTML: (attrs) => ({ "data-icon": attrs.icon }),
      },
    };
  },

  parseHTML() {
    return [{ tag: "a[data-promo-card]" }];
  },

  renderHTML({ node, HTMLAttributes }) {
    const kicker = PROMO_KICKERS[node.attrs.variant as PromoVariant] ?? "";
    return [
      "a",
      mergeAttributes(HTMLAttributes, { "data-promo-card": "", class: CARD_CLASS }),
      ["span", { class: "text-3xl" }, node.attrs.icon],
      ["span", { class: "flex-1" }, ["span", { class: KICKER_CLASS }, kicker], ["span", { class: LABEL_CLASS }, node.attrs.label]],
      ["span", { class: ARROW_CLASS }, "→"],
    ];
  },

  addCommands() {
    return {
      insertPromoCard:
        (attrs) =>
        ({ commands }) =>
          commands.insertContent({ type: this.name, attrs }),
    };
  },
});
