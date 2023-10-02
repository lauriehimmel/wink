import { useEffect, useState } from "react";
import { deleteFood, foodIndex } from "../../utilities/food-service";
import FoodImages from "./FoodImage";
import { findAnimalByFoodId, showAnimal } from "../../utilities/animal-service";
import { useParams } from "react-router";

export default function FoodList({animal, decrementItem, setAnimal}) {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [food, setFood] = useState(null);
  const [deletedFoods, setDeletedFoods] = useState();

  async function handleRequest() {
    if (animal?.foods?.length >=0) {
      const foods = animal.foods
      setFood(foods);
      setIsLoading(false);
    }
  }

  const handleDelete = async (e) => {
    try {
      const deletedFood = await deleteFood(e.target.id);
      const animalMinusDeleted = animal.foods.pop(deletedFood)
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
      <p className="nofoodsyet">No foods yet!</p>
    </>
  ) : (
    <>
      {food?.map((food) => (
        <div key={food._id} className="foodList">
          <FoodImages food={food} setFood={setFood}  decrementItem={decrementItem}/>
          <button className="deletebutton" id={food._id} onClick={handleDelete}>
            x
          </button>
        </div>
      ))}
    </>
  );
}
