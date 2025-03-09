import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PrimaryButton } from "../buttons/PrimaryButton";

export const Login = () => {
  const [loginData, setLoginData] = useState();

  const navigate = useNavigate();

  const handleLogin = () => {
    console.log(loginData);
    navigate("/");
  };

  return (
    <div className="h-screen bg-gray-300">
      <form className="flex flex-col gap-4 justify-center items-center h-screen">
        <h1 className="text-xl font-bold">Login Form</h1>
        <div className="border p-4 rounded-2xl border-gray-400">
          <div className="flex flex-col gap-1">
            <label htmlFor="">Email</label>
            <input
              className="border border-gray-400 rounded p-2"
              type="email"
              placeholder="Enter your Email"
              value={loginData?.email}
              onChange={(e) =>
                setLoginData({ ...loginData, email: e.target.value })
              }
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="">Password</label>
            <input
              className="border border-gray-400 rounded p-2"
              type="password"
              placeholder="Enter your password"
              value={loginData?.password}
              onChange={(e) =>
                setLoginData({ ...loginData, password: e.target.value })
              }
            />
          </div>

          <div className="flex justify-center mt-4">
            <PrimaryButton label={"Login"} handleOnClick={handleLogin} />
          </div>
        </div>
      </form>
    </div>
  );
};
