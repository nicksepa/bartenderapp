import React, {useState} from "react";
import Drinkform from "./Drinkform";
import List from "./List";

function Drink({drinks, completeDrink}) {
    const [edit, setPrep] = useState({
        id: null,
        value: ''
    });

    return drinks.map((drink, index) => (
      <div className={drink.isComplete ? 'drink-row complete' : 'drink-row'} key={index}>
          <div key={drink.id} onClick={() => completeDrink(drink.id)}>
              {drink.text}
          </div>
      </div>

    ));

}
export default Drink