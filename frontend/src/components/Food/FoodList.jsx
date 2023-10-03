import { useEffect, useState } from "react";
import { deleteFood } from "../../utilities/food-service";
import FoodImages from "./FoodImage";

export default function FoodList({ animal, decrementItem, setAnimal }) {
  const [isLoading, setIsLoading] = useState(true);
  const [food, setFood] = useState(null);

  async function handleRequest() {
    if (animal?.foods?.length >= 0) {
      const foods = animal.foods;
      setFood(foods);
      setIsLoading(false);
    }
  }

  const handleDelete = async (e) => {
    try {
      const deletedFood = await deleteFood(e.target.id);
      const animalMinusDeleted = animal.foods.pop(deletedFood);
      setAnimal(animalMinusDeleted);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    async function selectAnimal() {
      setAnimal(animal);
    }
    selectAnimal();
  }, []);

  useEffect(() => {
    async function selectAnimal() {
      setAnimal(animal);
    }
    selectAnimal();
  }, [animal]);

  useEffect(() => {
    setIsLoading(false);
    handleRequest();
  }, [animal?.foods]);

  return isLoading ? (
    <>
    <div className="loading">loading...</div>
    </>
  ) : (
    <>
      {food?.map((food) => (
        <div key={food._id} className="foodList">
          <FoodImages
            food={food}
            setFood={setFood}
            decrementItem={decrementItem}
          />
          <button className="deletebutton" id={food._id} onClick={handleDelete}>
            x
          </button>
        </div>
      ))}
    </>
  );
}
