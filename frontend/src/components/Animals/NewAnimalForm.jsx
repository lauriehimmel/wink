import { useEffect, useState } from "react";
import { createAnimal, showAnimal } from "../../utilities/animal-service";
import { useNavigate } from "react-router";

export default function NewAnimalForm() {
  let initState = {
    name: "",
    type: "Dog",
    color: "White"
  };
  const [newForm, setNewForm] = useState(initState);
  const navigate = useNavigate();
const colors = [
  {color: "White", id: 1},
  {color: "Brown", id: 2},
  {color: "Grey", id: 3},
  {color: "Red", id: 4},
  {color: "Orange", id: 5},
  {color: "Yellow", id: 6},
  {color: "Green", id: 7},
  {color: "Blue", id: 8},
  {color: "Purple", id: 9}
]

  function handleChange(e) {
    const formData = {
      ...newForm,
      [e.target.name]: e.target.value,
    };
    setNewForm(formData);
    console.log('newForm', newForm)
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await createAnimal(newForm);
    setNewForm(initState);
    navigate('/animals')
  }

  return (
    <div className="animal-form">
      <h1>Who are you adopting?</h1>
      <form onSubmit={handleSubmit}>
        <div className="labels">
        <label className="formLabel" htmlFor="name">
          <div className="labeltext">Name</div>
          <input
            type="text"
            name="name"
            id="name"
            className="forminput"
            placeholder="name your new pet!"
            value={newForm.name}
            onChange={handleChange}
            required
          />
        </label>
        <label className="formLabel" htmlFor="type">
          <div className="labeltext">What kind of animal are you adopting?</div>
          <select className="dropdown" name="type" value={newForm.type} onChange={handleChange}>
            <option value="Dog">Dog</option>
            <option value="Cat">Cat</option>
            <option value="Frog">Frog</option>
          </select>
        </label>
        <label className="formLabel" htmlFor="color">
          <div className="labeltext">What color is your pet?</div>
          <select name="color" value={newForm.color} onChange={handleChange} style={{"background-color": `${newForm.color}`}}>
            {colors.map((color) => (
              <option name="color" id="color" value={color.color} key={color.id}>
                {color.color}
              </option>
            ))}
          </select>
        </label>
        </div>
        <input className="form-submit" type="submit" value="Adopt!" />
      </form>
    </div>
  );
}
