import React, {useState} from 'react'
import Drinkform from "./Drinkform";
import Drink from "./Drink"
import {render} from "react-dom";

export default function List() {
    const [drinks, setDrinks] = useState([]);

    const addDrink = drink => {
        const newDrinks = [drink, ...drinks];
        setDrinks(newDrinks);
    };

    return (
        <div>
            <h1>Drinks in queue</h1>
            <Drinkform onSubmit={addDrink}/>
            <Drink drinks={drinks} />
        </div>
    );
}