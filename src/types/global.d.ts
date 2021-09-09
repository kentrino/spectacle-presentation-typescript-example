/* eslint-disable @typescript-eslint/no-explicit-any */
declare module "*.md" {
    const md: string
    export = md
}

declare module "*.mdx" {
    import React from "react"
    const slides: React.JSXElementConstructor<any>[]
    export default slides
    export const notes: string
}
