import { useEffect, useState } from "react";
import { getAnimals } from "../../utilities/animal-service";
import { Link, useNavigate } from "react-router-dom";
import "./animals.css";
import dog from "../../assets/dog-02.png";

export default function AnimalsList({ location }) {
  const [isLoading, setIsLoading] = useState(true);
  const [animals, setAnimals] = useState(null);
  const [firstFourAnimals, setFirstFourAnimals] = useState(null);
  const navigate = useNavigate();

  async function handleRequest() {
    const animalData = await getAnimals();
    if (animalData.length) {
      setAnimals(animalData);
      setIsLoading(false);
    }
  }
// const r1 = Math.random()*animals.length-1
// const r2 = Math.random()*animals.length-1
// const r3 = Math.random()*animals.length-1
// const r4 = Math.random()*animals.length-1

  useEffect(() => {
    handleRequest();
  }, []);

  useEffect(() => {
    if (animals) {
      setIsLoading(false);

      const firstAnimals = [];
      for (let i = 0; i < 4; i++) {
        firstAnimals.push(animals[i]);
      }
      setFirstFourAnimals(firstAnimals);
    }
  }, [animals]);

  return isLoading ? (
    <>
      <h1>Loading</h1>
    </>
  ) : (
    <>
      {location !== "homepage" ? (
<div className="animalsbackground">
        <div className="animalsIndex">
          {animals.map((animal) => (
            <div key={animal._id} className="indexAnimal">
              <div onClick={() => navigate(`/animals/${animal._id}`)}>
                <img src={dog} />
              </div>
              <div className="animalName"onClick={() => navigate(`/animals/${animal._id}`)}>
                {animal.name} the {animal.type}
              </div>
            </div>
          ))}
          </div>
          </div>
      ) : (
        <>
        {/* <div key={animals[{r1}]._id} className="animalslist">
              <div onClick={() => navigate(`/animals/${animals[{r1}]._id}`)}>
                <img src={dog} />
              </div>
              <div onClick={() => navigate(`/animals/${animals[{r1}]._id}`)}>
                {animals[{r1}]?.name}
              </div>
            </div> */}
          {firstFourAnimals?.map((animal) => (
            <div key={animal._id} className="animalslist">
              <div onClick={() => navigate(`/animals/${animal._id}`)}>
                <img src={dog} />
              </div>
              <div onClick={() => navigate(`/animals/${animal._id}`)}>
                {animal?.name}
              </div>
            </div>
          ))}
        </>
      )}
    </>
  );
}
