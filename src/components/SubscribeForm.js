import React, { useState } from "react";

const SubscribeForm = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Use the API endpoint we set up in the previous step
    fetch("https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec", {
      method: "POST",
      body: JSON.stringify({ firstName, email }),
    })
      .then((response) => response.json())
      .then((data) => {
        alert("Thank you for subscribing!");
        setFirstName("");
        setEmail("");
      })
      .catch((error) => alert("Error submitting form"));
  };

  return (
    <form onSubmit={handleSubmit} className="subscribe-form">
      <div>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
      </div>
      <div>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <button type="submit">Subscribe</button>
      </div>
    </form>
  );
};

export default SubscribeForm;
