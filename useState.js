import React from "react";
import "./style.css";


const UseState = () => {
  const t = 1;
  const [ct, setCt] = React.useState(t);

  return (
    <>
      <div className="center_div">
        <p>{ct}</p>
        <div class="button2" onClick={() => setCt(ct + 1)}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
          INCR
        </div>
        <div
          class="button2"
          onClick={() => (ct > 0 ? setCt(ct - 1) : setCt(0))}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          DECR
        </div>
      </div>
    </>
  );
};

export default UseState;
