# 🚀 Data Fetching with Axios in React

Fetching data is one of the most common tasks in web development. Instead of using the built-in `fetch`, we can use **Axios**, which is simpler, cleaner, and more powerful.  

---

## 📦 Installation
- First, install Axios in your React project:

```bash
npm install axios

```
## 📂 API File Setup
- Create a central place for your API calls, e.g. api.js:

```jsx
import axios from "axios";

// Fetch all places
export const getPlaces = async () => {
  try {
    const res = await axios.get("http://localhost:5000/api/places");
    return res.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to fetch Places");
  }
};
```


## 🎯 Using the API in Components
```jsx
import { useEffect, useState } from "react";
import { getPlaces } from "./api";

function PlaceListing() {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    getPlaces()
      .then((data) => setPlaces(data))
      .catch((err) => console.error(err.message));
  }, []);

  return (
    <div>
      <h2>🌍 Available Places</h2>
      <ul>
        {places.map((place) => (
          <li key={place._id}>{place.name}</li>
        ))}
      </ul>
    </div>
  );
}
export default PlaceListing;
```

## 💡 Why Axios?
- ✅ Automatic JSON parsing (no res.json() needed)
- ✅ Simpler syntax for GET, POST, PUT, DELETE
- ✅ Handles errors more cleanly
- ✅ Allows setting default base URL and headers


## ⚡ Bonus: Set a Base URL
- You can configure Axios once for cleaner code:

```jsx
// api.js
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const getPlaces = async () => {
  try {
    const res = await api.get("/places");
    return res.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to fetch Places");
  }
};
```
