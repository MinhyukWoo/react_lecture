import React from "react";
import { useState } from "react";
import TemperatureInput from "./TemperatureInput";
import BoilingVerdict from "./BoilingVerdict";

function Calculator(props) {
  const [temperature, setTemperature] = useState("");
  const [scale, setScale] = useState("c");
  const handleCelsiusChange = (temperature) => {
    setTemperature(temperature);
    setScale("c");
  };
  const handleFahrenheitChange = (temperature) => {
    setTemperature(temperature);
    setScale("f");
  };

  const tryConvert = (temperature, convert) => {
    const parsedTemperature = parseFloat(temperature);
    if (Number.isNaN(parsedTemperature)) {
      return "";
    } else {
      const convertedTemperature = convert(parsedTemperature);
      return (Math.round(convertedTemperature * 1000) / 1000).toString();
    }
  };

  const celsius =
    scale === "c"
      ? temperature
      : tryConvert(temperature, (fahrenheit) => {
          return ((fahrenheit - 32) * 5) / 9;
        });
  const fahrenheit =
    scale === "f"
      ? temperature
      : tryConvert(temperature, (celsius) => {
          return (celsius * 9) / 5 + 32;
        });

  return (
    <div>
      <TemperatureInput
        scale="c"
        temperature={celsius}
        onTemperatureChange={handleCelsiusChange}
      />
      <TemperatureInput
        scale="f"
        temperature={fahrenheit}
        onTemperatureChange={handleFahrenheitChange}
      />
      <BoilingVerdict celsius={parseFloat(celsius)}></BoilingVerdict>
    </div>
  );
}

export default Calculator;
