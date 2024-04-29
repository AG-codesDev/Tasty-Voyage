import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/LoginInfoSlice";

const LoginPage = () => {
  const dispatch = useDispatch();

  const [userName, setUserName] = useState("");
  const [password, setPassWord] = useState("");
  //   console.log(userName);
  //   console.log(password);

  const handleSubmit = () => {
    // console.log("submit clicked");
    dispatch(addUser({ userName, password }));
    console.log(name);
  };

  const name = useSelector((store) => store.login.name);

  return (
    <div className="Container flex outline mt-16 h-screen">
      <div>
        <input type="text" name="" id="" />
        <input type="text" name="" id="" />
      </div>
    </div>

    // <div className="flex flex-col w-fit ml-10 mt-10 gap-5">
    //   <input
    //     type="text"
    //     placeholder="name"
    //     className="outline"
    //     value={userName}
    //     onChange={(e) => setUserName(e.target.value)}
    //   />
    //   <input
    //     type="password"
    //     placeholder="password"
    //     className="outline"
    //     value={password}
    //     onChange={(e) => setPassWord(e.target.value)}
    //   />
    //   <button className="border-2 bg-gray-400" onClick={() => handleSubmit()}>
    //     Submit
    //   </button>
    // </div>
  );
};

export default LoginPage;
