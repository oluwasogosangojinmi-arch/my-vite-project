/**
 * PRODUCT DATA
 * ----------------------------------------------------------------
 * Each product's `img` points to /public/images/product-N.jpg.
 * Export the matching product shot from Figma, name it the same
 * (e.g. "product-1.jpg"), and drop it into /public/images/ to
 * replace the placeholder — no code changes needed.
 * ----------------------------------------------------------------
 */
export const PRODUCTS = [
  { id: "p1", name: "Wool Overshirt", category: "Jackets", price: 128, oldPrice: null, tag: "New", img: "/images/product-1.jpg" },
  { id: "p2", name: "Off-Shoulder Knit Dress", category: "Dresses", price: 76, oldPrice: 109, tag: "Sale", img: "/images/product-2.jpg" },
  { id: "p3", name: "Wide Brim Sun Hat Set", category: "Accessories", price: 54, oldPrice: null, tag: null, img: "/images/product-3.jpg" },
  { id: "p4", name: "Denim Two-Piece Set", category: "Sets", price: 96, oldPrice: 132, tag: "Sale", img: "/images/product-4.jpg" },
  { id: "p5", name: "Cropped Moto Jacket", category: "Jackets", price: 142, oldPrice: null, tag: "New", img: "/images/product-5.jpg" },
  { id: "p6", name: "Tailored Wide-Leg Trousers", category: "Bottoms", price: 84, oldPrice: null, tag: null, img: "/images/product-6.jpg" },
  { id: "p7", name: "Ribbed Turtleneck Sweater", category: "Knitwear", price: 62, oldPrice: 88, tag: "Sale", img: "/images/product-7.jpg" },
  { id: "p8", name: "Classic Trench Coat", category: "Jackets", price: 168, oldPrice: null, tag: "New", img: "/images/product-8.jpg" },
];

export const BRANDS = [
  { name: "Chanel", logo: "/images/brand-chanel.svg" },
  { name: "Louis Vuitton", logo: "/images/brand-louis-vuitton.svg" },
  { name: "Prada", logo: "/images/brand-prada.svg" },
  { name: "Calvin Klein", logo: "/images/brand-calvin-klein.svg" },
  { name: "Denim Co.", logo: "/images/brand-denim.svg" },
];
export const SIZES = ["XS", "S", "M", "L", "XL"];

export const TESTIMONIALS = [
  { name: "James K.", role: "Traveler", quote: "You won't regret it. I would like to personally thank you for your outstanding product. Absolutely wonderful!" },
  { name: "Sarah W.", role: "Customer", quote: "Looking for what you're looking for. Thank you for visiting us, pleased and thank you all of the value you've given." },
  { name: "Maria D.", role: "Customer", quote: "Great quality and fast shipping. FASCO has become my go-to for everyday wardrobe staples." },
];
