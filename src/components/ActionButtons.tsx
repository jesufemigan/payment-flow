import Button, { ButtonProps } from "./Button"
import { Link } from 'react-router-dom'

const ActionButtons: React.FC<ButtonProps> = ({text, linkTo}) => {
  return (
    <div className="actionBtn">
      <Button text={text} linkTo={linkTo}/>
      <Link to='/'>
        <button className="secondaryBtn">
          Cancel Payment</button>
      </Link>
    </div>
  )
}
export default ActionButtons