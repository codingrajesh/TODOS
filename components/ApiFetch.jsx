import React, { useState, useEffect } from "react";
function ApiFetch() {
  const [joke, setJoke] = useState(null);
  useEffect(() => {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((response) => response.json())
      .then((data) => {
        setJoke(data.joke);
        console.log(data.value);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <h2>Joke of the day:</h2>
       <p>{joke}</p>
    </div>
  );
}
export default ApiFetch;