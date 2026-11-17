export const profiles = [
  {
    id: "rameesh",
    name: "Rameesh",
    description: "My story & interests",
    glyph: "KP",
  },
  {
    id: "recruiter",
    name: "Recruiter",
    description: "Experience & résumé",
    glyph: "R",
  },
  {
    id: "developer",
    name: "Developer",
    description: "Apps & tech stack",
    glyph: "</>",
  },
  {
    id: "creative",
    name: "Creative",
    description: "Illustration & reels",
    glyph: "✦",
  },
] as const;

export type ProfileId = (typeof profiles)[number]["id"];

export function readPortfolioView({ search, hash }: Pick<Location, "search" | "hash">) {
  const view = new URLSearchParams(search).get("view");
  return profiles.find((profile) => profile.id === view)?.id ??
    (["#about", "#work", "#contact", "#landingDiv"].includes(hash) ? "recruiter" : null);
}
