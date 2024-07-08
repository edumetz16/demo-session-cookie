'use client';
import { setCookie } from "cookies-next";
import { cookies } from "next/headers";

const Button = () => {
  return (
    <a onClick={()=>{setCookie("__session", `test-${new Date().getTime()}`)}}>Set cookie</a>
  );
};

export default Button;