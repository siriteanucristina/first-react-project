const FormRegister = () => {
    return (
        <fieldset className="form-register">
            <h3>Register</h3> <br /> <br />
            <input className="form-register__input" type="text" name="name/surname" placeholder="Full Name" /> <br />

            <input className="form-register__input" type="date" name="date-of-birth" /> <br />

            <input className="form-register__input" type="tel" name="numberphone" placeholder="Phone" /> <br />

            <input className="form-register__input--radio " type="radio" name="gen" /> Femeie
            <input className="form-register__input--radio " type="radio" name="gen" /> Bărbat <br />

            <input className="form-register__input" type="password" name="password" placeholder="Password" /> <br />
            <input className="form-register__input" type="password" name="password" placeholder="Confirm Password" /> <br /> <br />

            <button className="btn btn-primary">Register</button>
            <button className="btn btn-danger forms-register__buttons">Have account? Sign in</button>

        </fieldset>
    );
}

export default FormRegister;