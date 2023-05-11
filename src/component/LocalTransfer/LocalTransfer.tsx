import React from "react";
import "./Localtransfer.css";
function LocalTransfer() {
  return (
    <div className="app__localtransfer">
      <div className="localtranfer__title">
        <div className="title__left"> Local Transfer</div>
        <div className="title__right">Print</div>
      </div>

      <div className="localtransfer__content">
        <div className="localtransfer__acknowledgement">
          <div className="acknowledgment__left">Acknowledgement</div>

          <div className="acknowledgment__right"> step</div>
        </div>
      </div>
    </div>
  );
}

export default LocalTransfer;
