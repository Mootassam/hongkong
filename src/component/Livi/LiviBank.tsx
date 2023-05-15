import React from "react";
import "./Livi.css";
function LiviBank() {
  return (
    <div className="app__livi">
      <div className="livi">
        <div className="livi__logo">
          <img src="/livi/livi.png" alt="" width={168} />
        </div>

        <div className="livi__content">
          <div className="contentlivi__top">
            <div className="livi__transferamount">
              <label htmlFor="">Transfer Amount</label>
              <label htmlFor="" className="livi__">
                <div className="livi__totalAmount">200.00</div>
                <div className="currency__livi">HKD</div>
              </label>
            </div>

            <div className="livi__recipient">
              <label htmlFor="" className="title__livi">
                Recipient
              </label>
              <label htmlFor="" className="reciptient__label">
                YU W** M***
              </label>
            </div>

            <div className="livi__account">
              <label htmlFor="" className="title__livi">
                Recipient’s Account
              </label>
              <label htmlFor="" className="reciptient__account">
                +852-67598857
              </label>
            </div>

            <div className="livi__receiving">
              <label htmlFor="" className="title__livi">
                Receiving Bank
              </label>
              <label htmlFor="">
                <div className="bank__number"> 389</div>
                <div className="bank__limit"> Mox Bank Limited</div>
              </label>
            </div>

            <div className="livi__transactiontime">
              <label htmlFor="" className="title__livi">
                Transaction Time
              </label>
              <label htmlFor="" className="livi__time">
                13/03/2023 13:18
              </label>
            </div>

            <div className="livi__referencenumber">
              <label htmlFor="" className="title__livi">
                Reference Number
              </label>
              <label htmlFor="" className="livi__reference">
                202303130250100500001377079
              </label>
            </div>
          </div>
          <div className="content__livibottom">
            <div className="livibottom__left">
              <img src="/livi/qrcode.png" alt="" width={82} />
            </div>
            <div className="livibottom__right">
              <span className="image__party">
                <img src="/livi/party.png" width={16} />
                Sharing good stuff with you
              </span>
              <span>Scan the QR Code to enjoy account opening</span>
              <span>referral reward!</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LiviBank;