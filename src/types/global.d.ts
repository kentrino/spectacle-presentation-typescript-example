declare module "*.md" {
  const md: string
  export = md
}

declare module "*.mdx" {
  const mdx: string
  export default mdx
  export const notes: string
}
