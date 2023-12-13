import { useState } from "react";

const User = ({ name }) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(1);
  return (
    <div className="user-card">
      {/* <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        update
      </button> */}
      <h1>Count= {count}</h1>
      <h1>Count= {count2}</h1>
      <h2>Name:{name}</h2>
      <h3>Location: Patna</h3>
      <h4>contact: app.gaurav19@gmail.com</h4>
    </div>
  );
};

export default User;
