import React from "react";
import "./sidebar.css";
function Sidebar(props: any) {
  return (
    <div className="app__sidebar">
      <div className="form__group">
        <label htmlFor=""> Select bank</label>
        <select name="" id="" className="app__select">
          <option value="1"> Bank 1</option>
          <option value="1"> Bank 2</option>
          <option value="1"> Bank 3</option>
          <option value="1"> Bank 4</option>
          <option value="1"> Bank 5</option>
        </select>
      </div>

      <div className="app__screenshot" onClick={() => props.screenshot()}></div>
    </div>
  );
}

export default Sidebar;
