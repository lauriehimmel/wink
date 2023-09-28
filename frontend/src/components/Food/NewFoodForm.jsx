import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { createFood, generateIcon } from "../../utilities/food-service";
import { showAnimal, updateAnimal } from "../../utilities/animal-service";


export default function NewFoodForm({}) {
  const foods = [
    // {foodName: "-"},
    { meal: "Breakfast" },
    { meal: "Lunch" },
    { meal: "Dinner" },
  ];

  let initState = {
    name: "",
    meal: ""
  };  

  const { id } = useParams();
  const [foodForm, setFoodForm] = useState(initState);
  const [animal, setAnimal] = useState();
  const [formvalue, setFormValue] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    async function selectAnimal() {
      const animal = await showAnimal(id);
      setAnimal(animal);
    }
    selectAnimal();
  }, []);
  
  function handleChange(e) {
    const formData = {
      // ...foodForm,
      [e.target.name]: e.target.value,
    };
    setFoodForm(formData);
    setFormValue(e.target.value)
  }
  async function addFood(id) {
    let animalFoods = animal.foods;
    await animalFoods.push(id);
    const updatedAnimal = {
      // ...animal,
      foods: animalFoods,
    };
    updateAnimal(animal._id, updatedAnimal)
  }
  
  async function handleSubmit(e) {
    e.preventDefault();
    const newFood = await createFood({name: e.target.name.value, meal: e.target.meal.value});
    addFood(newFood._id);
    setFoodForm(initState);
    navigate(`/animals/${animal._id}`);
  }

  return (
    <div>
      <form className="newfoodform" onSubmit={handleSubmit}>
        <label htmlFor="meal">
          <div className="labeltext">Select a meal</div>
          <select name="meal" onChange={handleChange}>
            {foods.map((food) => (
              <option name="meal" id="meal" value={food.meal} key={food._id}>
                {food.meal}
              </option>
            ))}
          </select>
        </label>
        <section className="foodname">
        <label htmlFor="name">
          <div className="labeltext">What are you eating?</div>
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
        <input className="purplebutton addtopantry" type="submit" value="Add to pantry!" />
        </section>
      </form>
    </div>
  );
}
