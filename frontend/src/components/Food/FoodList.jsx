import { useEffect, useState } from "react";
import { deleteFood } from "../../utilities/food-service";
import FoodImages from "./FoodImage";

export default function FoodList({ animal, decrementItem, setAnimal }) {
  const [isLoading, setIsLoading] = useState(true);
  const [food, setFood] = useState(null);
  const [idx, setIdx] = useState(0);
  let display;

  function hideButton() {
    if (animal?.foods?.length !== 0) {
      display = true;
    } else {
      display = false;
    }
  }

  async function handleRequest() {
    if (animal?.foods?.length >= 0) {
      const foods = animal.foods;
      setFood(foods);
      setIsLoading(false);
    }
  }

  const handleDelete = async (e) => {
    try {
      if (animal.foods.length !== 0) {
        setIdx(0);
      }
      const deletedFood = await deleteFood(e.target.id);
      const animalMinusDeleted = animal.foods.pop(deletedFood);
      setAnimal(animalMinusDeleted);
    } catch (err) {
      console.log(err);
    }
  };

  function leftFood() {
    if (idx !== 0) {
      console.log(idx);
      let newIdx = idx - 1;
      setIdx(newIdx);
    } else if (idx === 0) {
      let newIdx = animal?.foods?.length - 1;
      setIdx(newIdx);
    }
  }

  function rightFood() {
    if (idx !== animal?.foods?.length - 1) {
      console.log(idx);
      let newIdx = idx + 1;
      setIdx(newIdx);
    } else if (idx === animal?.foods?.length - 1) {
      let newIdx = 0;
      setIdx(newIdx);
    }
  }

  useEffect(() => {
    setAnimal(animal);
    hideButton();
  }, []);

  useEffect(() => {
    setAnimal(animal);
  }, [animal]);

  useEffect(() => {
    setIsLoading(false);
    handleRequest();
  }, [animal?.foods]);

  return isLoading ? (
    <></>
  ) : (
    <>
      <div className="foodList">
        {animal?.foods?.length > 0 ? (
          <div
            className="foodimagecontainer"
            key={animal?.foods[idx]}
            display={display}
          >
            <div className="arrow" onClick={leftFood}>
              &#9664;
            </div>
            <div className="image-and-delete">
            <FoodImages
              food={animal?.foods[idx]}
              setFood={setFood}
              decrementItem={decrementItem}
            />
            <button
              className="deletebutton"
              id={animal?.foods[idx]._id}
              onClick={handleDelete}
            >
              x
            </button>
            </div>
            <div className="arrow" onClick={rightFood}>
              &#9654;
            </div>
          </div>
        ) : (
          <div className="emptypantry">Pantry is empty!</div>
        )}
      </div>
    </>
  );
}
