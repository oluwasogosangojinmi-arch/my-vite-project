# FASCO — Vite + React project

This is a Vite + React conversion of the FASCO fashion-store prototype, split
into proper components/pages, using Bootstrap 5 for layout (same as the
original) and the same fonts/CSS.

## Run it

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173).

To build for production:

```bash
npm run build
npm run preview
```

## Project structure

```
index.html                 Vite entry HTML (fonts loaded here)
src/
  main.jsx                 App bootstrap, imports Bootstrap + global CSS
  App.jsx                  Page router (simple state machine, like the original)
  index.css                All the custom FASCO styles
  data/
    products.js            Product list (name, price, category, image path)
    images.js              ⭐ Central map of every non-product image
  components/
    Navbar.jsx, Footer.jsx, Newsletter.jsx, ProductCard.jsx,
    MiniCart.jsx, Countdown.jsx
  pages/
    Home.jsx, Shop.jsx, ProductPage.jsx, CartPage.jsx, AuthShell.jsx,
    SignIn.jsx, SignUp.jsx, ForgotPassword.jsx, Confirmation.jsx,
    ResetPassword.jsx
public/
  images/                  ⭐ Every image file lives here — this is what you'll
                            replace with your Figma exports
```

## How to drop in the real Figma images

Every image in the site is just a file in `public/images/`, referenced by a
plain path string (`/images/xxx.jpg`) from either `src/data/images.js`
(banners, hero, Instagram, testimonials, newsletter, auth screens) or
`src/data/products.js` (the 8 product shots).

**You don't need to touch any code.** Just:

1. In Figma, select the frame/layer you want and **Export** it (PNG or JPG).
2. Rename the exported file to match the placeholder it replaces — see the
   table below (or check `src/data/images.js` / `src/data/products.js` for
   the exact filename each slot uses).
3. Drop it into `public/images/`, overwriting the placeholder.
4. Refresh the browser.

If you'd rather use `.png` or `.webp`, just update that one path in
`images.js`/`products.js` to match the extension you used. Brand logos are
set up as `.svg` since that's how you'd typically export a wordmark from
Figma (vector, scales cleanly) — swap the extension in `products.js` if you
export them as PNG instead.

### Placeholder → what it's for

| File | Used for | Suggested size |
|---|---|---|
| `hero-top.jpg` | Homepage hero, group photo above "New Collection" text | 900×600 |
| `hero-left.jpg` | Homepage hero, left panel (cutout photo, sits bottom-anchored) | 800×900 |
| `hero-right.jpg` | Homepage hero, right panel (cutout photo, sits bottom-anchored) | 800×900 |
| `hero-bottom.jpg` | Homepage hero, pink strip under "SALE" | 700×300 |
| `brand-chanel.svg`, `brand-louis-vuitton.svg`, `brand-prada.svg`, `brand-calvin-klein.svg`, `brand-denim.svg` | Brand strip logos below the hero | SVG, ~240×60 (any size works, they're scaled to a fixed height) |

`hero-left.jpg` and `hero-right.jpg` are shown at their natural size and
anchored to the bottom of the panel — the panel's light gray background
shows through above them, same as the Figma reference. If your export is a
transparent-background PNG cutout, use `.png` for those two and update the
path in `images.js` accordingly; it'll look best.
| `deal-1.jpg`…`deal-4.jpg` | "Deals Of The Month" tiles | 700×933 |
| `product-1.jpg`…`product-8.jpg` | Product photos (Shop grid, Product page, cart) | 700×933 |
| `banner-peaky-blinders.jpg` | Promo banner (Home / Product page) | 900×500 |
| `instagram-1.jpg`…`instagram-6.jpg` | "Follow Us On Instagram" strip | 400×400 |
| `testimonial-1.jpg`…`testimonial-3.jpg` | Review avatars | 200×200 |
| `newsletter-left.jpg` / `newsletter-right.jpg` | Sides of the newsletter block | 500×700 |
| `auth-signin.jpg` | Sign In side visual | 900×1000 |
| `auth-signup.jpg` | Sign Up side visual | 900×1000 |
| `auth-forgot.jpg` | Forgot Password side visual | 900×1000 |
| `auth-confirmation.jpg` | Confirmation side visual | 900×1000 |
| `auth-reset.jpg` | Reset Password side visual | 900×1000 |

The placeholders are gray boxes labeled with the filename and the
recommended dimensions, so it's obvious which one is which while you swap
them in.

## Notes

- Navigation is a simple in-memory page state (`go("shop")`, `go("product", id)`,
  etc.) in `App.jsx` — same approach as the original prototype, no router
  dependency needed. Swap in `react-router-dom` later if you want real URLs.
- Cart state is in-memory only (resets on refresh) — wire it up to
  localStorage or a backend when you're ready.
