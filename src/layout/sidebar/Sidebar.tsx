import React from "react";
import "./sidebar.css";
import optionBank from "../../data/OptionBank";
function Sidebar(props: any) {
  return (
    <div className="app__sidebar">
      <div className="sidebar__form">
        <div className="form__group">
          <label htmlFor=""> Select bank</label>
          <select
            name="bank"
            className="app__select"
            onChange={(e) => props.setvalue(e.target.value)}
          >
            {optionBank.map((item) => (
              <option value={item.value}>{item.name} </option>
            ))}
          </select>
        </div>

        <div className="form__group">
          <label htmlFor=""> Write the Amount</label>

          <input
            type="number"
            name=""
            placeholder=""
            id=""
            onChange={(e) => props.setAmount(e.target.value)}
            maxLength={9}
          />
        </div>

        {/* <div className="form__group">
          <label htmlFor="">Customer Name</label>

          <input
            type="text"
            name=""
            placeholder=""
            id=""
            onChange={(e) => props.setCustomer(e.target.value)}
          />
        </div> */}
      </div>
      <div className="app__screenshot" onClick={() => props.screenshot()}></div>
    </div>
  );
}

export default Sidebar;
