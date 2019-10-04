import React from "react";
import Cancel from "../assets/svgs/Cancel.svg";

const TableData = ({ data, onDelete})  => {
    const { key, appliance, number, time, energy } = data;

    return (
      <tr>
        <td>{appliance}</td>
        <td>{number}</td>
        <td>{time}</td>
        <td>{energy}</td>
        <td>
          <button
            className="delBtn"
            onClick={onDelete.bind(null, key)}
          >
            <img src={Cancel} alt="cancel" />
          </button>
        </td>
      </tr>
    );
}

export default TableData;
