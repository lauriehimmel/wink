import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { showAnimal } from "../../utilities/animal-service";
import NewFoodForm from "../Food/NewFoodForm";


export default function OneAnimal() {
  const {id} = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [animal, setAnimal] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function getAnimal() {
      const animal = await showAnimal(id)
      setAnimal(animal);
    };
    getAnimal();
  }, []);

  useEffect(() => {
    setIsLoading(false)
  },[animal])

  return isLoading ? (
    <>
      <h1>Loading</h1>
    </>
  ) : (
    <>
      <div>
        {animal?.name} the {animal?.type}
        <button onClick={() => navigate(`/animals/${animal._id}/update`)}>
              Edit
            </button>
      </div>
    </>
  );




}