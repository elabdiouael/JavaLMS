// src/types/index.ts
import { ReactNode } from "react";

export interface SlideContent {
  id: number;
  title: string;
  subtitle?: string;
  layout: "text-only" | "split" | "code-focus" | "center"; // Bach nbdlo style 3la hsab content
  content: ReactNode; // Texte, bullet points...
  codeSnippet?: string; // Ila kan code, n3tiweh design special
  visual?: ReactNode; // Diagramme awla image
}