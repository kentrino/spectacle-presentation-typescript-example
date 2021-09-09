/* eslint-disable @typescript-eslint/no-explicit-any */
declare module "@mdx-js/*" {
    import React from "react"
    export const MDXProvider: React.JSXElementConstructor<{
        components: any
        children: React.ComponentElement<any, any>
    }>
}
