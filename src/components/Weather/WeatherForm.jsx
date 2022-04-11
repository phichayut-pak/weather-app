import CardForm from "../UI/CardForm";
import { useState } from "react";

const WeatherForm = (props) => {
  const [country, setCountry] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    props.onSendCountry(country)
    setCountry('')
  };

  const countryChangeHandler = (event) => {
    setCountry(event.target.value)
  };

  return (
    <CardForm className="my-3">
      <form
        className="flex flex-col justify-center items-start"
        onSubmit={submitHandler}
      >
        <label htmlFor="country" className="font-['Poppins']">
          Country:{" "}
        </label>
        <input
          id="country"
          className="font-['Poppins'] p-1 mt-1 border-2 border-black rounded-md"
          type="text"
          placeholder="Enter here..."
          value={country}
          onChange={countryChangeHandler}
        />
      </form>
    </CardForm>
  );
};

export default WeatherForm;
