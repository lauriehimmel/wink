import { useEffect, useState } from "react";
import { getAnimals } from "../../utilities/animal-service";

export default function AnimalsList(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [animals, setAnimals] = useState(null);

  async function handleRequest() {
    const animalData = await getAnimals();
    console.log(animalData);
    if (animalData.length) {
      setAnimals(animalData);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    handleRequest();
  }, []);

  useEffect(() => {
    console.log("animals", animals);
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
      <div>
        {animals.map((animal) => (
          <h1>{animal.name} the {animal.type}</h1>
        ))}
        {/* {animals[0].name} */}
      </div>
    </>
  );
}
