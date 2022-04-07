import React, { useState } from "react";
import ReusableButton from "./ReusableButton";

const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        email: '',
        password: '',
        date: '',
        comment: '',
        gender: '',
        car: ''
    })

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log({ setFormData });
    };

    const handleChange = e => {
        setFormData(e.target.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Register</h2>

                <div>
                    <label htmlFor="name">Name</label>
                    <input
                        type='text'
                        name='name'
                        placeholder="Introdu numele"
                        value={formData.name}
                        onChange={handleChange} />
                </div>

                <div>
                    <label htmlFor="surname">Surname</label>
                    <input
                        type='text'
                        name='surname'
                        placeholder="Introdu prenumele"
                        value={formData.surname}
                        onChange={handleChange} />
                </div>

                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type='email'
                        name='email'
                        placeholder="Introdu email"
                        value={formData.email}
                        onChange={handleChange} />
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type='password'
                        name='password'
                        placeholder="Introdu parola"
                        value={formData.password}
                        onChange={handleChange} />
                </div>

                <div>
                    <label htmlFor="date">Date</label>
                    <input
                        type='date'
                        name='date'
                        placeholder="Introdu data"
                        value={formData.date}
                        onChange={handleChange} />
                </div>

                <div>
                    <label htmlFor="comment">Comment</label>
                    <input
                        type='text'
                        name='comment'
                        placeholder="Introdu un comentariu"
                        value={formData.comment}
                        onChange={handleChange} />
                </div>

                <p>Gender</p>
                <div>
                    <input
                        type="radio"
                        value='male'
                        checked={formData.gender === 'male'}
                        onChange={handleChange}
                    /> Male
                </div>
                <div>
                    <input
                        type="radio"
                        value='female'
                        checked={formData.gender === 'female'}
                        onChange={handleChange}
                    /> Female
                </div>
                <div>
                    <input
                        type="radio"
                        value='other'
                        checked={formData.gender === 'other'}
                        onChange={handleChange}
                    /> Other
                </div>

                <ReusableButton type="outline-primary">Sign In</ReusableButton>
            </form>
        </div>
    );
}

export default Form;