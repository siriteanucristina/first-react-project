import { useEffect, useState } from "react";
import PersonList from "./PersonList";

const Home = () => {
  const [persons, setPersons] = useState([
    {
      title: "My first web site",
      body: "Lorem ipsum...",
      author: "Vitor",
      id: 1,
    },
    {
      title: "My second web site",
      body: "Lorem ipsum...",
      author: "Maya",
      id: 2,
    },
    {
      title: "My third web site",
      body: "Lorem ipsum...",
      author: "Ivona",
      id: 3,
    },
  ]);

  const handleDelete = (id) => {
    const newPersons = persons.filter((person) => person.id !== id);
    setPersons(newPersons);
  };

  useEffect(() => {
    console.log("Use effect ran");
    // console.log(persons);
  });

  return (
    <div className="home">
      <PersonList
        persons={persons}
        title="All persons!"
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default Home;
