import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { foodIndex } from "../../utilities/food-service";
import pancakes from "../../assets/pancakes.svg";



export default function FoodList() {
  const [isLoading, setIsLoading] = useState(true);
  const [food, setFood] = useState(null);
  const navigate = useNavigate();
  const images = [pancakes]

  async function handleRequest() {
    const foods = await foodIndex();
    if (foods.length) {
      setFood(foods);
      setIsLoading(false);
    }
  }

  useEffect (()=> {
    handleRequest();
  }, [])

  return isLoading ? (
    <>
      <h1>Loading</h1>
    </>
  ) : (
    <>
        {food.map((food) => (
          <div key={food._id} className="foodList">
            <p>
              {food.name} 
            </p>
            <div>
              {/* {food.meal = "Breakfast" && ( */}
              <img src={pancakes} />
              {/* )} */}
            </div>
          </div>
        ))}
    </>
  );
}