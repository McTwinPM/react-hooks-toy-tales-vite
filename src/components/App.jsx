import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/toys")
      .then((response) => response.json())
      .then((data) => setToys(data))
      .catch((error) => setError(error.message));
  }, []);

  function handleClick() {
    setShowForm((showForm) => !showForm);
    
  }

  const addToy = (newToy) => {
    setToys((prevToys) => [...prevToys, newToy]);
  };

  return (
    <>
      <Header />
      {showForm ? <ToyForm addToy={addToy} setError={setError} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} />
    </>
  );
}

export default App;
