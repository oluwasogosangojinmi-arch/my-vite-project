import AuthShell from "./AuthShell.jsx";
import { IMAGES } from "../data/images.js";

export default function Confirmation({ go }) {
  return (
    <AuthShell visual={IMAGES.authConfirmation}>
      <div className="text-center">
        <span className="logo-mark d-block mb-4">FASCO</span>
        <div className="mx-auto mb-4 d-flex align-items-center justify-content-center" style={{ width: 52, height: 52, borderRadius: "50%", background: "var(--surface)" }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M5 13l4 4L19 7" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h1 className="section-heading mb-2">Check Your Email</h1>
        <p className="text-muted mb-4">We've sent a confirmation code to your provided email / phone number.</p>
        <button className="btn-fasco w-100 mb-3" onClick={() => go("reset")}>I've Reset My Password</button>
        <a style={{ fontSize: ".88rem", color: "var(--muted)", cursor: "pointer" }} onClick={() => go("signin")}>Back to sign in</a>
      </div>
    </AuthShell>
  );
}
