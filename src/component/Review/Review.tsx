import React from "react";
import "./Review.css";
function Review(props) {
  return (
    <div className="app__review">
      <div className="review__header">
        <div className="review__headerleft">
          <div className="review__time">19:14</div>
        </div>

        <div className="review__headerright">
          <div className="review__level">35%</div>
        </div>
      </div>

      <div className="review__">
        <div className="review__left">
          <div className="review__back">
            <img src="/Review/back.png" alt="" width={14} />
          </div>
          <div className="review__text">Review</div>
        </div>
        <div className="review__right">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>

      <div className="review__content">
        <div className="content__detail">
          <div className="reviewcontent__left">
            <label htmlFor="" className="review__detailleft">
              From
            </label>
          </div>
          <div className="reviewcontent__right">
            <label htmlFor="">Personal Integrated Account HKD</label>
            <label htmlFor="">Savings</label>
            <label htmlFor="">841-479058-833</label>
          </div>
        </div>

        <br />

        <div className="content__detail">
          <div className="reviewcontent__left">
            <label htmlFor="" className="review__detailleft">
              To
            </label>
          </div>
          <div className="reviewcontent__right">
            <label htmlFor="">Pang Chi Sing</label>
            <label htmlFor="">389-Max Bank Limited</label>
            <label htmlFor="">74920857005</label>
          </div>
        </div>

        <br />

        <div className="content__detail">
          <div className="reviewcontent__left">
            <label htmlFor="" className="review__detailleft">
              Amount
            </label>
          </div>
          <div className="reviewcontent__right">
            <label htmlFor="">{props.amount}</label>
          </div>
        </div>

        <div className="content__detail __fees">
          <div className="reviewcontent__left">
            <label htmlFor="" className="review__detailleft">
              Fees
            </label>
          </div>
          <div className="reviewcontent__right">
            <label htmlFor="">800.00</label>
          </div>
        </div>

        <div className="content__detail __data">
          <div className="reviewcontent__left">
            <label htmlFor="" className="review__detailleft">
              Transfer date
            </label>
          </div>
          <div className="reviewcontent__right">
            <label htmlFor="">800.00</label>
          </div>
        </div>

        <div className="content__information">
          <label htmlFor="">Important information</label>
          <div className="information__desctioption">
            <ul>
              <li>
            
                Service fees and processing time are subject to variation at the
                discretion of the payee’s bank or payment service provider.
                Please note that some banks and payment service providers may
                impose additional fees.
              </li>
              <li>
            
               Please check your payment
                details carefully before continuing, as this payment cannot be
                recalled.
              </li>
              <li>
              
               Name checking may not be
                conducted in the fund transfer. Please carefully verify the
                payee’s account number and other payment details.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="review__bottom">
        <div className="review__button"></div>
        <div className="bottom__phonerview">
          <img src="/Review/bottom__phone.png" alt="" width={219} />
        </div>
      </div>
    </div>
  );
}

export default Review;
