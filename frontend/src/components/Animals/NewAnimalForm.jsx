import { useEffect, useState } from "react";
import { createAnimal } from "../../utilities/animal-service";
import { useNavigate } from "react-router";

export default function NewAnimalForm({ animalForm }) {
  // let initState = {
  //   name: "",
  //   type: "Dog"
  // };

  const [newForm, setNewForm] = useState(animalForm);
  const navigate = useNavigate();

  function handleChange(e) {
    const formData = {
      ...newForm,
      [e.target.name]: e.target.value,
    };
    setNewForm(formData);
  }

  // async function handleSubmit(e) {
  //   e.preventDefault();
  //   await createAnimal(newForm);
  //   setNewForm(animalInitState);
  // }

  return (
    <>
      <label htmlFor="name">
        <div className="labeltext">Name</div>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="name your new pet!"
          value={newForm.name}
          onChange={handleChange}
          required
        />
      </label>
      <label htmlFor="type">
        <div className="labeltext">What kind of animal are you adopting?</div>
        <select name="type" value={newForm.type} onChange={handleChange}>
          <option value="Dog">Dog</option>
          <option value="Cat">Cat</option>
          <option value="Frog">Frog</option>
        </select>
      </label>
    </>
  );
}
