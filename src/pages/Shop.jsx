import { useState } from "react";
import ProductCard from "../components/ProductCard.jsx";
import { PRODUCTS } from "../data/products.js";

export default function Shop({ go, addItem }) {
  const [category, setCategory] = useState("All");
  const categories = ["All", ...new Set(PRODUCTS.map((p) => p.category))];
  const list = category === "All" ? PRODUCTS : PRODUCTS.filter((p) => p.category === category);

  return (
    <main className="container py-5">
      <span className="eyebrow">Shop</span>
      <h1 className="section-heading mt-2 mb-4">All Products</h1>
      <div className="d-flex flex-wrap gap-2 mb-5">
        {categories.map((c) => (
          <button key={c} className={"filter-chip" + (category === c ? " active" : "")} onClick={() => setCategory(c)}>
            {c}
          </button>
        ))}
      </div>
      <div className="row g-4">
        {list.map((p) => (
          <div className="col-6 col-md-4 col-lg-3" key={p.id}>
            <ProductCard product={p} go={go} addItem={addItem} />
          </div>
        ))}
      </div>
    </main>
  );
}
