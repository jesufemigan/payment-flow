interface InputProps {
  type: string;
  name: string
  required?: boolean;
  inputInfo?: string;
  value?: string | number;
}

const Input: React.FC<InputProps> = ({ type, name, required, inputInfo, value }) => {
  return (
    <div className="inputs">
      <span>
        <label htmlFor={name}>{name}</label>
        {required && <span>&#42;</span>}
      </span>
      {inputInfo && <small>{inputInfo}</small>}
      <input type={type} id={name} value={value}/>
    </div>
  )
}
export default Input