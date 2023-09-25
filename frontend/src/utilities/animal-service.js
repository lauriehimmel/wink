import * as animalAPI from "./animal-api";

export async function getAnimals() {
  try {
    const data = await animalAPI.index();
    return data;
  } catch (err) {
    return new Error(err);
  }
}
