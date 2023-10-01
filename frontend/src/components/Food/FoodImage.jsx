import { deleteFood, foodIndex } from "../../utilities/food-service";

import kibble from "../../assets/food/kibble.svg";
import steak from "../../assets/food/steak-01.svg";
import cheese from "../../assets/food/cheese.svg";
import peanutbutter from "../../assets/food/peanutbutter.svg";
import './foods.css'
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";


export default function FoodImages({ food, setFood, decrementItem }) {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  return (
    <div key={food._id}>
      {/* {food.name} */}
      <div>
        {(() => {
          if (food?.name === "Kibble") {
            return (
              <img
                className="food-img"
                id={food._id}
                src={kibble}
                onClick={decrementItem}
              />
            );
          } else if (food?.name === "Steak") {
            return (
              <img
                id={food._id}
                className="food-img"
                src={steak}
                onClick={decrementItem}
              />
            );
          } else if(food?.name === "Cheese") {
            return (
              <img
                id={food._id}
                className="food-img"
                src={cheese}
                onClick={decrementItem}
              />
            );
          } else if(food?.name === "Peanut butter") {
            return (
              <img
                id={food._id}
                className="food-img"
                src={peanutbutter}
                onClick={decrementItem}
              />
            );
          }
        })()}
      </div>

    </div>
  );
}
