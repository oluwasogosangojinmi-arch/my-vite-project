export default function Footer({ go }) {
  return (
    <footer className="fasco-footer">
      <div className="container py-5">
        <div className="row gy-4">
          <div className="col-12 col-md-4">
            <div className="logo-mark text-white mb-3">FASCO</div>
            <p style={{ color: "#b3b0ac", fontSize: ".9rem", maxWidth: 280 }}>
              Considered fashion for the way you actually move through your week.
            </p>
          </div>
          <div className="col-6 col-md-2">
            <div className="footer-heading">Shop</div>
            <a className="d-block mb-2" style={{ color: "#b3b0ac", fontSize: ".88rem", cursor: "pointer" }} onClick={() => go("shop")}>
              All Products
            </a>
          </div>
          <div className="col-6 col-md-2">
            <div className="footer-heading">Account</div>
            <a className="d-block mb-2" style={{ color: "#b3b0ac", fontSize: ".88rem", cursor: "pointer" }} onClick={() => go("signin")}>
              Sign In
            </a>
            <a className="d-block mb-2" style={{ color: "#b3b0ac", fontSize: ".88rem", cursor: "pointer" }} onClick={() => go("cart")}>
              View Cart
            </a>
          </div>
          <div className="col-12 col-md-4">
            <div className="footer-heading">Stay in the loop</div>
            <p style={{ color: "#b3b0ac", fontSize: ".88rem" }}>Subscribe for early access to drops and sales.</p>
          </div>
        </div>
        <div className="d-flex justify-content-between mt-4 pt-4" style={{ borderTop: "1px solid #33312c", fontSize: ".8rem", color: "#8a877f" }}>
          <span>&copy; {new Date().getFullYear()} FASCO</span>
        </div>
      </div>
    </footer>
  );
}
