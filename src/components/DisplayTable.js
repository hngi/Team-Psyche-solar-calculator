import React from "react";
import TableData from "./TableData";

const DisplayTable = ({ data, onItemDelete }) => {
  return (
    <>
      {!!data.length || (
        <div className="text-center py-3 text-2xl italic opacity-50">Add an appliance to begin</div>
      )}
      {data.length > 0 &&
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
          {data.map((appliance, key) => {
            return (
              <TableData key={key} data={appliance} onDelete={onItemDelete} />
            );
          })}
        </tbody>
      </table>}
    </>
  );
};

export default DisplayTable;
