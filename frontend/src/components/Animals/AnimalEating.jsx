import Dog from "../../assets/animals/dog-eating-right.gif";
import Otter from "../../assets/animals/otter.svg";
import Raccoon from "../../assets/animals/raccoon.svg";
import Pig from "../../assets/animals/pig.svg";

export default function AnimalEating({ animal, location }) {
  let classFromLocation;
  location !== 'homepage' ? classFromLocation = 'showpage-image' : classFromLocation = 'homepage-image';
  
  return (
    <>
      {(() => {
        if (animal?.type === "Dog") {
          return (
            <img
              style={{ background: `${animal?.color}` }}
              className={classFromLocation}
              src={Dog}
            />
          );
        } else if (animal?.type === "Otter") {
          return (
            <img
              style={{ background: `${animal?.color}` }}
              className={classFromLocation}
              src={Otter}
            />
          );
        } else if (animal?.type === "Pig"){
          return (
            <img
              style={{ background: `${animal?.color}` }}
              className={classFromLocation}
              src={Pig}
            />
          );
        } else if (animal?.type === "Raccoon") {
          return (
            <img
              style={{ background: `${animal?.color}` }}
              className={classFromLocation}
              src={Raccoon}
            />
          );
        }
      })()}
    </>
  );
}
