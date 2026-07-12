import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function buildWhatsAppLink(number: string, message: string) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function socialHandle(url: string) {
  const segment = new URL(url).pathname.split("/").filter(Boolean).pop() ?? "";
  return `@${segment}`;
}
