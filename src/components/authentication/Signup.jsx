import React, { useState } from "react";
import { PrimaryButton } from "../buttons/PrimaryButton";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const [signupData, setSignupData] = useState();

  const navigate = useNavigate();

  const handleSignup = () => {
    console.log(signupData);
    navigate("/login");
  };

  return (
    <div className="h-screen bg-gray-300">
      <form className="flex flex-col gap-4 justify-center items-center h-screen">
        <h1 className="text-xl font-bold">Signup Form</h1>
        <div className="border p-4 rounded-2xl border-gray-400">
          <div className="flex flex-col gap-1">
            <label htmlFor="">Full Name</label>
            <input
              className="border border-gray-400 rounded p-2"
              type="text"
              placeholder="Enter your name"
              value={signupData?.name}
              onChange={(e) =>
                setSignupData({ ...signupData, name: e.target.value })
              }
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="">Email</label>
            <input
              className="border border-gray-400 rounded p-2"
              type="email"
              placeholder="Enter your Email"
              value={signupData?.email}
              onChange={(e) =>
                setSignupData({ ...signupData, email: e.target.value })
              }
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="">Password</label>
            <input
              className="border border-gray-400 rounded p-2"
              type="password"
              placeholder="Enter your password"
              value={signupData?.password}
              onChange={(e) =>
                setSignupData({ ...signupData, password: e.target.value })
              }
            />
          </div>

          <div className="flex justify-center mt-4">
            <PrimaryButton label={"Signup"} handleOnClick={handleSignup} />
          </div>
        </div>
      </form>
    </div>
  );
};
