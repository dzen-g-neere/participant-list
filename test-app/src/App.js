import { useState } from "react";
import Form from "./Components/Form.js";
import Table from "./Components/Table/Table.js";

import "./Styles/App.css";
import logo from "./Assets/Images/logo.png";

import arr from './Data/participants.json';

function App() {
  const [participants, setParticipants] = useState(arr);

  const changeParticipant = (newParticipant) => {
    setParticipants((participants) => {
      let participantsNew = participants.filter(
        (participant) => participant.id !== newParticipant.id
      );
      return [...participantsNew, newParticipant];
    });
  };

  const deleteParticipant = (index) => {
    setParticipants((participants) =>
      participants.filter((participant) => participant.id !== index)
    );
  };

  const addParticipant = (newParticipant) => {
    setParticipants((participants) => {
      newParticipant.id = participants.length;
      let participantsNew = [...participants];
      return [...participantsNew, newParticipant];
    });
  };

  return (
    <div className="App">
      <div className="header">
        <img src={logo} alt="" />
        <h1 className="table-title">Starlord Software</h1>
      </div>
      <div className="content">
        <h1 className="table-title">List of participants</h1>
        <Form arr={participants} addParticipant={addParticipant} />
        <Table
          arr={participants}
          changeParticipant={changeParticipant}
          deleteParticipant={deleteParticipant}
        />
      </div>
    </div>
  );
}

export default App;
