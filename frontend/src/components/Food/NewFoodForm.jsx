import { useRef, useState } from "react";
import { useNavigate } from "react-router";
import { createFood } from "../../utilities/food-service";

export default function NewFoodForm({animal}) {

  let initState = {
    name: "",
    meal: ""
  };

  const [foodForm, setFoodForm] = useState(initState);
  const navigate = useNavigate();

  const foods = [
    // {foodName: "-"},
    {meal: "Breakfast"},
    {meal: "Lunch"},
    {meal: "Dinner"}
  ]

  function handleChange(e) {
    const formData = {
      ...foodForm,
      [e.target.name]: e.target.value,
    };
    console.log('formData', formData)
    setFoodForm(formData);
    console.log('foodForm', foodForm)
  }
  async function addFood(e) {
    let animalFoods = animal
  }
  async function handleSubmit(e) {
    e.preventDefault();
    await createFood(foodForm);
    setFoodForm(initState);
    navigate('/foodlist')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="meal">
          <div className="labeltext">Select a meal</div>
          <select name="meal" value={foodForm.meal} onChange={handleChange}>
          {foods.map((food) => (
              <option
                name="meal"
                id="meal"
                value={food.meal}
                key={food._id}
              >
                {food.meal}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="name">
          <div className="labeltext">What is {animal.name} eating?</div>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="yummy!"
            value={foodForm.name}
            onChange={handleChange}
            required
          />
        </label>
        <input type="submit" value="Add to pantry!"/>
      </form>
    </div>
  );
}
