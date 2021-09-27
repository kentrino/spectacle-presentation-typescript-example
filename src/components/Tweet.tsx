import React from "react"

const Tweet = ({ url }: { url: string }) => {
    const html = `
        <blockquote class="twitter-tweet" data-theme="dark">
            <a href=${url}>
                September 14, 2021
            </a>
        </blockquote>
   `
    return <div dangerouslySetInnerHTML={{ __html: html }} />
}

export default Tweet
