import kibble from "../../assets/food/kibble.svg";
import steak from "../../assets/food/steak-01.svg";
import cheese from "../../assets/food/cheese.svg";
import peanutbutter from "../../assets/food/peanutbutter.svg";
import "./foods.css";

export default function FoodImages({ food, decrementItem }) {
  return (
    <>
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
        } else if (food?.name === "Cheese") {
          return (
            <img
              id={food._id}
              className="food-img"
              src={cheese}
              onClick={decrementItem}
            />
          );
        } else if (food?.name === "Peanut butter") {
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
    </>
  );
}
