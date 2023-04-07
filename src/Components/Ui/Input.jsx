import "./Input.css";

const Input = (props) => {
  return (
    <form className="input">
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} />
      <button>+ADD</button>
    </form>
  );
};

export default Input;
