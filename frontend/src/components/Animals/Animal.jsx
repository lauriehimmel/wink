import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { showAnimal } from "../../utilities/animal-service";

export default function OneAnimal() {
  const id = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [animal, setAnimal] = useState(null);

  useEffect(() => {
    async function getAnimal() {
      const ids = [id];
      console.log('ids', ids)
      const animal = await showAnimal(ids)
      console.log('animal', animal)
      setAnimal(animal[0]);
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
        {animal.name}
      </div>
    </>
  );




}