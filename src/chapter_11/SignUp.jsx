import React, { useState } from "react";

function SignUp(props) {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("male");

  const handleSubmit = (event) => {
    alert(`이름: ${name} 성별: ${gender}`);
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        이름:{" "}
        <input
          type="text"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
      </label>
      <br />
      <div>
        <label>
          남자:{" "}
          <input
            type="radio"
            name="gender"
            value="male"
            checked={gender === "male"}
            onChange={(event) => {
              setGender(event.target.value);
            }}
          />
        </label>
        <br />
        <label>
          여자:{" "}
          <input
            type="radio"
            name="gender"
            value="female"
            checked={gender === "female"}
            onChange={(event) => {
              setGender(event.target.value);
            }}
          />
        </label>
      </div>
      <br />
      <button type="submit">제출</button>
    </form>
  );
}

export default SignUp;
