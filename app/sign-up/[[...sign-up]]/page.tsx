import { SignUp } from "@clerk/nextjs";

import React from 'react'

const SignUpPage = () => {
  return (
    <div className="flex justify-center items-center mt-20">
    <SignUp afterSignUpUrl="/new-user" redirectUrl="/new-user"/>
    </div>
  )
}

export default SignUpPage