import FormDetails from "./FormDetails";
import FormLogin from "./FormLogin";
import FormRegister from "./FormRegister";

const Forms = () => {
    return (
        <form className="forms">
            <FormLogin />

            <FormRegister />

            <FormDetails />
        </form>
    );
}

export default Forms