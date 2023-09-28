import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { showAnimal } from "../../utilities/animal-service";
import NewFoodForm from "../Food/NewFoodForm";
import dog from "../../assets/dog-02.png";
import pup from "../../assets/pup.svg";
import pancakes from "../../assets/pancakes.svg";

export default function OneAnimal() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [animal, setAnimal] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function getAnimal() {
      const animal = await showAnimal(id);
      setAnimal(animal);
    }
    getAnimal();
  }, []);

  useEffect(() => {
    setIsLoading(false);
  }, [animal]);

  return isLoading ? (
    <>
      <h1>Loading</h1>
    </>
  ) : (
    <>
      <div className="animal-header">
        <div className="animal-name">
          {animal?.name} the {animal?.type}
        </div>
        <div>
          <button
            className="editbutton"
            onClick={() => navigate(`/animals/${animal._id}/update`)}
          >
            Edit
          </button>
        </div>
      </div>
      <div className="animal-body">
        <div>
          <div className="foodbackground">
            {animal?.foods.map((food) => (
              <div key={food._id}>
                {food.name}
                <div>
                  {(() => {
                    if (food.meal === "Lunch") {
                      return <img className="food-img" src={pancakes} />;
                    } else if (food.meal === "Breakfast") {
                      return <img className="food-img" src={dog} />;
                    } else if (food.meal === "Dinner") {
                      return <img className="food-img" src={pup} />;
                    } else {
                      return <div>catch all</div>;
                    }
                  })()}
                </div>
              </div>
            ))}
          </div>
          <NewFoodForm />
        </div>
        <div>
          {(() => {
            if (animal?.type === "Dog") {
              return <img className="animal-image-main" src={pup} />;
            } else if (animal?.type === "Cat") {
              return <img className="animal-image-main" src={dog} />;
            } else {
              return <img className="animal-image-main" src={pancakes} />;
            }
          })()}
        </div>
        <div className="foodbackground">placeholder</div>
      </div>
    </>
  );
}
