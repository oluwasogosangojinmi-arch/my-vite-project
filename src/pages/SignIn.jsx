import AuthShell from "./AuthShell.jsx";
import { IMAGES } from "../data/images.js";

export default function SignIn({ go }) {
  return (
    <AuthShell visual={IMAGES.authSignIn}>
      <span className="logo-mark d-block mb-4">FASCO</span>
      <h1 className="section-heading mb-4">Sign In To FASCO</h1>
      <div className="d-flex gap-2 mb-4">
        <button type="button" className="btn-fasco-outline flex-fill" style={{ fontSize: ".78rem" }}>Sign up with Google</button>
        <button type="button" className="btn-fasco-outline flex-fill" style={{ fontSize: ".78rem" }}>Sign up with Email</button>
      </div>
      <div className="d-flex align-items-center gap-3 mb-4">
        <div style={{ flex: 1, borderTop: "1px solid var(--line)" }} />
        <span className="eyebrow">Or</span>
        <div style={{ flex: 1, borderTop: "1px solid var(--line)" }} />
      </div>
      <form onSubmit={(e) => { e.preventDefault(); go("home"); }}>
        <div className="mb-3"><label className="form-label-fasco">Email</label><input type="email" required className="form-control-fasco" placeholder="you@example.com" /></div>
        <div className="mb-2"><label className="form-label-fasco">Password</label><input type="password" required className="form-control-fasco" placeholder="********" /></div>
        <div className="text-end mb-4"><a style={{ fontSize: ".82rem", color: "var(--muted)", cursor: "pointer" }} onClick={() => go("forgot")}>Forget Password?</a></div>
        <button type="submit" className="btn-fasco w-100 mb-3">Sign In</button>
        <p className="text-center text-muted" style={{ fontSize: ".88rem" }}>
          Don't have an account? <a style={{ cursor: "pointer", color: "var(--ink)" }} onClick={() => go("signup")}>Register Now</a>
        </p>
      </form>
      <p className="text-center text-muted mt-4" style={{ fontSize: ".72rem" }}>FASCO Terms &amp; Conditions</p>
    </AuthShell>
  );
}
