const TypesButtons = () => {
    return (
        <div className="typesbuttons">
            <div className="typesbuttons-first">
                <button className="btn"> Basic </button>
                <button className="btn btn-default"> Default </button>
                <button className="btn btn-primary"> Primary </button>
                <button className="btn btn-outline-primary"> Primary </button>
                <button className="btn btn-secondary"> Secondary </button>
                <button className="btn btn-outline-secondary"> Secondary </button>

            </div>

            <div className="typesbuttons-second">
                <button className="btn btn-success"> Success </button>
                <button className="btn btn-outline-success">Success</button>
                <button className="btn btn-info">Info</button>
                <button className="btn btn-outline-info">Info</button>
                <button className="btn btn-warning">Warning</button>
                <button className="btn btn-outline-warning">Warning</button>
            </div>

            <div className="typesbuttons-third">
                <button className="btn btn-danger">Danger</button>
                <button className="btn btn-outline-danger">Danger</button>
                <button className="btn btn-dark">Dark</button>
                <button className="btn btn-outline-dark">Dark</button>
                <button className="btn btn-light">Light</button>
                <button className="btn btn-outline-light">Light</button>
            </div>

            <div className="typesbuttons-fourth">
                <button className="btn btn-link"><a href="#">Link</a></button>
                <button className="btn btn-primary btn-large">Large</button>
                <button className="btn btn-primary btn-small">Small</button>
                <button className="btn btn-primary btn-xsmall">XSmall</button>
                <button className="btn btn-active">Active</button>
                <button className="btn btn-disabled" disabled>Disabled</button>
            </div>
        </div>

    );
}

export default TypesButtons;