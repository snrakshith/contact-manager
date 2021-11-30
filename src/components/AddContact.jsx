import React from "react";
import "./addContact.css";

function AddContact() {
  return (
    <div>
      <h2>Add Contact</h2>
      <form className="form">
        <div className="inputContainer">
          <label htmlFor="name">Name</label>
          <input type="text" name="" id="name" placeholder="Name" />
        </div>
        <div className="inputContainer">
          <label htmlFor="email">Email</label>
          <input type="email" name="" id="email" placeholder="Email" />
        </div>
        <button>Add</button>
      </form>
    </div>
  );
}

export default AddContact;
