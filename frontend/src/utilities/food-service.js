import * as foodAPI from "./food-api";

export async function foodIndex() {
  try {
    const data = await foodAPI.foodIndex();
    return data;
  } catch (err) {
    return new Error(err);
  }
}

export async function createFood(foodData) {
  try {
    const data = await foodAPI.createFood(foodData);
    return data;
  } catch (err) {
    return new Error(err)
;  }
}

export async function showFood(id) {
  try {
    const food = await foodAPI.showFood(id);
    return food;
  } catch (err) {
    throw err;
  }
}

export async function updateFood(id, data) {
  try {
    const food = await foodAPI.updateFood(id, data);
    return food;
  } catch (err) {
    throw err;
  }
}

// export async function generateIcon(formData){
//   try {
//     const data = await foodAPI.generateIcon(formData)
//     return data;
//   } catch (err) {
//     return err;
//   }
// }