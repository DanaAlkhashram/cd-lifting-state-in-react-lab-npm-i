// src/components/BurgerStack/BurgerStack.jsx

const BurgerStack = ({ stack, removeFromBurger }) => {
  return (
    <ul>
      {stack.map((ingredient, index) => (
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
          <button onClick={() => removeFromBurger(index)}>X</button>
        </li>
      ))}
    </ul>
  );
};

export default BurgerStack;
