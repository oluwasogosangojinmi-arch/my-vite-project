import { useState } from "react";

export default function Navbar({ page, go, cartCount, openCart }) {
  const [open, setOpen] = useState(false);
  const links = [
    ["home", "Home"],
    ["shop", "Deals"],
    ["shop", "New Arrivals"],
    ["shop", "Packages"],
  ];

  return (
    <header className="fasco-nav">
      <div className="container d-flex align-items-center justify-content-between py-3">
        <span className="logo-mark" onClick={() => go("home")}>FASCO</span>
        <nav className="d-none d-lg-flex align-items-center gap-4">
          {links.map(([p, label]) => (
            <button key={label} className={"nav-link-item" + (page === p ? " active" : "")} onClick={() => go(p)}>
              {label}
            </button>
          ))}
        </nav>
        <div className="d-flex align-items-center gap-3">
          <button className="icon-btn" aria-label="Cart" onClick={openCart}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M6 8h12l-1 12H7L6 8Z" stroke="currentColor" strokeWidth="1.6" />
              <path d="M9 8V6a3 3 0 0 1 6 0v2" stroke="currentColor" strokeWidth="1.6" />
            </svg>
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </button>
          <button className="nav-link-item d-none d-md-inline-block" onClick={() => go("signin")}>Sign In</button>
          <button className="btn-fasco d-none d-md-inline-flex" onClick={() => go("signup")}>Sign Up</button>
          <button className="icon-btn d-lg-none" onClick={() => setOpen((o) => !o)} aria-label="Menu">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>
      {open && (
        <div className="d-lg-none border-top" style={{ borderColor: "var(--line)" }}>
          <div className="container d-flex flex-column gap-3 py-3">
            {links.map(([p, label]) => (
              <button key={label} className="nav-link-item text-start" onClick={() => { go(p); setOpen(false); }}>
                {label}
              </button>
            ))}
            <button className="nav-link-item text-start" onClick={() => { go("signin"); setOpen(false); }}>Sign In</button>
            <button className="btn-fasco" onClick={() => { go("signup"); setOpen(false); }}>Sign Up</button>
          </div>
        </div>
      )}
    </header>
  );
}
