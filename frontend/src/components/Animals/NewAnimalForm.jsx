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
  {color: "White", id: 1, hexcode: "#ffffff"},
  {color: "Brown", id: 2, hexcode: "#7B3F00"},
  {color: "Grey", id: 3, hexcode: "#C0C0C0"},
  {color: "Black", id: 4, hexcode: "#36454F"},
  {color: "Red", id: 5, hexcode: "red"},
  {color: "Orange", id: 6, hexcode: "orange"},
  {color: "Yellow", id: 7, hexcode: "yellow"},
  {color: "Green", id: 8, hexcode: "#93C572"},
  {color: "Blue", id: 9, hexcode: "#6495ED"},
  {color: "Purple", id: 10, hexcode: "#CF9FFF"},
  {color: "Pink", id: 11, hexcode: "#FF69B4"}
]

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
            <option value="Raccoon">Raccoon</option>
            <option value="Otter">Otter</option>
            <option value="Pig">Pig</option>
          </select>
        </label>
        <label className="formLabel" htmlFor="color">
          <div className="labeltext">What color is your pet?</div>
          <select name="color" value={newForm.color} onChange={handleChange} style={{"backgroundColor": `${newForm.color}`}}>
            {colors.map((color) => (
              <option name="color" id="color" value={color.hexcode} key={color.id}>
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
