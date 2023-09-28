const BASE_URL = process.env.REACT_APP_BASE_URL;

export async function foodIndex() {
  const res = await fetch(`${BASE_URL}/food`, { method: "GET" });
  if (res.ok) {
    console.log(res);
    return res.json();
  } else {
    throw new Error("Invalid Request");
  }
}

export async function createFood(data) {
  const res = await fetch(`${BASE_URL}/food`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Invalid Request");
  }
}

export async function showFood(id) {
  const res = await fetch(`${BASE_URL}/food/${id}`, {method: "GET"});
  console.log('res', res)
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Invalid Request");
  }
}

export async function updateFood(id, formData) {
  const res = await fetch(`${BASE_URL}/food/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
  console.log(res);
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Invalid Request");
  }
}