export default function MiniCart({ items, close, removeItem, updateQty, subtotal, go }) {
  return (
    <>
      <div className="minicart-backdrop" onClick={close}></div>
      <aside className="minicart-drawer">
        <div className="d-flex justify-content-between align-items-center p-4 border-bottom" style={{ borderColor: "var(--line)" }}>
          <h2 className="h6 mb-0 text-uppercase" style={{ letterSpacing: ".08em" }}>Your Cart ({items.length})</h2>
          <button className="icon-btn" onClick={close} aria-label="Close">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </button>
        </div>
        <div className="flex-grow-1 overflow-auto px-4">
          {items.length === 0 ? (
            <p className="text-muted mt-4">Your cart is empty.</p>
          ) : (
            items.map((item) => (
              <div key={item.key} className="d-flex gap-3 py-3 border-bottom" style={{ borderColor: "var(--line)" }}>
                <div className="minicart-thumb"><img src={item.img} alt={item.name} /></div>
                <div className="flex-grow-1">
                  <div className="d-flex justify-content-between">
                    <div style={{ fontSize: ".9rem", fontWeight: 500 }}>{item.name}</div>
                    <button className="icon-btn" onClick={() => removeItem(item.key)} aria-label="Remove">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                        <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                      </svg>
                    </button>
                  </div>
                  <div className="eyebrow mb-2">Size {item.size}</div>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="qty-control">
                      <button onClick={() => updateQty(item.key, item.qty - 1)}>-</button>
                      <span>{item.qty}</span>
                      <button onClick={() => updateQty(item.key, item.qty + 1)}>+</button>
                    </div>
                    <div className="mono" style={{ fontSize: ".85rem" }}>${(item.price * item.qty).toFixed(2)}</div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="p-4 border-top" style={{ borderColor: "var(--line)" }}>
          <div className="d-flex justify-content-between mb-3">
            <span className="text-uppercase" style={{ fontSize: ".76rem", letterSpacing: ".06em" }}>Subtotal</span>
            <span className="mono fw-bold">${subtotal.toFixed(2)}</span>
          </div>
          <button className="btn-fasco w-100 mb-2" onClick={() => { go("cart"); close(); }}>View Cart</button>
          <button className="btn-fasco-outline w-100" disabled={items.length === 0} onClick={close}>Checkout</button>
        </div>
      </aside>
    </>
  );
}
