import React from "react";
import "./Chan.css";
function Chan() {
  return (
    <div className="app__chan">
      <div className="chan__header">
        <div className="chan__left">
          <div className="chan__time">19:20</div>
        </div>

        <div className="chan__right">
          <div className="chan__battery">
            <div className="battery__chan">
              <div className="chan__level"></div>
            </div>

            <div className="chan__borderbattery"></div>
          </div>
        </div>
      </div>

      <div className="chan__content">
        <div className="chan__top">
          <div className="chan__circle">
            <img src="/Chan/check.png" alt="" width={17} height={12} />
          </div>
          <div className="chan__title">轉數成功！</div>
        </div>
      </div>

      <div className="chan__detail">
        <div className="detaill__firtline">
          <div className="firstline__left">
            <div className="firstline__circle">
              <span>CH</span>
            </div>
            <div className="detaills">
              <div className="first__top">CHAN Y** H**</div>
              <div className="first__bottom">3月6日 19:20</div>
            </div>
          </div>
          <div className="firstline__right">
            <div className="right__amoutn">800.00</div>

            <div className="right__currency">HKD</div>
          </div>
        </div>

        <img src="/Chan/bar.png" alt="" className="chan__bars" />

        <div className="second__line">
          <div className="secondline__left">
            <span>類別</span>
          </div>
          <div className="secondline__right">
            <span>轉数到好友戶口</span>
          </div>
        </div>
        <img src="/Chan/bar.png" alt="" className="chan__bars" />
        <div className="chan__lastline">
        <span>查看詳情</span>
      </div>
      </div>

      <div className="chan__footer">
        <div className="chan__button">
          <span>完成</span>
        </div>

        <div className="chan__submobile"></div>
      </div>

    
    </div>
  );
}

export default Chan;
