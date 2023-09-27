import { useRef, useState } from "react";
import { useNavigate } from "react-router";

export default function NewFoodForm({ foodForm, foodInitState }) {
  // let initState = {
  //   name: ""
  // };

  const [newFoodForm, setNewFoodForm] = useState(foodForm);
  const navigate = useNavigate();

  const foods = [
    // {foodName: "-"},
    { foodCategory: "Pizza" },
    { foodCategory: "Burger" },
    { foodCategory: "Fries" },
    { foodCategory: "Salad" },
    { foodCategory: "Fruit" },
    { foodCategory: "Vegetables" },
  ];

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
    <>
      <label htmlFor="category">
        <div className="labeltext">What kind of food?</div>
        <select name="category" value={foodForm.category} onChange={handleChange}>
          {foods.map((food) => (
            <option name="category" id="category" value={food.foodCategory} key={food._id}>
              {food.foodCategory}
            </option>
          ))}
        </select>
      </label>
      <label htmlFor="foodName">
        <div className="labeltext">Tell us more!</div>
        <input
          type="text"
          name="foodName"
          id="foodName"
          placeholder="Yum!"
          onChange={handleChange}
          required
        />
      </label>
    </>
  );
}
