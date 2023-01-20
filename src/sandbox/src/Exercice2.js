import React from "react";

export default function Exercice2({ initialName = "" }) {
  // initialiser la valeur par défaut de useState
  // window.localStorage.getItem('name') ?? initialName
  const [name, setName] = React.useState(
    window.localStorage.getItem("name") ? initialName : initialName
  );

  // ici appeler React.useEffect
  // le callback doit mettre à jour le name en localStorage quand le name change
  // indice : window.localStorage.setItem('name', name)
  React.useEffect(() => {
    window.localStorage.setItem("name", name);
  }, [name]);

  function handleChange(event) {
    setName(event.target.value);
  }
  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input value={name} onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name} !</strong> : "Please type your name"}
    </div>
  );
}
