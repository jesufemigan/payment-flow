import { useNavigate } from 'react-router-dom'
export interface ButtonProps {
  text: string
  linkTo: string
}


const Button:React.FC<ButtonProps> = ({text, linkTo}) => {
  const navigate = useNavigate()

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    navigate(`/${linkTo}`)
  }
  return (
      <button className='primaryBtn' onClick={(e) => handleButtonClick(e)}>{text}</button>
  )
}
export default Button