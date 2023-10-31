import { SiteConfig, ContactConfig } from "@/types"

/* ====================
[> WEBSITE CONFIG <]
-- Fill the details about your website
 ==================== */

const baseUrl = "https://MickeyMeme.com"

export const siteConfig: SiteConfig = {
  name: "$MICKEY",
  author: "$MICKEY",
  description:
    "The world's Favorite Meme, Now is A Meme Coin $MICKEY.",
  keywords: [
    "MICKEY",
    "MEMECOIN",
    "ERC-20",

  ],
  url: {
    base: baseUrl,
    author: "https://mickeymeme.com",
  },
  ogImage: `${baseUrl}/og.jpg`,
}

export const contactConfig: ContactConfig = {
  email: "MickeyMemeCoin@gmail.com",
}
