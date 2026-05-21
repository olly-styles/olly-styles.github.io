import { type IconKey, variantIcon, type VariantKey } from "@/components/icon-variants";

// Locked-in variant picks per subject (used on the home page and /work).
const active: Record<IconKey, VariantKey> = {
  artanis: "a", // tentative — user still picking
  multiverse: "c",
  atlas: "c",
  dasa: "a",
  warwick: "a",
  workbench: "e",
  mot: "b",
  tensor: "b",
  mctf: "a",
  mof: "e",
  iv: "e",
};

const validKeys: IconKey[] = Object.keys(active) as IconKey[];

function isIconKey(k: string): k is IconKey {
  return (validKeys as string[]).includes(k);
}

export function iconFor(key: string | undefined) {
  if (!key || !isIconKey(key)) return null;
  return variantIcon(key, active[key]);
}
