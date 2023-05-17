import React from "react";
import "./green.css";
function Green() {
  return (
    <div className="app__green">
      <div className="green__header">
        <div className="green__left">
          <span>20:04</span>
        </div>
        <div className="green__right">
          <div className="green__data">
            <div className="green__1"></div>
            <div className="green__2"></div>
            <div className="green__3"></div>
            <div className="green__4"></div>
            <div className="green__5"></div>
          </div>

          <div className="greeen__battery">
            <div className="green__border"></div>
            <div className="green__bat"></div>
          </div>
        </div>
      </div>
      <div className="green__subheader">
        <div></div>
        <div className="green__subtitle">已完成</div>
        <div className="green__mobile">
          <img src="/Green/phone.png" alt="" width={15} />
        </div>
      </div>

      <img src="/Green/bar.png" alt="" />

      <div className="green__content">
        <div className="green__circle">
          <img src="/Green/check.png" width={21} />
        </div>

        <div className="green__title">
          <span className="title__green">已完成交易</span>
          <span className="green__description">參考編號 N33008120299</span>
        </div>
      </div>

      <div className="chinese__border">
        <label htmlFor="" className="chinese__label">
          收款人已收到你的轉服。
        </label>
      </div>

      <div className="chinese__logo">
        <div className="chinese__heaert">
          <img src="/Green/heart.png" alt="" width={18} height={15} />
          <label htmlFor="">常用收款人</label>
        </div>
        <div></div>
        <div className="chinese__heaert">
          <img src="/Green/save.png" alt="" width={18}  height={19}/>
          <label htmlFor="">儲存圖像</label>
        </div>

        <div className="chinese_save"></div>
      </div>
      <div className="green__bottom">
        <div className="green__white">
          <div className="green__text1">
            <span>返回轉賬及付款</span>
          </div>
          <div className="green__text2">
            <span>進行另一筆轉賬</span>
          </div>
        </div>

        <div className="bottom__black">
          <img src="/Green/mobile.png" alt="" width={180} />
        </div>
      </div>
    </div>
  );
}

export default Green;
