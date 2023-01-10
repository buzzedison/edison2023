import React from "react";
import Meta from "components/Meta";
import AuthSection from "components/AuthSection";

function SigninPage(props) {
  return (
    <>
      <Meta title="Signin" />
      <AuthSection
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        type="signin"
        providers={["google", "facebook", "twitter"]}
        afterAuthPath="/dashboard"
      />
    </>
  );
}

export default SigninPage;
