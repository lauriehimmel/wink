import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { showAnimal, updateAnimal } from "../../utilities/animal-service";
import NewFoodForm from "../Food/NewFoodForm";
import pup from "../../assets/Dog.svg";
import Dog from "../../assets/dog-02.png";
import pancakes from "../../assets/pancakes.svg";
import sandwich from "../../assets/sandwich.svg";
import pasta from "../../assets/pasta.svg";
import { showFood, updateFood } from "../../utilities/food-service";

export default function OneAnimal() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [animal, setAnimal] = useState(null);
  const navigate = useNavigate();
  const [clickAmount, setClickAmount] = useState();
  const [addFood, setAddFood] = useState(false);
  const [previousFed, setPreviousFed] = useState();
  const today = new Date();
  let hungerChange;

  async function lastFed(e) {
    const fed = new Date();
    const newFedDate = {
      ...animal,
      lastFed: fed,
    };
    updateAnimal(animal._id, newFedDate);
    // let hungerPains = ((today-fed)/(1000*60*60*24))
    // console.log('hungerPains', hungerPains)
    // hungerPains > 1 ? addHunger = Math.floor(clickAmount+ hungerPains) : addHunger = 0
    // const newHungerLevel = hungerPains + animal.hunger
    // const gettingHungry = {
    //   ...animal,
    //   hunger: newHungerLevel
    // }
    // console.log('gettingHungry', gettingHungry)
    // updateAnimal(animal._id, gettingHungry);
    // console.log(animal)
  }
  function changeHunger() {
    let todayDate = new Date(today);
    let fedDate = new Date(animal?.lastFed);
    let hungerLevel = Math.floor(
      (todayDate.getTime() - fedDate.getTime()) / (1000 * 60 * 60 * 24)
    );
    console.log(hungerLevel);
    hungerLevel > 0 ?  hungerChange = animal?.hunger + hungerLevel :  hungerChange = animal?.hunger;
    const updatedHunger = {
      ...animal,
      hunger: hungerChange
    }
    updateAnimal(animal._id, updatedHunger)
  }

  
  function incrementItem() {
    let newClicks;
    clickAmount <= 0
    ? (newClicks = clickAmount)
    : (newClicks = clickAmount - 1);
    // clickAmount <= 0 ? newClicks = clickAmount + 1 : newClicks = clickAmount;
    setClickAmount(newClicks);
    const hungerClicks = {
      ...animal,
      hunger: clickAmount - 1,
    };
    updateAnimal(animal._id, hungerClicks);
  }
  
  function feedAnimal(e) {
    incrementItem();
    lastFed(e);
  }
  
  useEffect(() => {
    async function getAnimal() {
      const animal = await showAnimal(id);
      setAnimal(animal);
    }
    getAnimal();
  }, [addFood]);
  
  useEffect(() => {
    setClickAmount(animal?.hunger);
    setIsLoading(false);
    if (animal)changeHunger()
    // console.log(today)
    // console.log(animal?.lastFed)
  }, [animal]);
  
  return isLoading ? (
    <>
      <h1>Loading</h1>
    </>
  ) : (
    <>
      <div className="animal-header">
        <div className="animal-name">
          <p>
            {animal?.name} the {animal?.type}
          </p>
          <p>
            {animal?.name}'s hunger level: {clickAmount}
          </p>
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
            <div className="foodgrid">
              {animal?.foods.map((food) => (
                <div key={food._id}>
                  {food.name}
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
                        return (
                          <img
                            id={food._id}
                            onClick={feedAnimal}
                            className="food-img"
                            src={pancakes}
                          />
                        );
                      } else if (food.meal === "Dinner") {
                        return (
                          <img
                            id={food._id}
                            onClick={feedAnimal}
                            className="food-img"
                            src={pasta}
                          />
                        );
                      } else {
                        return <div>catch all</div>;
                      }
                    })()}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <NewFoodForm setAddFood={setAddFood} />
        </div>
        <div>
          {(() => {
            if (animal?.type === "Dog") {
              return <img className="animal-image-main" src={Dog} />;
            } else if (animal?.type === "Cat") {
              return <img className="animal-image-main" src={pup} />;
            } else {
              return <img className="animal-image-main" src={pasta} />;
            }
          })()}
        </div>
        <div className="foodbackground">placeholder</div>
      </div>
    </>
  );
}
