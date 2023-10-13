import { useEffect, useState } from "react";
import { showAnimal, updateAnimal } from "../../utilities/animal-service";
import { useNavigate, useParams } from "react-router";

export default function NewAnimalForm() {
  const [animal, setAnimal] = useState(null);
  const [editForm, setEditForm] = useState(animal);
  const { id } = useParams();
  const navigate = useNavigate();

  const colors = [
    { color: "White", id: 1, hexcode: "#ffffff" },
    { color: "Brown", id: 2, hexcode: "#7B3F00" },
    { color: "Grey", id: 3, hexcode: "#C0C0C0" },
    { color: "Black", id: 4, hexcode: "#36454F" },
    { color: "Red", id: 5, hexcode: "red" },
    { color: "Orange", id: 6, hexcode: "orange" },
    { color: "Yellow", id: 7, hexcode: "yellow" },
    { color: "Green", id: 8, hexcode: "#93C572" },
    { color: "Blue", id: 9, hexcode: "#6495ED" },
    { color: "Purple", id: 10, hexcode: "#CF9FFF" },
    { color: "Pink", id: 11, hexcode: "#FF69B4" },
  ];

  async function handleRequest() {
    try {
      const animalData = await showAnimal(id);
      setAnimal(animalData);
      const { name, type } = animalData;
      setEditForm({ name, type });
    } catch (err) {
      console.log(err);
      navigate(`/animals/${id}`);
    }
  }

  useEffect(() => {
    handleRequest();
  }, []);

  async function handleChange(e) {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await updateAnimal(id, editForm);
      navigate(`/animals/${id}`);
    } catch (err) {
      console.log(err);
      navigate(`/animals/${id}`);
    }
  }

  const loaded = () => {
    return (
      <div className="animal-form">
        <h1>Update {animal?.name}'s details!</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">
            <div className="labeltext">Name</div>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="name"
              defaultValue={animal.name}
              onChange={handleChange}
              required
            />
          </label>
          <label htmlFor="type">
            <div className="labeltext">Did {animal?.name} shapeshift?</div>
            <select name="type" value={animal.type} onChange={handleChange}>
              <option value="Dog">Dog</option>
              <option value="Otter">Otter</option>
              <option value="Raccoon">Raccoon</option>
              <option value="Pig">Pig</option>
            </select>
          </label>
          {/* <label htmlFor="color">
            <div className="labeltext">What color is {animal?.name} now?</div>
            <select
              name="color"
              defaultValue={animal.color}
              onChange={handleChange}
            >
              {colors.map((color) => (
                <option
                  name="color"
                  id="color"
                  value={color.hexcode}
                  key={color.id}
                >
                  {color.color}
                </option>
              ))}
            </select>
          </label> */}
          <label className="formLabel" htmlFor="color">
            <div className="labeltext">What color is {animal?.name} now?</div>
            <input
              type="text"
              name="color"
              id="color"
              className="forminput"
              placeholder="enter a hex code!"
              pattern="^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$"
              title="Hex codes start with '#' and are followed by six letters (A-F, upper or lower case) and/or numbers (1-9). Make sure your code is a valid hex code! ;)"
              defaultValue={animal.color}
              onChange={handleChange}
              required
            />
          </label>
          <input className="form-submit" type="submit" value="Update!" />
        </form>
      </div>
    );
  };

  const loading = () => {
    return <h1>Loading.........</h1>;
  };

  return animal ? loaded() : loading();
}
