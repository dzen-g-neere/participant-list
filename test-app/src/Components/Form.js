import { useState } from "react";

function Form(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  return (
    <div className="Form">
      <form>
        <input
          type="text"
          placeholder="Full name"
          value={name}
          name="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="E-mail address"
          value={email}
          name="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Phone number"
          value={phone}
          name="Phone"
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          type="button"
          className="addNewButton"
          value="Add new"
          onClick={() => {
            props.addParticipant({ name: name, email: email, phone: phone });
          }}
        />
      </form>
    </div>
  );
}

export default Form;
