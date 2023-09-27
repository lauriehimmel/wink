import { useState } from "react";
import NewAnimalForm from "../../components/Animals/NewAnimalForm";
import NewFoodForm from "../../components/Food/NewFoodForm";
import { createFood } from "../../utilities/food-service";
import { useNavigate } from "react-router";
import { createAnimal } from "../../utilities/animal-service";

export default function Adopt() {
  let foodInitState = {
    name: "",
  };

  let animalInitState = {
    name: "",
    type: "Dog",
  };
  const navigate = useNavigate();
  const [animalForm, setNewAnimalForm] = useState(animalInitState);
  const [foodForm, setFoodForm] = useState(foodInitState);

  async function handleSubmit(e) {
    e.preventDefault();
    e.currentTarget.disabled = true;
    await createFood(foodForm);
    await createAnimal(animalForm);
    setFoodForm(foodInitState);
    setNewAnimalForm(animalInitState);
    navigate("/animals");
  }


  return (
    <>
      <form  onSubmit={handleSubmit}>
        <NewAnimalForm animalForm={animalForm} />
        <NewFoodForm foodForm={foodForm} />
        <input type="submit" value="Adopt!" />
      </form>
    </>
  );
}
