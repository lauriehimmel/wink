import * as animalAPI from "./animal-api";

export async function getAnimals() {
  try {
    const data = await animalAPI.index();
    return data;
  } catch (err) {
    return new Error(err);
  }
}

export async function createAnimal(animalData) {
  try {
    const data = await animalAPI.create(animalData);
    return data;
  } catch (err) {
    return new Error(err);
  }
}

export async function deleteAnimal(id) {
  try {
    const deletedAnimal = await animalAPI.destroy(id);
    return deletedAnimal;
  } catch (err) {
    throw err;
  }
}

export async function showAnimal(id) {
  try {
    const animal = await animalAPI.show(id);
    return animal;
  } catch (err) {
    throw err;
  }
}

export async function updateAnimal(id, data) {
  try {
    const animal = await animalAPI.update(id, data);
    return animal;
  } catch (err) {
    throw err;
  }
}

