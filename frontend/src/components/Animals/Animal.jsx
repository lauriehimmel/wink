import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { showAnimal, updateAnimal } from "../../utilities/animal-service";
import NewFoodForm from "../Food/NewFoodForm";
import dog from "../../assets/dog-02.png";
import pup from "../../assets/pup.svg";
import pancakes from "../../assets/pancakes.svg";
import sandwich from "../../assets/sandwich.svg";
import pasta from "../../assets/pasta.svg";
import { showFood, updateFood } from "../../utilities/food-service";

export default function OneAnimal() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [animal, setAnimal] = useState(null);
  const [display, setDisplay] = useState(false);
  const navigate = useNavigate();
  const [clickAmount, setClickAmount] = useState();
  const [date, setDate] = useState();
  const dateClicked = new Date()

  // function feedDate() {
  //   setDate(dateClicked)
  // }

  function incrementItem () {
    const newClicks = clickAmount+1;
    setClickAmount(newClicks);
    console.log(clickAmount)
    const hungerClicks = {
      ...animal,
      hunger: clickAmount
    }
    console.log(hungerClicks)
    updateAnimal(animal._id, hungerClicks)
  };

  function feedAnimal(e) {
    incrementItem();
    // feedDate()
    // const feedingDate = {
    //   date: date
    // }
    // console.log('feedingDate', feedingDate)
    // console.log('e.target.id', e.target.id)
    // const food = showFood(e.target.id)
    // console.log('food', food)
    // updateFood(food._id, feedingDate)
  }

  useEffect(() => {
    async function getAnimal() {
      const animal = await showAnimal(id);
      setAnimal(animal);
    }
    getAnimal();
  }, []);

  useEffect(() => {
    setClickAmount(animal?.hunger)
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
          <p>{animal?.name} the {animal?.type}</p>
          <p>{animal?.name}'s hunger level: {clickAmount}</p>
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
                {food.date}
                <div>
                  {(() => {
                    if (food?.meal === "Lunch") {
                      return (
                        <img
                          onClick={feedAnimal}
                          className="food-img"
                          id={food._id}
                          src={sandwich}
                        />
                      );
                    } else if (food.meal === "Breakfast") {
                      return <img onClick={feedAnimal} className="food-img" src={pancakes} />;
                    } else if (food.meal === "Dinner") {
                      return <img onClick={feedAnimal} className="food-img" src={pasta} />;
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
