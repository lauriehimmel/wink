import { useRef, useState } from "react";
import { useNavigate } from "react-router";
import { createFood } from "../../utilities/food-service";

export default function NewFoodForm({}) {

  let initState = {
    name: "",
    category: ""
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
    console.log('formData', formData)
    setFoodForm(formData);
    console.log('foodForm', foodForm)
  }
  
  async function handleSubmit(e) {
    e.preventDefault();
    e.currentTarget.disabled = true;
    console.log('foodForm', foodForm)
    await createFood(foodForm);
    console.log('foodForm', foodForm)
    setFoodForm(initState);
    navigate('/foodlist')

  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="category">
          <div className="labeltext">Yummy!</div>
          <select name="category" value={foodForm.category} onChange={handleChange}>
          {foods.map((food) => (
              <option
                name="category"
                id="category"
                value={food.category}
                key={food._id}
              >
                {food.foodName}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="name">
          <div className="labeltext">Flavor</div>
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
