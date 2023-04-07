import "./MealItem.css";
import MealItemForm from "./MealItemForm.jsx";

const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  return (
    <li className="meal">
      <h3 className="name">{props.name}</h3>
      <div className="description">{props.description}</div>
      <div className="price">{price}</div>
      <MealItemForm />
    </li>
  );
};

export default MealItem;
