import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { foodIndex } from "../../utilities/food-service";



export default function FoodList() {
  const [isLoading, setIsLoading] = useState(true);
  const [food, setFood] = useState(null);
  const navigate = useNavigate();

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
            {/* <button onClick={() => navigate(`/food/${food._id}`)}>
              hi!
            </button> */}
          </div>
        ))}
    </>
  );
}