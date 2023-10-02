const BASE_URL = process.env.REACT_APP_BASE_URL;

export async function index() {
  const res = await fetch(`${BASE_URL}/animals`, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers":
        "Origin, X-Requested-With, Content-Type, Accept",
      "Access-Control-Allow-Credentials": true,
      "Access-Control-Allow-Methods": "POST, PUT, PATCH, GET, DELETE",
    },
  });
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Invalid Request");
  }
}

export async function create(data) {
  const res = await fetch(`${BASE_URL}/animals`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers":
        "Origin, X-Requested-With, Content-Type, Accept",
      "Access-Control-Allow-Credentials": true,
      "Access-Control-Allow-Methods": "POST, PUT, PATCH, GET, DELETE",
    },
    body: JSON.stringify(data),
  });
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Invalid Request");
  }
}

export async function destroy(id) {
  const res = await fetch(`${BASE_URL}/animals/${id}`, {
    method: "DELETE",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers":
        "Origin, X-Requested-With, Content-Type, Accept",
      "Access-Control-Allow-Credentials": true,
      "Access-Control-Allow-Methods": "POST, PUT, PATCH, GET, DELETE",
    },
    body: JSON.stringify(id),
  });
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Invalid Request");
  }
}

export async function show(id) {
  const res = await fetch(`${BASE_URL}/animals/${id}`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers":
        "Origin, X-Requested-With, Content-Type, Accept",
      "Access-Control-Allow-Credentials": true,
      "Access-Control-Allow-Methods": "POST, PUT, PATCH, GET, DELETE",
    },
    body: JSON.stringify(id),
  });
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Invalid Request");
  }
}

export async function update(id, formData) {
  const res = await fetch(`${BASE_URL}/animals/${id}`, {
    method: "PUT",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers":
        "Origin, X-Requested-With, Content-Type, Accept",
      "Access-Control-Allow-Credentials": true,
      "Access-Control-Allow-Methods": "POST, PUT, PATCH, GET, DELETE",
    },
    body: JSON.stringify(formData),
  });
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Invalid Request");
  }
}
