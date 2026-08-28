import Countdown from "../components/Countdown.jsx";
import DealsCarousel from "../components/DealsCarousel.jsx";
import ProductCard from "../components/ProductCard.jsx";
import { PRODUCTS, BRANDS, TESTIMONIALS } from "../data/products.js";
import { IMAGES } from "../data/images.js";

export default function Home({ go, addItem }) {
  const deals = [
    { img: IMAGES.deal1, chip: "Spring Sale — 30% Off" },
    { img: IMAGES.deal2, chip: "Denim Edit — 20% Off" },
    { img: IMAGES.deal3, chip: "Sunwear — 15% Off" },
    { img: IMAGES.deal4, chip: "Layers — 10% Off" },
  ];

  return (
    <main>
      <section className="container">
        <div className="hero-grid mt-1">
          <div className="hero-panel">
            <img src={IMAGES.heroLeft} alt="Model seated in layered outerwear" />
          </div>
          <div className="hero-center">
            <div className="hero-top-image">
              <img src={IMAGES.heroTop} alt="Group of models" />
            </div>
            <div className="hero-center-top">
              <span className="eyebrow mb-3">New Collection</span>
              <div className="hero-sale-word display-serif">ULTIMATE</div>
              <div className="hero-sale-word filled display-serif mb-3">SALE</div>
              <button className="btn-fasco mt-2" onClick={() => go("shop")}>Shop Now</button>
            </div>
            <div className="hero-center-bottom">
              <img src={IMAGES.heroBottom} alt="Friends laughing" />
            </div>
          </div>
          <div className="hero-panel">
            <img src={IMAGES.heroRight} alt="Model in a mustard turtleneck" />
          </div>
        </div>
      </section>

      <div className="brand-strip">
        <div className="container d-flex flex-wrap align-items-center justify-content-between gap-4">
          {BRANDS.map((b) => (
            <img key={b.name} className="brand-logo" src={b.logo} alt={b.name} />
          ))}
        </div>
      </div>

      <section className="container py-5 my-3">
        <div className="row align-items-center gy-4">
          <div className="col-12 col-lg-4">
            <span className="eyebrow">Limited Time</span>
            <h2 className="section-heading mt-2 mb-3">Deals Of The Month</h2>
            <p className="text-muted" style={{ maxWidth: 300 }}>
              A curated edit of seasonal favorites, marked down while stock lasts.
            </p>
            <button className="btn-fasco mb-4" onClick={() => go("shop")}>Buy Now</button>
            <div>
              <div className="eyebrow mb-2">Hurry, Before It's Too Late</div>
              <Countdown />
            </div>
          </div>
          <div className="col-12 col-lg-8">
            <DealsCarousel deals={deals} />
          </div>
        </div>
      </section>

      <section className="container py-5">
        <div className="d-flex justify-content-between align-items-end mb-4 flex-wrap gap-3">
          <div>
            <span className="eyebrow">Fresh In</span>
            <h2 className="section-heading mt-2">Trending Right Now</h2>
          </div>
          <button className="btn-fasco-outline" onClick={() => go("shop")}>View All</button>
        </div>
        <div className="row g-4">
          {PRODUCTS.slice(0, 4).map((p) => (
            <div className="col-6 col-md-3" key={p.id}>
              <ProductCard product={p} go={go} addItem={addItem} />
            </div>
          ))}
        </div>
      </section>

      <section className="container py-5">
        <div className="banner-visual">
          <img src={IMAGES.bannerPeakyBlinders} alt="Peaky Blinders collection" />
        </div>
      </section>

      <section className="container py-4">
        <div className="row g-2">
          {[
            ["High Quality", "Crafted from top materials"],
            ["Warranty Protection", "Over 2 years"],
            ["Free Shipping", "Order over 150 $"],
            ["24 / 7 Support", "Dedicated support"],
          ].map(([title, sub]) => (
            <div className="col-6 col-md-3" key={title}>
              <div className="perk-item">
                <div style={{ fontWeight: 500, fontSize: ".9rem" }}>{title}</div>
                <div className="text-muted" style={{ fontSize: ".78rem" }}>{sub}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container py-5 text-center">
        <span className="eyebrow">Social</span>
        <h2 className="section-heading mt-2 mb-4">Follow Us On Instagram</h2>
        <div className="row g-2">
          {IMAGES.instagram.map((src, i) => (
            <div className="col-4 col-md-2" key={i}>
              <div className="insta-tile"><img src={src} alt={`Instagram post ${i + 1}`} /></div>
            </div>
          ))}
        </div>
      </section>

      <section className="container py-5 text-center">
        <span className="eyebrow">Reviews</span>
        <h2 className="section-heading mt-2 mb-4">This Is What Our Customers Say</h2>
        <div className="row g-4 justify-content-center">
          {TESTIMONIALS.map((t, i) => (
            <div className="col-12 col-md-4" key={t.name}>
              <div className="d-flex gap-3 text-start p-3" style={{ border: "1px solid var(--line)" }}>
                <div className="testimonial-avatar">
                  <img src={IMAGES.testimonials[i]} alt={t.name} />
                </div>
                <div>
                  <p style={{ fontSize: ".85rem" }}>"{t.quote}"</p>
                  <div style={{ fontWeight: 500, fontSize: ".85rem" }}>{t.name}</div>
                  <div className="eyebrow">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
