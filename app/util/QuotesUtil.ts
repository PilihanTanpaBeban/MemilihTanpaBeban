export type QuoteItem = {
  quote: string;
  link?: string;
};

function normalizeQuoteText(raw: unknown): string {
  let s = typeof raw === 'string' ? raw : String(raw ?? '');
  // Trim outer quotes and handle leading double quotes
  s = s.trim();
  if ((s.startsWith('"') && s.endsWith('"')) || (s.startsWith("'") && s.endsWith("'"))) {
    s = s.slice(1, -1).trim();
  }
  // Remove accidental duplicated leading quotes (e.g., ""Text)
  s = s.replace(/^\s*"+/, '').replace(/"+\s*$/, '').trim();
  return s;
}

function normalizeLink(raw: unknown): string | undefined {
  if (raw == null) return undefined;
  let s = typeof raw === 'string' ? raw : String(raw);
  // Remove backticks and trim whitespace, also strip wrapping quotes
  s = s.replace(/`/g, '').trim();
  if ((s.startsWith('"') && s.endsWith('"')) || (s.startsWith("'") && s.endsWith("'"))) {
    s = s.slice(1, -1).trim();
  }
  // If a URL exists inside the string, extract the first occurrence
  const match = s.match(/https?:\/\/[^\s"']+/i);
  if (match) return match[0];
  // Otherwise, return non-empty string as-is to render a link per data contract
  return s.length ? s : undefined;
}

export function parseQuoteItems(raw: unknown): QuoteItem[] {
  if (raw == null) return [];

  try {
    const parsed = typeof raw === 'string' ? JSON.parse(raw) : raw;
    if (Array.isArray(parsed)) {
      return parsed
        .map((it) => {
          if (it && typeof it === 'object') {
            const q = normalizeQuoteText((it as any).quote);
            const link = normalizeLink((it as any).link);
            if (q.length === 0) return undefined;
            return { quote: q, link } as QuoteItem;
          }
          return undefined;
        })
        .filter(Boolean) as QuoteItem[];
    }
  } catch {
    // Fall through to string handling below
  }

  if (typeof raw === 'string') {
    const q = normalizeQuoteText(raw);
    if (q.length > 0) return [{ quote: q }];
  }

  return [];
}