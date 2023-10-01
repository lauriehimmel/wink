const BASE_URL = process.env.REACT_APP_BASE_URL;

export async function foodIndex() {
  const res = await fetch(`${BASE_URL}/food`, { method: "GET" });
  if (res.ok) {
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
  const res = await fetch(`${BASE_URL}/food/${id}`, {
    method: "GET",
  });
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
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Invalid Request");
  }
}


export async function destroyFood(id) {
  const res = await fetch(`${BASE_URL}/food/${id}`, {
    method: "DELETE",
  });
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Invalid Request");
  }
}

