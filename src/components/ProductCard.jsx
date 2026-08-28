export default function ProductCard({ product, go, addItem }) {
  return (
    <div>
      <div className="product-media" onClick={() => go("product", product.id)}>
        <img src={product.img} alt={product.name} />
        {product.tag && <span className={"product-tag" + (product.tag === "Sale" ? " sale" : "")}>{product.tag}</span>}
      </div>
      <div className="pt-2">
        <div style={{ fontSize: ".92rem", fontWeight: 500, cursor: "pointer" }} onClick={() => go("product", product.id)}>
          {product.name}
        </div>
        <div className="product-price mono" style={{ fontSize: ".85rem", color: "var(--ink-soft)" }}>
          {product.oldPrice && <span className="strike">${product.oldPrice}</span>}${product.price}
        </div>
        <button className="btn-fasco mt-2 w-100" style={{ fontSize: ".7rem", padding: "9px" }} onClick={() => addItem(product, { size: "M", qty: 1 })}>
          Quick Add
        </button>
      </div>
    </div>
  );
}
