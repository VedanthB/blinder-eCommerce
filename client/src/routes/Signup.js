import React from "react";
import SignupForm from "../components/auth-pages/SignupForm";

function Signup() {
  return (
    <main style={{ top: "5rem", minHeight: "100vh" }}>
      <div className="spacer-3rem"></div>
      <div className="spacer-3rem"></div>
      <div className="spacer-3rem"></div>

      <div className="relative w-full flex justify-center align-items-center">
        <SignupForm />
      </div>
      <div className="spacer-3rem"></div>
      <div className="spacer-3rem"></div>
    </main>
  );
}

export default Signup;
