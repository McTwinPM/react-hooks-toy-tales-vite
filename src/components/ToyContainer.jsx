import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, updatedToy, donateToy }) {
  return (
    <div id="toy-collection">
      {toys.map((toy) => (
        <ToyCard key={toy.id} {...toy} updatedToy={updatedToy} donateToy={donateToy} />
      ))}
    </div>
  );
}

export default ToyContainer;
