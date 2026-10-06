export type Project = {
  slug: string;
  name: string;
  category: string;
  summary: string;
  number: string;
  className: string;
  services: string[];
  technology: string[];
  challenge: string;
  approach: string;
  details: { title: string; text: string }[];
};
export const projects: Project[] = [
  {
    slug: "forma",
    name: "Forma",
    category: "Architecture & interiors",
    number: "01",
    className: "forma",
    summary: "A quieter digital home for spaces that speak for themselves.",
    services: ["Art direction", "Web design", "Frontend development"],
    technology: ["Next.js", "TypeScript", "CSS"],
    challenge:
      "Give an architecture practice a digital presence with the same attention to proportion, material, and space as its buildings.",
    approach:
      "An image-led editorial concept that lets the work set the pace. Warm neutrals, generous margins, and a deliberate type system bring architectural thinking to the interface.",
    details: [
      {
        title: "Space, before decoration.",
        text: "A restrained navigation and full-width imagery give each project room to be understood. Small project annotations support the photography without competing with it.",
      },
      {
        title: "A considered reading rhythm.",
        text: "Large statements alternate with quiet detail. The composition adapts from a wide editorial canvas to a focused, single-column mobile experience.",
      },
      {
        title: "Built as an interface.",
        text: "The preview is composed from real type, layout, and optimized imagery. It demonstrates how the visual direction translates into responsive components.",
      },
    ],
  },
  {
    slug: "elsewhere",
    name: "Elsewhere",
    category: "Travel & hospitality",
    number: "02",
    className: "elsewhere",
    summary: "An invitation to get a little further from the everyday.",
    services: ["Brand direction", "Experience design", "Frontend development"],
    technology: ["React", "TypeScript", "CSS"],
    challenge:
      "Make a nature-focused travel concept feel immersive while keeping the path from curiosity to exploration simple.",
    approach:
      "A cinematic landscape, expressive serif typography, and minimal navigation create the feeling of an escape before the journey begins.",
    details: [
      {
        title: "Let the destination lead.",
        text: "Photography becomes the canvas. Text is carefully placed and given a measured contrast treatment, keeping the destination visible and the message legible.",
      },
      {
        title: "A clear next step.",
        text: "One primary exploration prompt keeps the interface focused. Supporting metadata gives a sense of place without filling the screen with unnecessary controls.",
      },
      {
        title: "Made for every screen.",
        text: "Responsive image crops and fluid typography maintain the feeling of openness on a phone as well as a large display.",
      },
    ],
  },
  {
    slug: "index",
    name: "Index",
    category: "Digital product",
    number: "03",
    className: "index",
    summary: "Less friction between a good idea and a clear plan.",
    services: ["Product strategy", "UI design", "Interaction design"],
    technology: ["React", "TypeScript", "CSS"],
    challenge:
      "Explore a calm project workspace that makes progress legible without turning every task into another notification.",
    approach:
      "A precise interface study built around hierarchy: work first, context second. A compact sidebar, readable project rows, and a neutral palette reduce visual noise.",
    details: [
      {
        title: "Clarity at a glance.",
        text: "Project state, ownership, and next steps share a consistent visual vocabulary. Spacing and alignment do the work that extra interface chrome often tries to do.",
      },
      {
        title: "Deliberate interaction.",
        text: "A focused dashboard preview shows how a product can feel capable without feeling crowded. The presentation is an interface concept, not a connected application.",
      },
      {
        title: "A foundation to build on.",
        text: "Reusable visual patterns establish a direction for a future product. Authentication, persistent data, and integrations would be scoped as a separate implementation.",
      },
    ],
  },
];
