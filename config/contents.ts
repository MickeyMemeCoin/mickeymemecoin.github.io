import { HeroHeader, ContentSection } from "@/types/contents"

/* ====================
[> CUSTOMIZING CONTENT <]
-- Setup image by typing `/image-name.file` (Example: `/header-image.jpg`)
-- Add images by adding files to /public folder
-- Leave blank `` if you don't want to put texts or images
 ==================== */

export const heroHeader: HeroHeader = {
  header: `Introducing Mickey Meme`,
  subheader: `100 Years later and the world famous MICKEY is entering public domain`,
  image: `/hero-img.webp`,
}

export const featureCards: ContentSection = {
  header: `What is $MICKEY?`,
  subheader: ``,
  content: [
    {
      text: `Fans`,
      subtext: `Real Life Experiences & Community`,
      image: `/next.svg`,
    },
    {
      text: `Films`,
      subtext: `Creatively designed entertainment`,
      image: `/shadcn-ui.svg`,
    },
    {
      text: `Mickey`,
      subtext: `Acquire, Trade, Redeem.`,
      image: `/vercel.svg`,
    },
  ],
}

export const features: ContentSection = {
  header: `Features`,
  subheader: `Why use Next Landing?`,
  image: `/features-img.webp`,
  content: [
    {
      text: `SEO Optimized`,
      subtext: `Improved website visibility on search engines`,
      image: `/seo.svg`,
    },
    {
      text: `Highly Performant`,
      subtext: `Fast loading times and smooth performance`,
      image: `/performant.svg`,
    },
    {
      text: `Easy Customizability`,
      subtext: `Change your content and layout with little effort`,
      image: `/customize.svg`,
    },
  ],
}
