import "./MealItem.css";

const MealItem = (props) => {
  return (
    <li className="meal">
      <h3>{props.name}</h3>
      <div className="description">{props.description}</div>
      <div className="price">{props.price}</div>
    </li>
  );
};

export default MealItem;
