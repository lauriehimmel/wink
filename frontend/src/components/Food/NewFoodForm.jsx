import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { createFood, generateIcon } from "../../utilities/food-service";
import { showAnimal, updateAnimal } from "../../utilities/animal-service";


export default function NewFoodForm({setAddFood, handleAnimalUpdate}) {
  const meals = [
    // {foodName: "-"},
    { meal: "Breakfast", id:1 },
    { meal: "Lunch", id:2 },
    { meal: "Dinner", id:3 },
  ];

  const foodOptions = [
    { foodOption: "Kibble", id:1 },
    { foodOption: "Salmon", id:2 },
    { foodOption: "Cheese", id:3 },
    { foodOption: "Greenies", id:4 },
    { foodOption: "Steak", id:5 },
    { foodOption: "Chicken", id:6 },
    { foodOption: "Peanut butter", id:7 },
  ]

  let initState = {
    name: "Kibble",
    meal: "Breakfast"
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
    let foodList = [...animal.foods.map(f => f._id)];
    foodList.push(id);
    // setAddFood(prevState => !prevState)
    const updatedAnimal = {
      ...animal,
      foods: foodList,
    };
    const updatedData = await updateAnimal(animal._id, updatedAnimal)
    handleAnimalUpdate(updatedData)
  }
  
  async function handleSubmit(e) {
    e.preventDefault();
    const newFood = await createFood({name: e.target.name.value, meal: e.target.meal.value});
    addFood(newFood._id);
    setFoodForm(initState);
  }

  return (
    <div>
      <form className="newfoodform" onSubmit={handleSubmit}>
        <label htmlFor="meal">
          <div className="labeltext">Select a meal</div>
          <select name="meal" onChange={handleChange}>
            {meals.map((meal) => (
              <option name="meal" id="meal" value={meal.meal} key={meal.id}>
                {meal.meal}
              </option>
            ))}
          </select>
        </label>

        <section className="foodname">
        <label htmlFor="name">
          <div className="labeltext">Select a meal</div>
          <select name="name" onChange={handleChange}>
            {foodOptions.map((option) => (
              <option name="name" id="name" value={option.foodOption} key={option.id}>
                {option.foodOption}
              </option>
            ))}
          </select>
        </label>


        <input className="purplebutton addtopantry" type="submit" value="Add to pantry!" />
        </section>
      </form>
    </div>
  );
}
