import { useState } from "react";
import AuthShell from "./AuthShell.jsx";
import { IMAGES } from "../data/images.js";

export default function ResetPassword({ go }) {
  const [pw, setPw] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");

  function submit(e) {
    e.preventDefault();
    if (pw.length < 8) { setError("Password must be at least 8 characters."); return; }
    if (pw !== confirm) { setError("Passwords don't match."); return; }
    go("signin");
  }

  return (
    <AuthShell visual={IMAGES.authReset}>
      <span className="logo-mark d-block mb-4">FASCO</span>
      <h1 className="section-heading mb-2">Set New Password</h1>
      <p className="text-muted mb-4">Choose a new password for your account.</p>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label className="form-label-fasco">New Password</label>
          <input type="password" required minLength="8" value={pw} onChange={(e) => setPw(e.target.value)} className="form-control-fasco" placeholder="At least 8 characters" />
        </div>
        <div className="mb-4">
          <label className="form-label-fasco">Confirm Password</label>
          <input type="password" required value={confirm} onChange={(e) => setConfirm(e.target.value)} className="form-control-fasco" placeholder="Re-enter password" />
        </div>
        {error && <p style={{ color: "var(--accent-deep)", fontSize: ".85rem" }}>{error}</p>}
        <button type="submit" className="btn-fasco w-100">Reset Password</button>
      </form>
    </AuthShell>
  );
}
