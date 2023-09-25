import * as animalApi from "./animal-api"

export async function getAnimals() {
  try {
    const data = await animalApi.animalIndex();
    return data;
  } catch(err) {
    console.log(err);
    return err;
  }
}