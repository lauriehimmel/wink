import { useRef, useState } from "react";
import { useNavigate } from "react-router";

export default function NewFoodForm({foodForm, foodInitState}) {

  // let initState = {
  //   name: ""
  // };

  const [newFoodForm, setNewFoodForm] = useState(foodForm);
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
    setNewFoodForm(formData);
  }

  // async function handleSubmit(e) {
  //   e.preventDefault();
  //   e.currentTarget.disabled = true;
  //   await createFood(foodForm);
  //   setFoodForm(initState);
  // }

  return (

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

  );
}
