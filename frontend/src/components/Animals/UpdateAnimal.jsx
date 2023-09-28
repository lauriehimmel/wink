import { useEffect, useState } from "react";
import { showAnimal, updateAnimal } from "../../utilities/animal-service";
import { useNavigate, useParams } from "react-router";

export default function NewAnimalForm() {
  const [animal, setAnimal] = useState(null);
  const [editForm, setEditForm] = useState(animal);
  const { id } = useParams();
  const navigate = useNavigate();

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
              <option value="Cat">Cat</option>
              <option value="Frog">Frog</option>
            </select>
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
