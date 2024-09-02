import { useEffect, useState } from "react";

function FoodDetails({ foodId }) {
  const [food, setFood] = useState({});

  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "2c4561da9e594416bc40339c91bd54b8";

  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setFood(data);
    }
    fetchFood();
  }, [foodId]);

  return (
    <div>
      FoodDetails {foodId}
      {food.title}
      <img src={food.image} alt="" />
    </div>
  );
}

export default FoodDetails;
