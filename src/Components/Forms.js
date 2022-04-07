import React, { useState, Component } from "react";
import ReusableButton from "./Button";

function ReusableForms() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [password, setPassword] = useState("");
  const [comment, setComment] = useState("");
  const [gender, setGender] = useState("");
  const [hobby, setHobby] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("name: " + name);
    console.log("surname: " + surname);
    console.log("email: " + email);
    console.log("date: " + date);
    console.log("password: " + password);
    console.log("comment: " + comment);
    console.log("gender: " + gender);
    console.log("hobby: " + hobby);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign In</h2> <br />
      <label>
        Name
        <br />
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>{" "}
      <br />
      <label>
        Surname
        <br />
        <input
          type="text"
          placeholder="Enter your surname"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
        />
      </label>{" "}
      <br />
      <label>
        Email <br />
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>{" "}
      <br />
      <label>
        Date of birth <br />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </label>{" "}
      <br />
      <label>
        Password <br />
        <input
          type="password"
          placeholder="Created a password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>{" "}
      <br />
      <label>
        Enter your comment: <br />
        <input
          type="comment"
          placeholder="Enter your comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </label>{" "}
      <br />
      <label>
        Enter your gender:
        <div>
          <input
            type="radio"
            value="male"
            checked={gender === "male"}
            onChange={(e) => setGender(e.target.value)}
          />{" "}
          Male
        </div>
        <div>
          <input
            type="radio"
            value="female"
            checked={gender === "female"}
            onChange={(e) => setGender(e.target.value)}
          />{" "}
          Female
        </div>
        <div>
          <input
            type="radio"
            value="other"
            checked={gender === "other"}
            onChange={(e) => setGender(e.target.value)}
          />{" "}
          Other
        </div>
      </label>
      <label>
        Select your hobby
        <br />
        <div>
          <input
            type="checkbox"
            value="dans"
            checked={hobby === "dans"}
            onChange={(e) => setHobby(e.target.value)}
          />{" "}
          Dans
        </div>
        <div>
          <input
            type="checkbox"
            value="voleyball"
            checked={hobby === "voleyball"}
            onChange={(e) => setHobby(e.target.value)}
          />{" "}
          VoleyBall
        </div>
        <div>
          <input
            type="checkbox"
            value="inot"
            checked={hobby === "inot"}
            onChange={(e) => setHobby(e.target.value)}
          />{" "}
          Inot
        </div>
        <div>
          <input
            type="checkbox"
            value="muzica"
            checked={hobby === "muzica"}
            onChange={(e) => setHobby(e.target.value)}
          />{" "}
          Muzica
        </div>
      </label>
      <ReusableButton type="outline-primary">Sign In</ReusableButton>
    </form>
  );
}
export default ReusableForms;
