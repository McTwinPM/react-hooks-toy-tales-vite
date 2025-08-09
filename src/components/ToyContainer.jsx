import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, updatedToy }) {
  return (
    <div id="toy-collection">
      {toys.map((toy) => (
        <ToyCard key={toy.id} {...toy} updatedToy={updatedToy} />
      ))}
    </div>
  );
}

export default ToyContainer;
