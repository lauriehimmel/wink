import { useEffect, useState } from "react";
import { deleteFood, foodIndex } from "../../utilities/food-service";
import FoodImages from "./FoodImage";
import { findAnimalByFoodId } from "../../utilities/animal-service";

export default function FoodList({decrementItem}) {
  let id;
  const [isLoading, setIsLoading] = useState(true);
  const [food, setFood] = useState(null);

  async function handleRequest() {
    const foods = await foodIndex();
    if (foods.length) {
      setFood(foods);
      setIsLoading(false);
    }
  }

  const handleDelete = async (e) => {
    try {
      const deletedFood = await deleteFood(e.target.id);
    } catch (err) {
      console.log(err);
    }
  };


  useEffect(() => {
    setIsLoading(false);
    handleRequest();
  }, [food]);

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
