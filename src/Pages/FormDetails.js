const FormDetails = () => {
    return (
        <fieldset className="form-details">
            <h3>Details About Yourself</h3>
            <p className="form-details__paragraph">Selectați de la 1 până la 10, cât de tare doriți acest job:</p>
            <input className="form-details__input" type="number" name="number" />

            <p className="form-details__paragraph">Data când sunteți disponibili pentru interviu:</p>
            <input className="form-details__input" type="date" name="date" />

            <p className="form-details__paragraph">Ora când sunteți disponibili pentru interviu:</p>
            <input className="form-details__input" type="time" name="time" />

            <p className="form-details__paragraph">Care este hobby-ul dvs:</p>
            <input type="checkbox" name="hobby" /> Administrator de Retea <br />
            <input type="checkbox" name="hobby" /> Administrator de Sistem (Windows Server/Linux) <br />
            <input type="checkbox" name="hobby" /> Mobile Developer (Android/iOS/React JS-Native) <br />
            <input type="checkbox" name="hobby" /> FrontEnd Web Developer <br />
            <input type="checkbox" name="hobby" /> BackEnd Web Developer <br />
            <input type="checkbox" name="hobby" /> UX Designer <br />
            <input type="checkbox" name="hobby" /> Software Developer - Testing <br />
            <input type="checkbox" name="hobby" /> Software Developer (Python, C++, Java) <br />
            <input type="checkbox" name="hobby" /> Software Engineer (Java) <br />
            <input type="checkbox" name="hobby" /> Analist Securitate Cibernetica <br />
            <input type="checkbox" name="hobby" /> Project Manager <br />

            <p className="form-details__paragraph">Upload CV:</p>
            <input type="file" name="file" /> <br />

            <button className="btn btn-outline-success form-details__button">Trimite</button>
        </fieldset>
    );
}

export default FormDetails;