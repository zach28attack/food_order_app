import "./MealItem.css";

const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  return (
    <li className="meal">
      <h3 className="name">{props.name}</h3>
      <div className="description">{props.description}</div>
      <div className="price">{price}</div>
    </li>
  );
};

export default MealItem;
