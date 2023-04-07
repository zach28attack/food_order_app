import "./MealItemForm.css";
import Input from "../Ui/Input.jsx";

const MealItemForm = (props) => {
  return (
    <div className="form">
      <Input
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
    </div>
  );
};

export default MealItemForm;
