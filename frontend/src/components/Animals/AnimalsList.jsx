import { useEffect, useState } from "react";
import { getAnimals } from "../../utilities/animal-service";
import { Link, useNavigate } from "react-router-dom";
import './animals.css'
import dog from "../../assets/dog-02.png";

export default function AnimalsList({location}) {
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

const firstAnimals = [];
for (let i=0; i<4; i++) {
  firstAnimals.push(animals[i])
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
    {location !== "homepage" ? (
      <>
        {animals.map((animal) => (
          <div key={animal._id} className="animalslist">
            <div onClick={() => navigate(`/animals/${animal._id}`)}>
              <img src={dog}/>
            </div>
            <div onClick={() => navigate(`/animals/${animal._id}`)}>
              {animal.name} the {animal.type}
            </div>
          </div>
        ))}
        </>
    ) : (
      <>
        {firstAnimals.map((animal) => (
          <div key={animal._id} className="animalslist">
            <div onClick={() => navigate(`/animals/${animal._id}`)}>
              <img src={dog}/>
            </div>
            <div onClick={() => navigate(`/animals/${animal._id}`)}>
              {animal.name} the {animal.type}
            </div>
          </div>
        ))}
        </>
    )
  } 
    </>
  );
}
