import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatEur(eur: number) {
  return eur.toLocaleString("de-DE", {
    style: "currency",
    currency: "EUR",
  });
}
