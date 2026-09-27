// TypeScript definitions for Codex Universalis 15 Folios

export interface FolioEntry {
  pageNumber: number;
  romanNum: string;
  titleAr: string;
  titleEn: string;
  category: string;
  date: string;
  origin: string;
  latinQuote: string;
  arabicQuote: string;
  essay: string;
  mechanicType: string;
  tags: string[];
}
