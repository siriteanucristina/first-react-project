import "./Style/App.css";
import "./Style/Button.css";
import Button from "./Components/Button";
// import Form from "./Components/Form";
// import ReusableForms from "./Components/ReusableForms";
// import "./Style/ReusableForms.css";
// import Card from "./Pages/Card";
// import Home from "./Pages/Home";
// import ReusableCard from "./Components/ReusableCard";
// import ConditionalRendering from "./Pages/ConditionalRendering";
// import FunctionClick from "./Pages/FunctionClick";
// import ClassClick from "./Pages/ClassClick";
// import { Component } from "react";
// import UseContextHook from "./Pages/UseContextHook";
// import ShowContent from "./Pages/ShowContent";

function App() {
  return (
    <div className="App">
      <div className="content">
        <h1> Tipuri de butoane: </h1>
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

        <div>
          <h4>Outline butoane</h4>
          <Button type="outline-primary">Primary</Button>
          <Button type="outline-secondary">Secondary</Button>
          <Button type="outline-success">Succes</Button>
          <Button type="outline-info">Info</Button>
          <Button type="outline-warning">Warning</Button>
          <Button type="outline-danger">Danger</Button>
          <Button type="outline-dark">Dark</Button>
          <Button type="outline-light">Light</Button>
        </div>

        <div>
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
        </div>

        {/* <Form /> */}

        {/* <ReusableForms /> */}

        {/* <ShowContent /> */}

        {/* <ReusableCard /> */}

        {/* <UseContextHook />  */}

        {/* <div className="stylehome">
          <Home />
        </div> */}

        {/* <ConditionalRendering />

        <FunctionClick />

        <ClassClick /> */}

        {/* <div className="stylecard">
          <Card title='Fluture'
            imageURL='https://naturescu.com/wp-content/uploads/2021/06/Fluture-coada-randunicii.jpg'
            body='Acești fluturi au peste 500 de specii și aparțin familiei Papilionidae. Sunt foarte mari, colorați și foarte răspândiți, majoritatea speciilor lor se găsesc pe fiecare continent, cu excepția Antarcticii.'
          />
        </div> */}

        {/* <div>
          <h1>Tipurile de Formulare</h1>
          <Forms />
        </div> */}
      </div>
    </div>
  );
}

export default App;
