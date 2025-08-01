// src/components/IngredientList/IngredientList.jsx


const IngredientList = ({ ingredients, addToBurger }) => {
  console.log("ingredients:", ingredients);
  console.log("type of ingredients:", typeof ingredients);
  console.log("is array?", Array.isArray(ingredients));

  return (
    <ul>
      {ingredients.map((ingredient, index) => (
        <li
          key={index}
          style={{
            backgroundColor: ingredient.color,
            margin: "0.5rem",
            padding: "0.5rem",
            listStyle: "none",
          }}
        >
          {ingredient.name}
          <button onClick={() => addToBurger(ingredient)}>+</button>
        </li>
      ))}
    </ul>
  );
};

export default IngredientList;
