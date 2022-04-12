import React, { useState } from "react";
import "./Style/app.css";
// import "./Style/Button.css";
// // import Button from "./Components/Button";
// import "./Style/Form.css";
// import Input from "./Components/Input";
// import Textare from "./Components/Textare";
// import Select from "./Components/Select";
import "./Style/card.css";
import Card from "./Components/Card";
import Dropdown from "./Components/Dropdown";
// import Home from "./Pages/Home";
// import ConditionalRendering from "./Pages/ConditionalRendering";
// import FunctionClick from "./Pages/FunctionClick";
// import ClassClick from "./Pages/ClassClick";
// import UseContextHook from "./Pages/UseContextHook";
// import ShowContent from "./Pages/ShowContent";

const items = ["banana", "apple", "orange", "pear", "grape", "berry"];

function App() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="App">
      <div className="content">
        {/* <h1> Tipuri de butoane: </h1>
        <div>
          <h4>Butonul clasic</h4>
          <Button>Basic</Button>

          <h4>Exemple de butoane</h4>
          <Button type="default">Default</Button>
          <Button type="primary">Primary</Button>
          <Button type="secondary">Secondary</Button>
          <Button type="success">Success</Button>
          <Button type="info">Info</Button>
          <Button type="warning">Warning</Button>
          <Button type="danger">Danger</Button>
          <Button type="dark">Dark</Button>
          <Button type="light">Light</Button>
          <Button type="link">Link</Button>
          <Button type="active">Active</Button>
          <Button type="disabled">Disabled</Button>

          <h4>Outline butoane</h4>
          <Button type="outline-primary">Primary</Button>
          <Button type="outline-secondary">Secondary</Button>
          <Button type="outline-success">Succes</Button>
          <Button type="outline-info">Info</Button>
          <Button type="outline-warning">Warning</Button>
          <Button type="outline-danger">Danger</Button>
          <Button type="outline-dark">Dark</Button>
          <Button type="outline-light">Light</Button>

          <h4>Sizes buttons</h4>
          <Button type="primary" size="large">
            Large
          </Button>
          <Button type="primary" size="small">
            Small
          </Button>
          <Button type="primary" size="xsmall">
            XSmall
          </Button>
        </div> */}

        {/* <h1> Formular </h1>
        <form>
          <h4>Enter your name:</h4>
          <Input type="text" />
          <h4>Enter your surname:</h4>
          <Input type="text" />
          <h4>Enter your date of birth:</h4>
          <Input type="date" />
          <h4>Enter your email:</h4>
          <Input type="email" />
          <h4>Enter your password:</h4>
          <Input type="password" />
          <h4>Enter your gender:</h4>
          <Input type="radio" name="gender" value="femeie" />
          Femeie
          <Input type="radio" name="gender" value="barbat" />
          Barbat
          <h4>Enter your hobby:</h4>
          <Input
            type="checkbox"
            name="hobby"
            value="mobile developer (Android/iOS/ReactJS-Native)"
          />
          Mobile Developer (Android/iOS/ReactJS-Native) <br />
          <Input type="checkbox" name="hobby" value="frontend web developer" />
          FrontEnd Web Developer <br />
          <Input type="checkbox" name="hobby" value="backend web developer" />
          BackEnd Web Developer <br />
          <Input
            type="checkbox"
            name="hobby"
            value="software developer-testing"
          />
          Software Developer - Testing <br />
          <h4>Enter your CV:</h4>
          Select a file:
          <Input type="file" /> <br />
          <Input type="submit" />
          <Input type="reset" />
        </form>

        <h1> Formular de tip text </h1>
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

        <Card
          title="Fluture"
          imageURL="https://naturescu.com/wp-content/uploads/2021/06/Fluture-coada-randunicii.jpg"
          text="Acești fluturi au peste 500 de specii și aparțin familiei Papilionidae. Sunt foarte mari, colorați și foarte răspândiți, majoritatea speciilor lor se găsesc pe fiecare continent, cu excepția Antarcticii."
          hyperlink="https://naturescu.com/natura/13-tipuri-diferite-de-fluturi/"
          hyperlinktext="More information"
        />

        <Dropdown
          showDropdown={showDropdown}
          setShowDropdown={() => setShowDropdown(!showDropdown)}
          items={items}
        />

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
