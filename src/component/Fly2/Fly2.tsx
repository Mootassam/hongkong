import React from "react";
import "./FLy2.css";
function Fly2() {
  return (
    <div className="app__fly2">
      <div className="fly2"  style={{ boxShadow: '0px 4px 30px rgba(0, 0, 0, 0.1)' }}>


        <div className="fly2__logo">
          <img src="/Fly2/logo.png" alt="" width={122} />

          <div className="fly__title">轉賬成功</div>

          <div className="fly2__amount">-200.00 HKD</div>

          <img src="/Fly2/bar.png" alt="" />
        </div>

        <div className="fly2__bottom">
          <div>
            <div className="fly2__subtitle">收款人</div>
            <div  className="fly2__client">YU W** M***</div>
          </div>
          <div>
          <div className="fly2__subtitle">轉數快識別代碼</div>
            <div className="fly2__number">105430979</div>
          </div>
          <div>
          <div className="fly2__subtitle">日期及時間</div>
            <div className="fly2__date">19 Mar 2023 16:16</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fly2;
