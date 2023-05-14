import React from "react";
import "./bankChina.css";
function BankChina() {
  return (
    <div className="app__china">
      <div className="china__header">
        <img src="/bankchina/bankchina.png" alt="" width={196} />
      </div>
      <img
        src="/bankchina/background.png"
        alt=""
        width={188}
        className="backgroundchina__image"
      />
      <div className="china__content">
        <div className="contentchina__detail">
          <div className="china__left">參考編號</div>
          <div className="china__right">2307209195735</div>
        </div>

        <div className="contentchina__detail __topspace">
          <div className="china__left">交易種類</div>
          <div className="china__right">即時轉賬</div>
        </div>
        <div className="contentchina__detail __topspace">
          <div className="china__left">交易状態</div>
          <div className="china__right">款项已成功發送給收款人</div>
        </div>

        <div className="contentchina__detail __topspace">
          <div className="china__left">交易日期</div>
          <div className="china__right __chinadate">2023/03/13</div>
        </div>

        <div className="contentchina__detail __topspace">
          <div className="china__left">付款人/賬戶</div>
          <div className="china__right __detail">
            <span>LUI M** L**</span>
            <span>港元儲蓄賬戶</span>
            <span>012***692</span>
          </div>
        </div>

        <div className="contentchina__detail normalspace">
          <div className="china__left">收款人/賬户</div>
          <div className="china__right __detail">
            <span>YU W** M***</span>
            <span>+852-67598857</span>
            <span>轉數快-預設收款銀行/機構</span>
          </div>
        </div>
        <div className="contentchina__detail normalspace">
          <div className="china__left">轉賬金額</div>
          <div className="china__right __specialfont ">港元200.00</div>
        </div>
        <div className="contentchina__detail normalspace">
          <div className="china__left">轉賬費用</div>
          <div className="china__right __specialfont ">豁免轉賬費用</div>
        </div>
        <div className="contentchina__detail normalspace">
          <div className="china__left">轉賬日期</div>
          <div className="china__right __specialfont ">即時</div>
        </div>

        <div className="contentchina__detail normalspace">
          <div className="china__left">轉賬編號</div>
          <div className="china__right __normalfont ">12230313F285244203</div>
        </div>
      </div>
    </div>
  );
}

export default BankChina;
