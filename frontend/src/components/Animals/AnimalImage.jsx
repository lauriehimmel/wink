import Dog from "../../assets/Dog-Sitting-Front-01.svg";
import Otter from "../../assets/otter.svg";
import Raccoon from "../../assets/raccoon.svg";
import Pig from "../../assets/pig.svg";

export default function AnimalImage({ animal }) {
  return (
    <>
      {(() => {
        if (animal?.type === "Dog") {
          return (
            <img
              style={{ background: `${animal?.color}` }}
              className="animal-image-main"
              src={Dog}
            />
          );
        } else if (animal?.type === "Otter") {
          return (
            <img
              style={{ background: `${animal?.color}` }}
              className="animal-image-main"
              src={Otter}
            />
          );
        } else if (animal?.type === "Pig"){
          return (
            <img
              style={{ background: `${animal?.color}` }}
              className="animal-image-main"
              src={Pig}
            />
          );
        } else if (animal?.type === "Raccoon") {
          return (
            <img
              style={{ background: `${animal?.color}` }}
              className="animal-image-main"
              src={Raccoon}
            />
          );
        }
      })()}
    </>
  );
}
