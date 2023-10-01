import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { showAnimal, updateAnimal } from "../../utilities/animal-service";
import NewFoodForm from "../Food/NewFoodForm";
import { showFood, updateFood } from "../../utilities/food-service";
import React from "react";
import FoodList from "../Food/FoodList";
import AnimalImage from "./AnimalImage";

export default function OneAnimal() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [animal, setAnimal] = useState(null);
  const navigate = useNavigate();
  const [clickAmount, setClickAmount] = useState();
  const [addFood, setAddFood] = useState(false);
  const today = new Date();
  let hungerChange;

  // update animal.lastFed
  async function lastFed() {
    const fed = new Date();
    const newFedDate = {
      lastFed: fed,
    };
    if (animal) updateAnimal(animal._id, newFedDate);
  }

  // increase hunger based on date
  function changeHunger() {
    let todayDate = new Date(today);
    let fedDate = new Date(animal?.lastFed);
    let hungerLevel = Math.floor(
      (todayDate.getTime() - fedDate.getTime()) / (1000 * 60 * 60 * 24)
    );
    hungerLevel > 0
      ? (hungerChange = animal?.hunger + hungerLevel)
      : (hungerChange = animal?.hunger);
    const updatedHunger = {
      ...animal,
      hunger: hungerChange,
    };
    updateAnimal(animal._id, updatedHunger);
  }

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
    lastFed();
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
    console.log('animal', animal)
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
              <div className="foodgrid">
                <FoodList animal={animal} decrementItem={decrementItem}/>
              </div>
            </div>
          </div>
          <NewFoodForm setAddFood={setAddFood} handleAnimalUpdate={setAnimal} />
        </div>
        <div>
  < AnimalImage animal={animal}/>
        </div>
        <div className="foodbackground">placeholder</div>
      </div>
    </>
  );
}
