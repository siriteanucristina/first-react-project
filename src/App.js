import React, { useState, useEffect, Component } from "react";
import "./Style/app.css";
import "./Style/button.css";
import Button from "./Components/Button";
import "./Style/form.css";
import Input from "./Components/Input";
// import Textare from "./Components/Textare";
// import Select from "./Components/Select";
// import "./Style/card.css";
// import Card from "./Components/Card";
import Dropdown from "./Components/Dropdown";
import Modal from "./Components/Modal";
// import Home from "./Pages/Home";
// import ConditionalRendering from "./Pages/ConditionalRendering";
// import FunctionClick from "./Pages/FunctionClick";
// import ClassClick from "./Pages/ClassClick";
// import UseContextHook from "./Pages/UseContextHook";
// import ShowContent from "./Pages/ShowContent";

const items = ["banana", "apple", "orange", "pear", "grape", "berry"];

function App() {
  const [showDropdown, setShowDropdown] = useState(false);

  //Pentru butoane
  function onClick(props) {
    console.log("The button has been accessed!");
  }

  //Pentru formular
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [hobby, setHobby] = useState("");
  const [file, setFile] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("name: " + name);
    console.log("surname: " + surname);
    console.log("email: " + email);
    console.log("date: " + date);
    console.log("password: " + password);
    console.log("gender: " + gender);
    console.log("hobby: " + hobby);
    console.log("file: " + file);
  };

  const [modal, setModal] = useState(false);
  const Move = () => setModal(!modal);

  return (
    <div className="App">
      <div className="content">
        <h1> Tipuri de butoane: </h1>
        <div>
          <h4>Butonul clasic</h4>
          <Button>Basic</Button>

          <h4>Exemple de butoane</h4>
          <Button onClick={onClick} type="default">
            Default
          </Button>
          <Button onClick={onClick} type="primary">
            Primary
          </Button>
          <Button onClick={onClick} type="secondary">
            Secondary
          </Button>
          <Button onClick={onClick} type="success">
            Success
          </Button>
          <Button onClick={onClick} type="info">
            Info
          </Button>
          <Button onClick={onClick} type="warning">
            Warning
          </Button>
          <Button onClick={onClick} type="danger">
            Danger
          </Button>
          <Button onClick={onClick} type="dark">
            Dark
          </Button>
          <Button onClick={onClick} type="light">
            Light
          </Button>
          <Button onClick={onClick} type="link">
            Link
          </Button>
          <Button onClick={onClick} type="active">
            Active
          </Button>
          <Button onClick={onClick} type="disabled">
            Disabled
          </Button>

          <h4>Outline butoane</h4>
          <Button onClick={onClick} type="outline-primary">
            Primary
          </Button>
          <Button onClick={onClick} type="outline-secondary">
            Secondary
          </Button>
          <Button onClick={onClick} type="outline-success">
            Succes
          </Button>
          <Button onClick={onClick} type="outline-info">
            Info
          </Button>
          <Button onClick={onClick} type="outline-warning">
            Warning
          </Button>
          <Button onClick={onClick} type="outline-danger">
            Danger
          </Button>
          <Button onClick={onClick} type="outline-dark">
            Dark
          </Button>
          <Button onClick={onClick} type="outline-light">
            Light
          </Button>

          <h4>Sizes buttons</h4>
          <Button onClick={onClick} type="primary" size="large">
            Large
          </Button>
          <Button onClick={onClick} type="primary" size="small">
            Small
          </Button>
          <Button onClick={onClick} type="primary" size="xsmall">
            XSmall
          </Button>
        </div>
        <h1> Formular </h1>
        <form onSubmit={handleSubmit}>
          <h4>Enter your name:</h4>
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <h4>Enter your surname:</h4>
          <Input
            type="text"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />
          <h4>Enter your date of birth:</h4>
          <Input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <h4>Enter your email:</h4>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h4>Enter your password:</h4>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <h4>Enter your gender:</h4>
          <Input
            type="radio"
            value="femeie"
            checked={gender === "femeie"}
            onChange={(e) => setGender(e.target.value)}
          />
          Femeie
          <Input
            type="radio"
            value="barbat"
            checked={gender === "barbat"}
            onChange={(e) => setGender(e.target.value)}
          />
          Barbat
          <h4>Enter your hobby:</h4>
          <Input
            type="checkbox"
            value="mobile dev"
            checked={hobby === "mobile dev"}
            onChange={(e) => setHobby(e.target.value)}
          />
          Mobile Developer (Android/iOS/ReactJS-Native) <br />
          <Input
            type="checkbox"
            value="frontend web dev"
            checked={hobby === "frontend web dev"}
            onChange={(e) => setHobby(e.target.value)}
          />
          FrontEnd Web Developer <br />
          <Input
            type="checkbox"
            value="backtend web dev"
            checked={hobby === "backend web dev"}
            onChange={(e) => setHobby(e.target.value)}
          />
          BackEnd Web Developer <br />
          <Input
            type="checkbox"
            value="software dev"
            checked={hobby === "software dev"}
            onChange={(e) => setHobby(e.target.value)}
          />
          Software Developer - Testing <br />
          <h4>Enter your CV:</h4>
          Select a file:
          <Input
            type="file"
            value={file}
            onChange={(e) => setFile(e.target.value)}
          />
          <br />
          <Input type="submit" />
          <Input type="reset" />
        </form>
        {/* <h1> Formular de tip text </h1>
        <form>
          <Textare rows="5" cols="40" /> <br />
          <Input type="submit" />
          <Input type="reset" />
        </form>
        <h1> Formular de tip selectare </h1>
        <form>
          <h4>Select the dream car: </h4>
          <Select
            data={[
              { value: 1, label: "Volvo" },
              { value: 2, label: "BMW" },
              { value: 3, label: "Mercedes" },
              { value: 4, label: "Audi" },
              { value: 5, label: "Opel" },
            ]}
          />
          <br />
          <Input type="submit" />
          <Input type="reset" />
        </form> */}
        {/* <Card
          title="Fluture"
          imageURL="https://naturescu.com/wp-content/uploads/2021/06/Fluture-coada-randunicii.jpg"
          text="Acești fluturi au peste 500 de specii și aparțin familiei Papilionidae. Sunt foarte mari, colorați și foarte răspândiți, majoritatea speciilor lor se găsesc pe fiecare continent, cu excepția Antarcticii."
          hyperlink="https://naturescu.com/natura/13-tipuri-diferite-de-fluturi/"
          hyperlinktext="More information"
        />*/}

        <Dropdown
          title="Alege frunctul preferat"
          showDropdown={showDropdown}
          setShowDropdown={() => setShowDropdown(!showDropdown)}
          items={items}
        />

        <button onClick={() => Move()}>Modal</button>
        <Modal show={modal} close={Move} />
        {/* <UseContextHook />  */}
        {/* <div className="stylehome">
          <Home />
        </div> */}
        {/* <ConditionalRendering />

        <FunctionClick />

        <ClassClick /> */}
      </div>
    </div>
  );
}

export default App;
