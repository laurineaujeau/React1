import React from "react";

export default function Exercice1() {
  // supprimer cette déclaration et la remplacer par React.useState
  const [name, setName] = React.useState("Valeur initiale");

  function handleChange(event) {
    //if (event.target.value === /^[a-z]+$/) {
    return setName(event.target.value.toLowerCase());
    //} else {
    // alert("un prenom ne peut contenir que des lettres");
    //}
  }

  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : "Please type your name"}
    </div>
  );
}
