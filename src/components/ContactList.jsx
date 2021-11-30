import React from "react";
import ContactCard from "./ContactCard";

function ContactList() {
  return (
    <div>
      <h1>Contact List</h1>
      <ContactCard />
      <hr />
      <ContactCard />
      <hr />
      <ContactCard />
      <hr />
    </div>
  );
}

export default ContactList;
