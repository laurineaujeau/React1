import VanillaTilt from "vanilla-tilt";

export default function Exercice4({ children }) {
  // créer une ref grace à React.useRef()

  // ajouter un useEffect avec vanillaTilt
  // const tiltNode = tiltRef.current
  // VanillaTilt.init(tiltNode, {
  //   max: 25,
  //   speed: 400,
  //   glare: true,
  //   'max-glare': 0.5,
  // })

  // ne pas oublier d'ajouter une fonction de nettoyage
  // `return () => tiltNode.vanillaTilt.destroy()`

  // ne pas oublier d'ajouter le tableau de dépendance, []

  // ajoute la propriété `ref` à la div `tilt-root`
  return (
    <div className="tilt-root">
      <div className="tilt-child">
        <div className="totally-centered"></div>
      </div>
    </div>
  );
}
