import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);

  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  if (error) {
    console.log(error.message);
  }
  if (loading) {
    console.log(loading);
  }

  if (user) {
    console.log(user);
  }
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="card w-96 shadow-xl">
        <div className="card-body items-center text-center">
          <h2 className="card-title">Login</h2>
          <div className="">
            <form onSubmit={handleSubmit(onSubmit)}>
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                className="input input-bordered w-full max-w-xs"
                placeholder="Your Email"
                {...register("email", {
                  pattern: {
                    value: /[A-Za-z]{3}/,
                    message: "error message",
                  },
                })}
              />
              <label className="label">
                <span className="label-text-alt">alt</span>
              </label>

              <input />
              {errors.firstName?.type === "required" &&
                "First name is required"}

              <input {...register("lastName", { required: true })} />
              {errors.lastName && "Last name is required"}

              <input type="submit" />
            </form>

            <div className="divider">OR</div>
            <button
              onClick={() => signInWithGoogle()}
              className="btn btn-outline"
            >
              Continue With Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
