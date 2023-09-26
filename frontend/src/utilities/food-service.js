import * as foodAPI from "./food-api";

export async function foodIndex() {
  try {
    const data = await foodAPI.foodIndex();
    return data;
  } catch (err) {
    return new Error(err);
  }
}

export async function createFood() {
  try {
    const data = await foodAPI.createFood();
    return data;
  } catch (err) {
    return new Error(err)
;  }
}
