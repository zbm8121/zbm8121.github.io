/* NOT BEING USED RIGHT NOW, BUT WAS A PREVIOUS REACT SITE I HAD */

import React, { useState } from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const startContacts = ["Zach Machtinger", "Fabi Marrufo", "Diego Avila"];

function AddPersonForm(props) {
  const [person, setPerson] = useState("");

  function handleChange(e) {
    setPerson(e.target.value);
  }

  function handleSubmit(e) {
    if (person !== "") {
      props.handleSubmit(person);
      setPerson("");
    }
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add new contact"
        onChange={handleChange}
      />
      <button type="submit">Add</button>
    </form>
  );
}

function PeopleList(props) {
  const listItems = props.data.map((val, index) => <li key={index}>{val}</li>);
  return <ul>{listItems}</ul>;
}

function ContactManager() {
  const [contacts, setContacts] = useState(startContacts);

  function addPerson(name) {
    setContacts([...contacts, name]);
  }

  return (
    <div>
      <AddPersonForm handleSubmit={addPerson} />
      <PeopleList data={contacts} />
    </div>
  );
}

const el = <ContactManager />;
root.render(el);

/* REPLACED: initial react code
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
*/