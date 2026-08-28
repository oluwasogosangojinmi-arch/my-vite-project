export default function CartPage({ items, go, removeItem, updateQty, subtotal }) {
  const shipping = items.length > 0 ? (subtotal > 75 ? 0 : 8) : 0;
  const total = subtotal + shipping;

  return (
    <main className="container py-5">
      <span className="eyebrow">Checkout</span>
      <h1 className="section-heading mt-2 mb-5">Your Cart</h1>
      {items.length === 0 ? (
        <div className="py-5 text-center">
          <p className="text-muted mb-4">Your cart is currently empty.</p>
          <button className="btn-fasco" onClick={() => go("shop")}>Continue Shopping</button>
        </div>
      ) : (
        <div className="row g-5">
          <div className="col-12 col-lg-8">
            {items.map((item) => (
              <div className="cart-row" key={item.key}>
                <img src={item.img} alt={item.name} />
                <div>
                  <div style={{ fontWeight: 500, fontSize: ".92rem" }}>{item.name}</div>
                  <div className="eyebrow">Size {item.size}</div>
                </div>
                <div className="qty-control">
                  <button onClick={() => updateQty(item.key, item.qty - 1)}>-</button>
                  <span>{item.qty}</span>
                  <button onClick={() => updateQty(item.key, item.qty + 1)}>+</button>
                </div>
                <div className="mono">${(item.price * item.qty).toFixed(2)}</div>
                <button className="icon-btn" onClick={() => removeItem(item.key)} aria-label="Remove">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                </button>
              </div>
            ))}
            <button className="btn-fasco-outline mt-4" onClick={() => go("shop")}>Continue Shopping</button>
          </div>
          <div className="col-12 col-lg-4">
            <div className="summary-box">
              <h2 className="h6 text-uppercase mb-4" style={{ letterSpacing: ".08em" }}>Order Summary</h2>
              <div className="summary-row"><span className="text-muted">Subtotal</span><span className="mono">${subtotal.toFixed(2)}</span></div>
              <div className="summary-row"><span className="text-muted">Shipping</span><span className="mono">{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span></div>
              <div className="summary-row" style={{ borderTop: "1px solid var(--line)", fontWeight: 600 }}><span>Total</span><span className="mono">${total.toFixed(2)}</span></div>
              <button className="btn-fasco w-100 mt-3">Proceed To Checkout</button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
