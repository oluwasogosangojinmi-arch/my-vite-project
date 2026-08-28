/**
 * IMAGE MANIFEST
 * ----------------------------------------------------------------
 * Every image used on the site is listed here, pointing at a file
 * in /public/images/.
 *
 * To swap in the real Figma images:
 *   1. Export the image from Figma (right-click → Export).
 *   2. Name the exported file EXACTLY like the filename below
 *      (e.g. "hero-left.jpg").
 *   3. Drop it into /public/images/, replacing the placeholder.
 *   4. Refresh the browser — no code changes needed.
 *
 * You can also use .png/.webp — just update the extension for that
 * one entry below to match the file you dropped in.
 * ----------------------------------------------------------------
 */
export const IMAGES = {
  // Homepage hero
  heroTop: "/images/hero-top.jpg", // group photo above "New Collection" / ULTIMATE SALE text
  heroLeft: "/images/hero-left.jpg", // cutout product photo, sits bottom-anchored on the left panel
  heroRight: "/images/hero-right.jpg", // cutout product photo, sits bottom-anchored on the right panel
  heroBottom: "/images/hero-bottom.jpg", // pink strip below the Shop Now button

  // "Deals Of The Month" slider
  deal1: "/images/deal-1.jpg",
  deal2: "/images/deal-2.jpg",
  deal3: "/images/deal-3.jpg",
  deal4: "/images/deal-4.jpg",

  // Peaky Blinders promo banner (Shop / Product pages)
  bannerPeakyBlinders: "/images/banner-peaky-blinders.jpg",

  // "Follow Us On Instagram" strip
  instagram: [
    "/images/instagram-1.jpg",
    "/images/instagram-2.jpg",
    "/images/instagram-3.jpg",
    "/images/instagram-4.jpg",
    "/images/instagram-5.jpg",
    "/images/instagram-6.jpg",
  ],

  // Testimonial avatars
  testimonials: [
    "/images/testimonial-1.jpg",
    "/images/testimonial-2.jpg",
    "/images/testimonial-3.jpg",
  ],

  // Newsletter section side images
  newsletterLeft: "/images/newsletter-left.jpg",
  newsletterRight: "/images/newsletter-right.jpg",

  // Auth pages (side visual)
  authSignIn: "/images/auth-signin.jpg",
  authSignUp: "/images/auth-signup.jpg",
  authForgot: "/images/auth-forgot.jpg",
  authConfirmation: "/images/auth-confirmation.jpg",
  authReset: "/images/auth-reset.jpg",
};
