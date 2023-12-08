import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { createFood, generateIcon } from "../../utilities/food-service";
import { showAnimal, updateAnimal } from "../../utilities/animal-service";

export default function NewFoodForm({setAddFoodState, setAnimal, animal}) {
  const meals = [
    { meal: "Breakfast", id:1 },
    { meal: "Lunch", id:2 },
    { meal: "Dinner", id:3 },
  ];
  
  const foodOptions = [
    { name: "Kibble", id:1 },
    { name: "Cheese", id:2 },
    { name: "Steak", id:3 },
    { name: "Peanut butter", id:4 },
  ]
  
  let initState = {
    name: "Kibble",
    meal: "Breakfast"
  };  
  
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true)
  const [foodForm, setFoodForm] = useState(initState);
  const [thisAnimal, setThisAnimal] = useState();
  const [formvalue, setFormValue] = useState();
  const [disableButton, setDisableButton] = useState(false)
  const navigate = useNavigate();

  useEffect(() => {
    async function selectAnimal() {
      setThisAnimal(animal);
    }
    selectAnimal();
  }, []);
  
  useEffect(() => {
    async function selectAnimal() {
      setThisAnimal(animal);
    }
    selectAnimal();
    setIsLoading(false)
  }, [animal]);

  
  function handleChange(e) {
    const formData = {
      [e.target.name]: e.target.value,
    };
    setFoodForm(formData);
    setFormValue(e.target.value)
  }
  async function addFood(id) {
    const foodList = [...thisAnimal.foods.map(f => f._id)];
    foodList.push(id);
    const updatedAnimal = {
      ...thisAnimal,
      foods: foodList,
    };
    const updatedData = await updateAnimal(thisAnimal._id, updatedAnimal)
    setAnimal(updatedData)
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setDisableButton(true)
    setTimeout(function(){setDisableButton(false)}, 1000)
    const newFood = await createFood({name: e.target.name.value, meal: e.target.meal.value});
    addFood(newFood._id);
    setAddFoodState(newFood._id)
    setFoodForm(initState);
  }

  return isLoading ? (
    <>
      <div className="loading">Loading</div>
    </>
  ) : (
    <>
    <div>
      <form className="newfoodform" onSubmit={handleSubmit}>
        {/* <label htmlFor="meal">
          <div className="labeltext">Select a meal</div>
          <select name="meal" onChange={handleChange}>
            {meals.map((meal) => (
              <option name="meal" id="meal" value={meal.meal} key={meal.id}>
                {meal.meal}
              </option>
            ))}
          </select>
        </label> */}
        <section className="foodname">
        <label htmlFor="name">
          <div className="labeltext">Select a meal</div>
          <select name="name" onChange={handleChange}>
            {foodOptions.map((name) => (
              <option name="name" id="name" value={name.name} key={name.id}>
                {name.name}
              </option>
            ))}
          </select>
        </label>
        <input className="purplebutton addtopantry" type="submit" value="Add to pantry!" disabled={disableButton}/>
        </section>
      </form>
    </div>
    </>
  );
}
