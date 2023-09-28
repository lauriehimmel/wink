import { useEffect, useState } from "react";
import { getAnimals } from "../../utilities/animal-service";
import { Link, useNavigate } from "react-router-dom";
import "./animals.css";
import pup from "../../assets/Dog.svg";
import Dog from "../../assets/dog-02.png";
import pasta from "../../assets/pasta.svg";

export default function AnimalsList({ location }) {
  const [isLoading, setIsLoading] = useState(true);
  const [animals, setAnimals] = useState(null);
  const [firstFourAnimals, setFirstFourAnimals] = useState(null);
  const [randomAnimal, setRandomAnimal] = useState();
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

  // useEffect(() => {
  //   if (animals) {
  //     setIsLoading(false);
  //     const firstAnimals = [];
  //     for (let i = 0; i < 4; i++) {
  //       firstAnimals.push(animals[i]);
  //     }
  //     setFirstFourAnimals(firstAnimals);
  //   }
  // }, [animals]);

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
                  {(() => {
                    if (animal?.type === "Dog") {
                      return <img src={Dog} />;
                    } else if (animal?.type === "Cat") {
                      return <img src={pup} />;
                    } else {
                      return <img src={pasta} />;
                    }
                  })()}
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
          <>
            {randomAnimal?.map((animal) => (
              <div key={animal._id} className="animalslist">
                <div onClick={() => navigate(`/animals/${animal._id}`)}>
                  {(() => {
                    if (animal?.type === "Dog") {
                      return <img src={Dog} />;
                    } else if (animal?.type === "Cat") {
                      return <img src={pup} />;
                    } else {
                      return <img src={pasta} />;
                    }
                  })()}
                </div>
                <div onClick={() => navigate(`/animals/${animal._id}`)}>
                  {animal?.name}
                </div>
              </div>
            ))}
          </>
          {/* {firstFourAnimals?.map((animal) => (
            <div key={animal._id} className="animalslist">
              <div onClick={() => navigate(`/animals/${animal._id}`)}>
                <img src={dog} />
              </div>
              <div onClick={() => navigate(`/animals/${animal._id}`)}>
                {animal?.name}
              </div>
            </div>
          ))} */}
        </>
      )}
    </>
  );
}
