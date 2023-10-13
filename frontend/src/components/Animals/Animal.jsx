import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { showAnimal, updateAnimal } from "../../utilities/animal-service";
import NewFoodForm from "../Food/NewFoodForm";
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

  // *****in progress - updating Animal's hunger based on how long it's been since last feed
  // async function lastFed() {
  //   const fed = new Date(today);
  //   console.log("this", fed);
  //   const newFedDate = {
  //     lastFed: fed,
  //   };
  //   console.log(newFedDate);
  //   const new1 = animal?.lastFed
  //   console.log(new1)
  //   if (animal) updateAnimal(animal._id, newFedDate);
  // console.log(new Date(today).toDateString())
  // if (animal?.lastFed.toDateString() !== new Date(today).toDateString())
  // {changeHunger();}
  // }

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
      // lastFed();
    }
  }

  useEffect(() => {
    setClickAmount(animal?.hunger);
    async function getAnimal() {
      const updatedAnimal = await showAnimal(id);
      setAnimal(updatedAnimal);
    }
    getAnimal();
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
            {animal?.name}'s hunger level: {animal?.hunger}
            <progress id="health" value={animal?.hunger} max="100"></progress>
            <>
              {animal?.hunger > 0 ? (
                <div className="clicktofeed">
                  Click a food item to feed {animal?.name}!
                </div>
              ) : (
                <div className="clicktofeed">
                  {animal?.name} isn't hungry right now! &#9786;
                </div>
              )}
            </>
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
        <div className="foodform-foodimages">
          <div className="foodbackground">
            {/* <div> */}
            <FoodList
              animal={animal}
              decrementItem={decrementItem}
              setAnimal={setAnimal}
            />
            {/* </div> */}
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
      </div>
    </>
  );
}
