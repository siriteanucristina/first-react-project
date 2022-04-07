const ReusableCard = () => {

    const characters = [
        {
            id: 1,
            name: "Wonder Woman",
            age: 34,
            city: "Iasi"
        },
        {
            id: 2,
            name: "Pamela Lillian Isley",
            age: 20,
            city: "Bucuresti"
        }
    ];

    const CardListItem = props => {
        return (
            <li>
                <div style={{
                    width: "50%",
                    border: "solid 3px #d3d3d3",
                    margin: "10px auto"
                }} >
                    <p> <strong>{props.character.name}</strong> </p>
                    <p>{props.character.age}</p>
                    <p>{props.character.city}</p>
                </div>
            </li>
        );
    };

    const CardList = () => {
        return (
            <ul style={{ listStyleType: "none" }}>
                {characters.map(character => {
                    return <CardListItem character={character} key={character.id} />;
                })}
            </ul>
        );
    };

    return (
        <div> <CardList /> </div>
    );
}

export default ReusableCard;