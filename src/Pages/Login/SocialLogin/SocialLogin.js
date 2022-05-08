import React from "react";
import google from "../../../images/social/google.png";
import github from "../../../images/social/github.png";
import facebook from "../../../images/social/facebook.png";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useNavigate } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
  const navigate = useNavigate();

  let errorElement;

  if (loading || loading1) {
    return <Loading></Loading>;
  }

  if (error || error1) {
    errorElement = (
      <p className="text-danger">
        Error: {error?.message}
        {error1?.message}
      </p>
    );
  }

  if (user) {
    navigate("/home");
  }

  return (
    <div className="d-block">
      <div className="d-flex align-items-center">
        <div className="bg-primary w-50" style={{ height: "1px" }}></div>
        <p className="mt-2 px-2">or</p>
        <div className="bg-primary w-50" style={{ height: "1px" }}></div>
      </div>
      {errorElement}
      <div>
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-info w-50 d-block mx-auto my-2"
        >
          <img src={google} alt="" />
          <span className="px-2">Google Sign In</span>
        </button>

        <button
          onClick={() => signInWithGithub()}
          className="btn btn-info w-50 d-block mx-auto my-2"
        >
          <img src={github} alt="" />
          <span className="px-2">Github Sign In</span>
        </button>

        <button className="btn btn-info w-50 d-block mx-auto my-2">
          <img src={facebook} height="30px" alt="" />
          <span className="px-2">Facebook Sign In</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
