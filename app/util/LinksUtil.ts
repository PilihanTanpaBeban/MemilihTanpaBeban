export function parseLinksToArray(raw: unknown): string[] {
  let arr: string[] = [];

  if (Array.isArray(raw)) {
    const flat = (raw as unknown[]).flatMap((item) => {
      if (typeof item === "string") {
        const trimmed = item.trim();
        if (trimmed.startsWith("[") && trimmed.endsWith("]")) {
          try {
            const parsed = JSON.parse(trimmed);
            return Array.isArray(parsed)
              ? parsed.map((x) => String(x))
              : [trimmed];
          } catch {
            return trimmed
              .split(/[\n,]/)
              .map((s) => s.trim())
              .filter(Boolean);
          }
        }
        return [trimmed];
      }
      return [String(item)];
    });
    arr = flat;
  } else if (typeof raw === "string") {
    const s = raw.trim();
    if (s.startsWith("[") && s.endsWith("]")) {
      try {
        const parsed = JSON.parse(s);
        arr = Array.isArray(parsed)
          ? parsed.map((x) => String(x))
          : [s];
      } catch {
        arr = s
          .split(/[\n,]/)
          .map((t) => t.trim())
          .filter(Boolean);
      }
    } else {
      arr = s
        .split(/[\n,]/)
        .map((t) => t.trim())
        .filter(Boolean);
    }
  } else {
    arr = [];
  }

  return arr.map((x) => x.trim()).filter(Boolean);
}