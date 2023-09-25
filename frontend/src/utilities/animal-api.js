const BASE_URL = process.env.REACT_APP_BASE_URL;

export async function index() {
  const res = await fetch(`${BASE_URL}`, { method: "GET" });
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Invalid Request");
  }
}

export async function create(data) {
  const res = await fetch(`${BASE_URL}`, {
    method: "POST",
    body: JSON.stringify(data),
  });
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Invalid Request");
  }
}
