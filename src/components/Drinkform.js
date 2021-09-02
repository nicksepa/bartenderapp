import React, {useState} from "react";

export default function Drinkform(props) {
    const [input, setInput] = useState('');

    const handleChange = e => {
        setInput(e.target.value);
    };

    const doSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        })

        setInput('');


    };

    return (
        <form className="drink-form" onSubmit={doSubmit}>
            <input
                type="text"
                placeholder="Enter a drink you want"
                value={input}
                name="text"
                className="form-input"
                onChange={handleChange}
            />
            <button className="form-button">
                Add drink
            </button>
        </form>
    );
}