import React from "react";
import TableData from "./TableData";

const DisplayTable = ({ data, onItemDelete }) => {
  return (
    <table>
      <thead>
        <tr>
          <td>Name</td>
          <td>Number</td>
          <td>Time</td>
          <td>Energy</td>
          <td>...</td>
        </tr>
      </thead>

      <tbody>
        {data.map((appliance, key)=> {
            return (
              <TableData
                key={key}
                data={appliance}
                onDelete={onItemDelete}
              />
            );
        })}
      </tbody>
    </table>
  );
};

export default DisplayTable;
