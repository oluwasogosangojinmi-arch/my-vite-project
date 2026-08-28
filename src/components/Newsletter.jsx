import { useState } from "react";
import { IMAGES } from "../data/images.js";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  function submit(e) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section className="container py-5">
      <div className="row align-items-center g-4">
        <div className="col-12 col-md-3 d-none d-md-block">
          <div className="newsletter-side"><img src={IMAGES.newsletterLeft} alt="" /></div>
        </div>
        <div className="col-12 col-md-6 text-center">
          <h2 className="section-heading mb-2">Subscribe To Our Newsletter</h2>
          <p className="text-muted mb-4" style={{ maxWidth: 420, margin: "0 auto" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin sem.
          </p>
          <form className="d-flex gap-2 justify-content-center flex-wrap" onSubmit={submit}>
            <input
              type="email"
              required
              placeholder="michael@ymail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control-fasco"
              style={{ maxWidth: 280, border: "1px solid var(--line)", padding: "10px 14px" }}
            />
            <button type="submit" className="btn-fasco">{sent ? "Subscribed" : "Subscribe Now"}</button>
          </form>
        </div>
        <div className="col-12 col-md-3 d-none d-md-block">
          <div className="newsletter-side"><img src={IMAGES.newsletterRight} alt="" /></div>
        </div>
      </div>
    </section>
  );
}
