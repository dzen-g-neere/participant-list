import { useEffect, useState } from "react";
import SortTypes from "./SortTypes.json";

function Table(props) {
  let arr = props.arr;
  const [sortType, setSortType] = useState(SortTypes.EmailDesc);
  return (
    <div className="App">
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>E-mail address</th>
            <th>Phone number</th>
            {/* <th></th> */}
          </tr>
          {arr.map((el, index) => {
            return (
              <tr key={index}>
                <td>{el.name}</td>
                <td>{el.email}</td>
                <td>{el.phone}</td>
                <td>
                  <button onClick={()=>props.changeParticipant(el.id)}>Edit</button>
                </td>
                <td>
                  <button onClick={()=>props.deleteParticipant(el.id)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
