import React from "react";
import LoginForm from "../components/auth-pages/LoginForm";

function Login() {
  return (
    <main style={{ top: "5rem", minHeight: "100vh" }}>
      <div className="spacer-3rem"></div>
      <div className="spacer-3rem"></div>
      <div className="spacer-3rem"></div>

      <div className="relative w-full flex justify-center align-items-center">
        <LoginForm />
      </div>
      <div className="spacer-3rem"></div>
      <div className="spacer-3rem"></div>
    </main>
  );
}

export default Login;
