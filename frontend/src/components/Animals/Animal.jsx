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
  const [addFoodState, setAddFoodState] = useState(false);
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
    let newClicks = clickAmount;
    if (clickAmount > 0) {
      newClicks--;
      setClickAmount(newClicks);
      const hungerClicks = {
        ...animal,
        hunger: clickAmount - 1,
      };
      updateAnimal(animal._id, hungerClicks);
      lastFed();
    }
  }

  useEffect(() => {
    async function getAnimal() {
      const updatedAnimal = await showAnimal(id);
      setAnimal(updatedAnimal);
    }
    getAnimal();
  }, [animal]);

  useEffect(() => {
    setClickAmount(animal?.hunger);
    setIsLoading(false);
  }, [animal]);

  return isLoading ? (
    <>
      <div className="loading">Loading</div>
    </>
  ) : (
    <>
      <div className="animal-header">
        <div>
          <div className="animal-name">
            {animal?.name} the {animal?.type}
          </div>
          <div className="hungerlevel">
            {animal?.name}'s hunger level: {clickAmount}
            <progress id="health" value={clickAmount} max="100"></progress>
          </div>
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
                <FoodList
                  animal={animal}
                  decrementItem={decrementItem}
                  setAnimal={setAnimal}
                />
              </div>
            </div>
          </div>
          <NewFoodForm
            setAddFoodState={setAddFoodState}
            setAnimal={setAnimal}
            animal={animal}
          />
        </div>
        <div>
          <AnimalImage animal={animal} location={"showpage"} />
        </div>
        {/* <div className="foodbackground">placeholder</div> */}
      </div>
    </>
  );
}

// increase hunger if animal.lastFed is not today
// if (
//   animal &&
//   new Date(today).toISOString().split("T")[0] !==
//     new Date(animal?.lastFed).toISOString().split("T")[0]
// )
//   changeHunger();
