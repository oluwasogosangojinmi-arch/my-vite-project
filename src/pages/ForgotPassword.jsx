import AuthShell from "./AuthShell.jsx";
import { IMAGES } from "../data/images.js";

export default function ForgotPassword({ go }) {
  return (
    <AuthShell visual={IMAGES.authForgot}>
      <span className="logo-mark d-block mb-4">FASCO</span>
      <h1 className="section-heading mb-4">Forget Password</h1>
      <form onSubmit={(e) => { e.preventDefault(); go("confirmation"); }}>
        <div className="row g-3 mb-3">
          <div className="col-6"><label className="form-label-fasco">First Name</label><input type="text" required className="form-control-fasco" /></div>
          <div className="col-6"><label className="form-label-fasco">Last Name</label><input type="text" required className="form-control-fasco" /></div>
        </div>
        <div className="row g-3 mb-4">
          <div className="col-6"><label className="form-label-fasco">Email Address</label><input type="email" required className="form-control-fasco" /></div>
          <div className="col-6"><label className="form-label-fasco">Phone Number</label><input type="tel" required className="form-control-fasco" /></div>
        </div>
        <button type="submit" className="btn-fasco w-100 mb-3">Send Confirmation Code</button>
        <p className="text-center text-muted" style={{ fontSize: ".88rem" }}>
          Already have an account? <a style={{ cursor: "pointer", color: "var(--ink)" }} onClick={() => go("signin")}>Login</a>
        </p>
      </form>
      <p className="text-center text-muted mt-4" style={{ fontSize: ".72rem" }}>FASCO Terms &amp; Conditions</p>
    </AuthShell>
  );
}
