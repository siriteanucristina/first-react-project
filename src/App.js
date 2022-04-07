import "./Style/App.css";
// import Card from "./Pages/Card";
// import Home from "./Pages/Home";
import ReusableButton from "./Components/ReusableButton";
import './Style/ReusableButton.css'
// import Form from "./Components/Form";
import ReusableForms from "./Components/ReusableForms";
import './Style/ReusableForms.css'
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
        {/* <h2> Tipuri de butoane </h2>
        <div>
          <ReusableButton>Basic</ReusableButton>
          <ReusableButton type="default">Default</ReusableButton>
          <ReusableButton type="primary">Primary</ReusableButton>
          <ReusableButton type="outline-primary">Primary</ReusableButton>
          <ReusableButton type="secondary">Secondary</ReusableButton>
          <ReusableButton type="outline-secondary">Secondary</ReusableButton>
          <ReusableButton type="success">Success</ReusableButton>
          <ReusableButton type="outline-success">Succes</ReusableButton>
          <ReusableButton type="info">Info</ReusableButton>
          <ReusableButton type="outline-info">Info</ReusableButton>
          <ReusableButton type="warning">Warning</ReusableButton>
          <ReusableButton type="outline-warning">Warning</ReusableButton>
          <ReusableButton type="danger">Danger</ReusableButton>
          <ReusableButton type="outline-danger">Danger</ReusableButton>
          <ReusableButton type="dark">Dark</ReusableButton>
          <ReusableButton type="outline-dark">Dark</ReusableButton>
          <ReusableButton type="light">Light</ReusableButton>
          <ReusableButton type="outline-light">Light</ReusableButton>
          <ReusableButton type="link">Link</ReusableButton>
          <ReusableButton type="large">Large</ReusableButton>
          <ReusableButton type="small">Small</ReusableButton>
          <ReusableButton type="xsmall">XSmall</ReusableButton>
          <ReusableButton type="active">Active</ReusableButton>
          <ReusableButton type="disabled">Disabled</ReusableButton>
        </div> */}

        {/* <Form /> */}

        <ReusableForms />

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
      </div >
    </div >
  );
}

export default App;
