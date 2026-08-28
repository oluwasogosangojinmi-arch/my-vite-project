import { useState } from "react";
import ProductCard from "../components/ProductCard.jsx";
import { PRODUCTS, SIZES } from "../data/products.js";
import { IMAGES } from "../data/images.js";

export default function ProductPage({ productId, go, addItem }) {
  const product = PRODUCTS.find((p) => p.id === productId) || PRODUCTS[0];
  const [size, setSize] = useState("M");
  const [qty, setQty] = useState(1);
  const related = PRODUCTS.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <main className="container py-5">
      <div className="eyebrow mb-4">
        <a onClick={() => go("home")} style={{ cursor: "pointer" }}>Home</a> /{" "}
        <a onClick={() => go("shop")} style={{ cursor: "pointer" }}>Shop</a> / {product.name}
      </div>
      <div className="row g-5">
        <div className="col-12 col-md-6">
          <div className="product-media" style={{ cursor: "default" }}>
            <img src={product.img} alt={product.name} />
            {product.tag && <span className={"product-tag" + (product.tag === "Sale" ? " sale" : "")}>{product.tag}</span>}
          </div>
        </div>
        <div className="col-12 col-md-6">
          <span className="eyebrow">{product.category}</span>
          <h1 className="section-heading mt-2 mb-3">{product.name}</h1>
          <div className="mono mb-4" style={{ fontSize: "1.1rem" }}>
            {product.oldPrice && <span className="strike">${product.oldPrice}</span>}${product.price}
          </div>
          <p className="text-muted mb-4" style={{ maxWidth: 420 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna eu tincidunt consectetur.
          </p>
          <div className="mb-4">
            <div className="form-label-fasco">Size</div>
            <div className="d-flex gap-2">
              {SIZES.map((s) => (
                <button key={s} className={"filter-chip" + (size === s ? " active" : "")} style={{ minWidth: 44 }} onClick={() => setSize(s)}>
                  {s}
                </button>
              ))}
            </div>
          </div>
          <div className="mb-4">
            <div className="form-label-fasco">Quantity</div>
            <div className="qty-control">
              <button onClick={() => setQty((q) => Math.max(1, q - 1))}>-</button>
              <span>{qty}</span>
              <button onClick={() => setQty((q) => q + 1)}>+</button>
            </div>
          </div>
          <button className="btn-fasco" style={{ padding: "13px 36px" }} onClick={() => addItem(product, { size, qty })}>
            Add To Cart
          </button>
        </div>
      </div>

      <section className="mt-5 pt-4">
        <div className="banner-visual">
          <img src={IMAGES.bannerPeakyBlinders} alt="Peaky Blinders collection" />
        </div>
      </section>

      <section className="mt-5 pt-5">
        <h2 className="section-heading mb-4">You May Also Like</h2>
        <div className="row g-4">
          {related.map((p) => (
            <div className="col-6 col-md-3" key={p.id}>
              <ProductCard product={p} go={go} addItem={addItem} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
