import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { showAnimal, updateAnimal } from "../../utilities/animal-service";
import NewFoodForm from "../Food/NewFoodForm";
import pup from "../../assets/Dog.svg";
import Dog from "../../assets/Dog-Sitting-Front-01.svg";
import pancakes from "../../assets/pancakes.svg";
import sandwich from "../../assets/sandwich.svg";
import pasta from "../../assets/pasta.svg";
import { showFood, updateFood } from "../../utilities/food-service";
import React from "react";
import FoodList from "../Food/FoodList";

export default function OneAnimal() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [animal, setAnimal] = useState(null);
  const navigate = useNavigate();
  const [clickAmount, setClickAmount] = useState();
  const [addFood, setAddFood] = useState(false);
  const today = new Date();
  // let hungerChange;

  // update animal.lastFed
  // async function lastFed() {
  //   const fed = new Date();
  //   const newFedDate = {
  //     lastFed: fed,
  //   };
  //   if (animal) updateAnimal(animal._id, newFedDate);
  // }

  // increase hunger based on date
  // function changeHunger() {
  //   let todayDate = new Date(today);
  //   let fedDate = new Date(animal?.lastFed);
  //   let hungerLevel = Math.floor(
  //     (todayDate.getTime() - fedDate.getTime()) / (1000 * 60 * 60 * 24)
  //   );
  //   hungerLevel > 0
  //     ? (hungerChange = animal?.hunger + hungerLevel)
  //     : (hungerChange = animal?.hunger);
  //   const updatedHunger = {
  //     ...animal,
  //     hunger: hungerChange,
  //   };
  //   updateAnimal(animal._id, updatedHunger);
  // }

  // decreases hunger on screen + updates animal.lastFed
  async function decrementItem() {
    let newClicks;
    clickAmount <= 0
      ? (newClicks = clickAmount)
      : (newClicks = clickAmount - 1);
    await setClickAmount(newClicks);
    const hungerClicks = {
      ...animal,
      hunger: clickAmount - 1,
    };
    updateAnimal(animal._id, hungerClicks);
    // lastFed();
  }

  useEffect(() => {
    async function getAnimal() {
      const updatedAnimal = await showAnimal(id);
      setAnimal(updatedAnimal);
    }
    getAnimal();
  }, [animal?.foods.length]);

  useEffect(() => {
    setClickAmount(animal?.hunger);
    setIsLoading(false);
    // increase hunger if animal.lastFed is not today
    // if (
    //   animal &&
    //   new Date(today).toISOString().split("T")[0] !==
    //     new Date(animal?.lastFed).toISOString().split("T")[0]
    // )
    //   changeHunger();
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
            <progress id="health" value={clickAmount} max="100"></progress>
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
        <div>
          <div className="foodgrid" onClick={decrementItem}>
            <FoodList animal={animal}/>
          </div>
          </div>
          </div>
          {/* <div className="foodbackground">
            <div className="foodgrid">
              {animal?.foods.map((food) => (
                <div key={food._id}>
                  {food.name}
                  <div>
                    {(() => {
                    // MAKE THIS OWN COMPONENT
                    // BIG FOOD IMAGES, ARROWS TO GO BETWEEN
                      if (food?.meal === "Lunch") {
                        return (
                          <img
                            onClick={decrementItem}
                            className="food-img"
                            id={food._id}
                            src={sandwich}
                          />
                        );
                      } else if (food?.meal === "Breakfast") {
                        return (
                          <img
                            id={food._id}
                            onClick={decrementItem}
                            className="food-img"
                            src={pancakes}
                          />
                        );
                      } else if (food?.meal === "Dinner") {
                        return (
                          <img
                            id={food._id}
                            onClick={decrementItem}
                            className="food-img"
                            src={pasta}
                          />
                        );
                      } 
                    })()}
                  </div>
                </div>
              ))}
            </div>
          </div> */}
          <NewFoodForm setAddFood={setAddFood} handleAnimalUpdate={setAnimal} />
        </div>
        <div>
          {(() => {
            // MAKE THIS OWN COMPONENT
            if (animal?.type === "Dog") {
              return (
                <img
                  style={{ background: `${animal?.color}` }}
                  className="animal-image-main"
                  src={Dog}
                />
              );
            } else if (animal?.type === "Cat") {
              return (
                <img
                  style={{ background: `${animal?.color}` }}
                  className="animal-image-main"
                  src={pup}
                />
              );
            } else {
              return (
                <img
                  style={{ background: `${animal?.color}` }}
                  className="animal-image-main"
                  src={pasta}
                />
              );
            }
          })()}
        </div>
        <div className="foodbackground">placeholder</div>
      </div>
    </>
  );
}
