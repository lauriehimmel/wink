import { useEffect, useState } from "react";
import { createAnimal } from "../../utilities/animal-service";

export default function NewAnimalForm() {

  let initState = {
    name: "",
    type: "Dog"
  };

  const [newForm, setNewForm] = useState(initState);

  function handleChange(e) {
    const formData = {
      ...newForm,
      [e.target.name]: e.target.value,
    };
    setNewForm(formData);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await createAnimal(newForm);
    setNewForm(initState);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
            <option selected value="Dog">Dog</option>
            <option value="Cat">Cat</option>
            <option value="Frog">Frog</option>
          </select>
        </label>
        <input type="submit" value="Adopt!" />
      </form>
    </div>
  );
}
