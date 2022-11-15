import { useState } from "react";
import { ComparatorByState } from "./ComparatorByState";
import States from "./States.json";

import "../../Styles/Table.css";
import arrow_down from "../../Assets/Images/arrow_down.png";
import arrow_up from "../../Assets/Images/arrow_up.png";
import empty from "../../Assets/Images/Empty.png";

function Table(props) {
  let arr = props.arr;
  const [sortType, setSortType] = useState(States.NameAsc);
  const [changeRowIndex, setChangeRowIndex] = useState(-1);
  const [rowData, setRowData] = useState({});
  arr.sort(ComparatorByState[sortType]);
  return (
    <div className="Table">
      <table>
        <tbody>
          <tr>
            <th
              onClick={() => {
                setSortType(
                  sortType === States.NameAsc ? States.NameDec : States.NameAsc
                );
                arr.sort(ComparatorByState[sortType]);
              }}
            >
              Name
              <img
                className="sortIndicator"
                src={
                  sortType === States.NameAsc
                    ? arrow_down
                    : sortType === States.NameDec
                    ? arrow_up
                    : empty
                }
                alt=""
              />
            </th>
            <th
              onClick={() => {
                setSortType(
                  sortType === States.EmailAsc
                    ? States.EmailDec
                    : States.EmailAsc
                );
                arr.sort(ComparatorByState[sortType]);
              }}
            >
              E-mail address
              <img
                className="sortIndicator"
                src={
                  sortType === States.EmailAsc
                    ? arrow_down
                    : sortType === States.EmailDec
                    ? arrow_up
                    : empty
                }
                alt=""
              />
            </th>
            <th
              onClick={() => {
                setSortType(
                  sortType === States.PhoneAsc
                    ? States.PhoneDec
                    : States.PhoneAsc
                );
                arr.sort(ComparatorByState[sortType]);
              }}
            >
              Phone number
              <img
                className="sortIndicator"
                src={
                  sortType === States.PhoneAsc
                    ? arrow_down
                    : sortType === States.PhoneDec
                    ? arrow_up
                    : empty
                }
                alt=""
              />
            </th>
          </tr>
          {arr.map((el, index) => {
            if (index === changeRowIndex) {
              return (
                <tr key={index}>
                  <td>
                    <input
                      type="text"
                      placeholder="Full name"
                      value={rowData.name}
                      name="Name"
                      onChange={(e) =>
                        setRowData((previousData) => {
                          let newData = {
                            id: previousData.id,
                            phone: previousData.phone,
                            email: previousData.email,
                          };
                          newData.name = e.target.value;
                          return newData;
                        })
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      placeholder="E-mail Address"
                      value={rowData.email}
                      name="Email"
                      onChange={(e) =>
                        setRowData((previousData) => {
                          let newData = {
                            id: previousData.id,
                            name: previousData.name,
                            phone: previousData.phone,
                          };
                          newData.email = e.target.value;
                          return newData;
                        })
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      placeholder="Phone number"
                      value={rowData.phone}
                      name="Phone"
                      onChange={(e) =>
                        setRowData((previousData) => {
                          let newData = {
                            id: previousData.id,
                            name: previousData.name,
                            email: previousData.email,
                          };
                          newData.phone = e.target.value;
                          return newData;
                        })
                      }
                    />
                  </td>
                  <td>
                    <div className="buttonPanelActive">
                      <button
                        className="buttonCancel"
                        onClick={() => {
                          setChangeRowIndex(-1);
                        }}
                      >
                        Cancel
                      </button>
                      <button
                        className="buttonSave"
                        onClick={() => {
                          props.changeParticipant(rowData);
                          setChangeRowIndex(-1);
                        }}
                      >
                        Save
                      </button>
                    </div>
                  </td>
                </tr>
              );
            } else {
              return (
                <tr key={index}>
                  <td>{el.name}</td>
                  <td>{el.email}</td>
                  <td>{el.phone}</td>
                  <td>
                    <div className="buttonPanelDefault">
                      <button
                        className="buttonEdit"
                        onClick={() => {
                          setChangeRowIndex(index);
                          setRowData(() => {
                            let newData = arr[index];
                            return newData;
                          });
                        }}
                      ></button>
                      <button
                        className="buttonDelete"
                        onClick={() => props.deleteParticipant(el.id)}
                      ></button>
                    </div>
                  </td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
