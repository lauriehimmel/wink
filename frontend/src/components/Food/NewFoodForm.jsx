import { useRef, useState } from "react";
import { useNavigate } from "react-router";
import { createFood } from "../../utilities/food-service";

export default function NewFoodForm({submitRef}) {

  let initState = {
    name: ""
  };

  const [foodForm, setFoodForm] = useState(initState);
  const navigate = useNavigate();

  const foods = [
    // {foodName: "-"},
    {foodName: "Pizza"},
    {foodName: "Burger"},
    {foodName: "Fries"},
    {foodName: "Salad"},
    {foodName: "Fruit"},
    {foodName: "Vegetables"}
  ]

  function handleChange(e) {
    const formData = {
      ...foodForm,
      [e.target.name]: e.target.value,
    };
    setFoodForm(formData);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    e.currentTarget.disabled = true;
    await createFood(foodForm);
    setFoodForm(initState);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          <div className="labeltext">Yummy!</div>
          <select name="name" value={foodForm.name} onChange={handleChange}>
          {foods.map((food) => (
              <option
                name="name"
                id="name"
                value={food.foodName}
                key={food._id}
              >
                {food.foodName}
              </option>
            ))}
          </select>
        </label>
        <button ref={submitRef} type="submit" value="Add to pantry!" style={{ display: 'none' }}/>
      </form>
    </div>
  );
}
