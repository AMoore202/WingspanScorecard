import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function safeParseInt(value: FormDataEntryValue | null, defaultValue: number = 0) {
  if (value === null){
      return defaultValue;
  }
  const stringValue = String(value);
  const parsedValue = parseInt(stringValue, 10);
  if (isNaN(parsedValue)) {
      return(defaultValue);
  }
  return parsedValue;
}

export function safeParseBool(value: FormDataEntryValue | null) {
  if (value === "on"){
      return true;
  }
  return false;
}

export function sumArray(array: number[]) {
  return array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}