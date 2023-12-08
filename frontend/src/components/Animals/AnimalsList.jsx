import { useEffect, useState } from "react";
import { getAnimals } from "../../utilities/animal-service";
import { useNavigate } from "react-router-dom";
import "./animals.css";
import AnimalImage from "./AnimalImage";
import Header from "../Header/header";

export default function AnimalsList({ location }) {
  const [isLoading, setIsLoading] = useState(true);
  const [animals, setAnimals] = useState(null);
  const [randomAnimal, setRandomAnimal] = useState();
  const navigate = useNavigate();

  async function handleRequest() {
    const animalData = await getAnimals();
    console.log('here', animalData)
    if (animalData) {
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
      let randos = [];
      for (let i = 0; i < animals.length; i++) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = animals[i];
        animals[i] = animals[j];
        animals[j] = temp;
      }
    }
  }, [animals]);

  useEffect(() => {
    if (animals) {
      setIsLoading(false);
    }
    if (animals && location === "homepage") {
      let randos = [];
      for (let i = 0; i < 4; i++) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = animals[i];
        animals[i] = animals[j];
        animals[j] = temp;
        randos.push(temp);
      }
      setRandomAnimal(randos);
    }
  }, [animals]);

  return (isLoading ? (
    <>
      <h1>Loading</h1>
    </>
  ) : (
    <>
      {location !== "homepage" ? (
        <div className="animalsbackground">
          <Header />
          <div className="animalsIndex">
            {animals?.map((animal) => (
              <div className="indexAnimal">
                <div key={animal._id} onClick={() => navigate(`/animals/${animal._id}`)}>
                  < AnimalImage animal={animal}/>
                </div>
                <div
                  className="animalName"
                  onClick={() => navigate(`/animals/${animal._id}`)}
                >
                  {animal.name} the {animal.type}
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <>
            {randomAnimal?.map((animal) => (
              <div key={animal?._id} className="animalslist">
                <div onClick={() => navigate(`/animals/${animal._id}`)}>
                 < AnimalImage animal={animal} location={'homepage'}/>
                </div>
                <div onClick={() => navigate(`/animals/${animal._id}`)}>
                  {animal?.name}
                </div>
              </div>
            ))}
        </>
      )}
    </>
  ));
}
