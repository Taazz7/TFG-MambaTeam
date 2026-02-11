const API_URL = import.meta.env.VITE_API_URL;

export async function getRestaurants() {
  const res = await fetch(`${API_URL}/api/Restaurant`, {
    method: "GET",
  });

  if (!res.ok) {
    throw new Error(`Error ${res.status}`);
  }

  return res.json();
}
