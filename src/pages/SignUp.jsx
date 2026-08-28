import AuthShell from "./AuthShell.jsx";
import { IMAGES } from "../data/images.js";

export default function SignUp({ go }) {
  return (
    <AuthShell visual={IMAGES.authSignUp}>
      <span className="logo-mark d-block mb-4">FASCO</span>
      <h1 className="section-heading mb-2">Create Account</h1>
      <p className="text-muted mb-4">Join FASCO for early access to sales and drops.</p>
      <form onSubmit={(e) => { e.preventDefault(); go("home"); }}>
        <div className="mb-3"><label className="form-label-fasco">Full Name</label><input type="text" required className="form-control-fasco" placeholder="Jane Doe" /></div>
        <div className="mb-3"><label className="form-label-fasco">Email</label><input type="email" required className="form-control-fasco" placeholder="you@example.com" /></div>
        <div className="mb-4"><label className="form-label-fasco">Password</label><input type="password" required minLength="8" className="form-control-fasco" placeholder="At least 8 characters" /></div>
        <button type="submit" className="btn-fasco w-100 mb-3">Sign Up</button>
        <p className="text-center text-muted" style={{ fontSize: ".88rem" }}>
          Already have an account? <a style={{ cursor: "pointer", color: "var(--ink)" }} onClick={() => go("signin")}>Sign in</a>
        </p>
      </form>
    </AuthShell>
  );
}
