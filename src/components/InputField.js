import "./InputField.css";

function InputField({ label, type, name, value, onChange }) {
  return (
    <label className="input-group">
      {label}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required
      />
    </label>
  );
}

export default InputField;