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

export default function FoodList({ animal}) {

  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  // const [clickAmount, setClickAmount] = useState();
  const [addFood, setAddFood] = useState(false);
  // const today = new Date();
  // let hungerChange;

  // update animal.lastFed
  async function lastFed() {
    const fed = new Date();
    const newFedDate = {
      lastFed: fed,
    };
    if (animal) updateAnimal(animal._id, newFedDate);
  }

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
  // async function decrementItem() {
  //   let newClicks;
  //   clickAmount <= 0
  //     ? (newClicks = clickAmount)
  //     : (newClicks = clickAmount - 1);
  //   await setClickAmount(newClicks);
  //   const hungerClicks = {
  //     ...animal,
  //     hunger: clickAmount - 1,
  //   };
  //   updateAnimal(animal._id, hungerClicks);
  //   lastFed();
  // }

  return (
    <div>
      <div className="foodbackground">
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
                        // onClick={decrementItem}
                        className="food-img"
                        id={food._id}
                        src={sandwich}
                      />
                    );
                  } else if (food?.meal === "Breakfast") {
                    return (
                      <img
                        id={food._id}
                        // onClick={decrementItem}
                        className="food-img"
                        src={pancakes}
                      />
                    );
                  } else if (food?.meal === "Dinner") {
                    return (
                      <img
                        id={food._id}
                        // onClick={decrementItem}
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
      </div>
    </div>
  );
}
