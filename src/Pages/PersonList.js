const PersonList = ({ persons, title, handleDelete }) => {
  return (
    <div className="person-list">
      <h2>{title}</h2>
      {persons.map((person) => (
        <div key={person.id}>
          <h2>{person.title}</h2>
          <p>Written by {person.author}</p>
          <button className="list-button" onClick={() => handleDelete(person.id)}>Delete person</button>
        </div>
      ))}
    </div>
  );
};

export default PersonList;
