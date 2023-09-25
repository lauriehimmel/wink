import { useEffect, useState } from "react";
import { getAnimals } from "../../utilities/animal-service";

export default function AnimalsList(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [animals, setAnimals] = useState(null)


  async function handleRequest(){
    try {
      const animalData = await etAnimals();
      if(animalData.length){
        setAnimals(animalData);
        setIsLoading(false);
      } else {
        setIsLoading(false);
        throw Error(peopleData)
      }
    } catch (err) {
        console.log(err);
      }
  };


  useEffect(()=> {
    handleRequest();
  }, [])
  
  return (
    <section className="animals-list">
     <h1>Hiiii</h1>
    </section>
  )
}