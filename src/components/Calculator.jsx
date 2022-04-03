import { useState } from "react";

const Calculator = () => {
  //-------- USESTATE ------------------------
  const [valueForConversion, setValueForConversion] = useState();

  //-------- FUNCTIONS -----------------------
  const inputHandler = (e) => {
    setValueForConversion(parseInt(e.target.value));
    console.log(valueForConversion);
  };
  return (
    <div className="main">
      <div className="">
        <input
          placeholder="Hier Betrag eingeben ..."
          onChange={inputHandler}
          // onKeyPress={handleKeypress}
        />
        <button className="">Berechnen</button>
      </div>
      <div>{valueForConversion}</div>
    </div>
  );
};

export default Calculator;
