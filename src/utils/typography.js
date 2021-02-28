export function textCapitalize(text) {
  return text.replace(/\b\w/g, (letter) => letter.toUpperCase());
}
