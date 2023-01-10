import React from "react";
import Meta from "components/Meta";
import AuthSection from "components/AuthSection";

function SignupPage(props) {
  return (
    <>
      <Meta title="Signup" />
      <AuthSection
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        type="signup"
        providers={["google", "facebook", "twitter"]}
        afterAuthPath="/dashboard"
      />
    </>
  );
}

export default SignupPage;
