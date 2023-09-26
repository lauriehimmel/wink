const BASE_URL = process.env.REACT_APP_BASE_URL;

export async function foodIndex() {
  const res = await fetch(`${BASE_URL}/food`, { method: "GET" });
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Invalid Request");
  }
}