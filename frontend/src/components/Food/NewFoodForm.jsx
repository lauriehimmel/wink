import { useState } from "react";
import { useNavigate } from "react-router";
import { createFood } from "../../utilities/food-service";

export default function NewFoodForm() {

  let initState = {
    name: ""
  };

  const [foodForm, setFoodForm] = useState(initState);
  const navigate = useNavigate();

  const foods = [
    {foodName: "-"},
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
    console.log('formData1', formData)
    setFoodForm(formData);
    console.log('formData2', formData)
    console.log('foodForm', foodForm)
  }

  async function handleSubmit(e) {
    e.preventDefault();
    e.currentTarget.disabled = true;
    console.log('submit foodform', foodForm)
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
        <input disabled={ foodForm.name ==="-" ? true : false} type="submit" value="Add to pantry!"/>
      </form>
    </div>
  );
}
