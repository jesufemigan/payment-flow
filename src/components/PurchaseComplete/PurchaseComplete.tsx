import style from './PurchaseComplete.module.scss';
import { Link } from 'react-router-dom'

const PurchaseComplete: React.FC = () => {
  return (
    <div className={style.container}>
      <div className={style.imgContainer}></div>
      <h1>Purchase Completed</h1>
      
      <p>Please check your email for details concerning this transaction</p>

      <Link to='/'>
        Return Home
      </Link>
    </div>
  )
}
export default PurchaseComplete