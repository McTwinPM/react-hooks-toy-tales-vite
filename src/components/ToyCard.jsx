import React from "react";

function ToyCard({ id, name, image, likes, updatedToy, donateToy }) {
  const handleLike = () => {
    // Handle like button click
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ likes: likes + 1 }),
    })
      .then((response) => response.json())
      .then((updatedToyLike) => {
        // Update the state or UI with the updated toy
        updatedToy(updatedToyLike);
        console.log("Toy liked:", updatedToyLike);

      })
      .catch((error) => console.error("Error liking toy:", error));
  };

  const handleDonate = () => {
    // Handle donate button click
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to delete toy");
        }
        return response.json();
      })
      .then(() => {
        donateToy(id);
        console.log("Toy donated:", id);
      })
      .catch((error) => console.error("Error donating toy:", error));
  };

  return (
    <div className="card" data-testid="toy-card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn" onClick={handleLike}>Like {"<3"}</button>
      <button className="del-btn" onClick={handleDonate}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
