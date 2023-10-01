import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { deleteFood, foodIndex } from "../../utilities/food-service";
import pancakes from "../../assets/pancakes.svg";
import sandwich from "../../assets/sandwich.svg";
import pasta from "../../assets/pasta.svg";
import FoodImages from "./FoodImage";

export default function FoodList() {
  let id;
  const [isLoading, setIsLoading] = useState(true);
  const [food, setFood] = useState(null);
  const navigate = useNavigate();
  const images = [pancakes];

  async function handleRequest() {
    const foods = await foodIndex();
    if (foods.length) {
      setFood(foods);
      setIsLoading(false);
    }
  }

  const handleDelete = async (id) => {
    try {
      const deletedFood = await deleteFood(id);
      console.log("deletedFood", deletedFood);
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
          <FoodImages food={food} setFood={setFood} />
          <button id={food._id} onClick={handleDelete}>
            Delete
          </button>
        </div>
      ))}
    </>
  );
}
