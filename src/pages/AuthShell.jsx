export default function AuthShell({ visual, children }) {
  return (
    <main className="auth-page">
      <div className="auth-shell">
        <div className="auth-visual d-none d-md-block"><img src={visual} alt="" /></div>
        <div className="d-flex align-items-center justify-content-center p-4 p-lg-5">
          <div style={{ width: "100%", maxWidth: 380 }}>{children}</div>
        </div>
      </div>
    </main>
  );
}
