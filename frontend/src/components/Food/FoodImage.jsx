import { foodIndex } from "../../utilities/food-service";

import pancakes from "../../assets/pancakes.svg";
import sandwich from "../../assets/sandwich.svg";
import pasta from "../../assets/pasta.svg";
import './foods.css'
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";


export default function FoodImages({ food, setFood }) {

  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const images = [pancakes];


  return (
    <div key={food._id}>
      {food.name}
      <div>
        {(() => {
          if (food?.meal === "Lunch") {
            return (
              <img
                className="food-img"
                id={food._id}
                src={sandwich}
              />
            );
          } else if (food?.meal === "Breakfast") {
            return (
              <img
                id={food._id}
                className="food-img"
                src={pancakes}
              />
            );
          } else if (food?.meal === "Dinner") {
            return (
              <img
                id={food._id}
                className="food-img"
                src={pasta}
              />
            );
          }
        })()}
      </div>
    </div>
  );
}
