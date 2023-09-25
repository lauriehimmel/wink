import { useEffect, useState } from "react";

export default function AnimalsList(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [animals, setAnimals] = useState(null)

  const BASE_URL = "http://localhost:4000/animals";
  // this base url variable will be replaced with an environmental variables once we migrate the fetch to service modules

  const getAnimals = async () => {
    try {
      const response = await fetch(BASE_URL);
      const allAnimals = await response.json();
      setAnimals(allAnimals);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };


  useEffect(()=> {
    getAnimals();

    console.log('there are ${animals.length} animals to render')
  }, [])
  return (
    <section className="animals-list">
      <div>
      </div>
    </section>
  )
}