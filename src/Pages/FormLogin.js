const FormLogin = () => {
    return (
        <form>
            <fieldset className="form-login">
                <h3>Login</h3> <br />
                <input className="form-login__input" type="text" name="username" placeholder="Username" /> <br />
                <input className="form-login__input" type="password" name="password" placeholder="Password" /> <br /> <br />
                <button className="btn btn-primary">LOGIN</button>
            </fieldset>

        </form>
    );
}

export default FormLogin;