export function removeMarkdown(json: string) {
  let cleaned = json;
  cleaned = cleaned.replace("```json", "");
  cleaned = cleaned.replace("```", "");
  return cleaned;
}
