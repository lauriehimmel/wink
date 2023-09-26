import { useEffect, useState } from "react";
import { getAnimals } from "../../utilities/animal-service";
import { Link, useNavigate } from "react-router-dom";
import './animals.css'

export default function AnimalsList(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [animals, setAnimals] = useState(null);
  const navigate = useNavigate();

  async function handleRequest() {
    const animalData = await getAnimals();
    if (animalData.length) {
      setAnimals(animalData);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    handleRequest();
  }, []);

  useEffect(() => {
    if (animals) {
      setIsLoading(false);
    }
  }, [animals]);

  return isLoading ? (
    <>
      <h1>Loading</h1>
    </>
  ) : (
    <>
        {animals.map((animal) => (
          <div key={animal._id} className="animal">
            <h1>
              {animal.name} the {animal.type}
            </h1>
            <button onClick={() => navigate(`/animals/${animal._id}`)}>
              hi!
            </button>
          </div>
        ))}
    </>
  );
}
