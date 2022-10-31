import { useState } from "react";
import Form from "./Components/Form.js";
import Table from "./Components/Table/Table.js";

function App() {
  var [participants, setParticipants] = useState([
    {
      id: 0,
      name: "John Doe",
      email: "john.doe@gmail.com",
      phone: "0405678471",
    },
  ]);
  const changeParticipant = (newParticipant) => {};

  const deleteParticipant = (index) => {
    console.log("delete", index);
    setParticipants((participants) =>
      participants.filter((participant) => participant.id !== index)
    );
  };
  const addParticipant = (newParticipant) => {
    newParticipant.id = participants.length;
    setParticipants((participants) => [...participants, newParticipant]);
  };
  return (
    <div className="App">
      <div className="content">
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
