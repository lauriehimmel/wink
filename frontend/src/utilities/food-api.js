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
    console.log(res);
    return res.json();
  } else {
    throw new Error("Invalid Request");
  }
}
