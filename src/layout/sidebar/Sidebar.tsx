import React from "react";
import "./sidebar.css";
import optionBank from "../../data/OptionBank";
function Sidebar(props: any) {
  return (
    <div className="app__sidebar">
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
      <div className="app__screenshot" onClick={() => props.screenshot()}></div>
    </div>
  );
}

export default Sidebar;
