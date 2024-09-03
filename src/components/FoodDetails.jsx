import { useEffect, useState } from "react";

function FoodDetails({ foodId }) {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "2c4561da9e594416bc40339c91bd54b8";

  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setFood(data);
      setIsLoading(false);
    }
    fetchFood();
  }, [foodId]);

  return (
    <div>
      <div>
        <h1>{food.title}</h1>
        <img src={food.image} alt="" />
        <div>
          <span><strong>{food.readyInMinutes} Minutes</strong></span>
          <span><strong>Serves {food.servings}</strong></span>
          <span>{food.vegeterian ? "Vegeterain" : "Non-vegeterian"}</span>
          <span>{food.vegan ? "Vegan" : ""}</span>
        </div>
        <div>
          {" "}
          $<span>{food.pricePerServing / 100} per serving</span>
        </div>
      </div>
      <div>
        <h2>Instructions</h2>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          food.analyzedInstructions[0].steps.map((step) => <li>{step.step}</li>)
        )}
      </div>
    </div>
  );
}

export default FoodDetails;
