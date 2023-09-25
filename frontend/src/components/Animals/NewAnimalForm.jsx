import { useEffect, useState } from "react";
import { createAnimal } from "../../utilities/animal-service";

export default function NewAnimalForm() {
  let initState = {
    name: "",
    type: "",
  };
  const [newForm, setNewForm] = useState(initState);

  function handleChange(e) {
    const formData = {
      ...newForm,
      [e.target.name]: e.target.value
    };
    console.log('formData', formData)
    setNewForm(formData);
    console.log('newform - handleChange', newForm)
  }
  
  async function handleSubmit(e) {
    e.preventDefault();
    console.log('newform - handleSubmit', newForm)
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
          <select
            type="text"
            name="type"
            id="type"
            value={newForm.type}
            onChange={handleChange}
            required
          >
            <option value="Dog">Dog</option>
            <option value="Cat">Cat</option>
            <option value="Frog">Frog</option>
          </select>
        </label>
        <input
          type="submit"
          value="Adopt!"
        />
      </form>
    </div>
  );
}
