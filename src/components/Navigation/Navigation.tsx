import style from './Navigation.module.scss';
import { useLocation } from 'react-router-dom'
const Navigation:React.FC = () => {
  const location = useLocation()
  return (
    <div className={style.content}>
        <h1>Complete your Purchase</h1>
        <div className={style.routes}>
          <h2 className={location.pathname === '/' ? style.activeRoutes : ''}>Personal Info</h2>
          <h2 className={location.pathname === '/billing' ? style.activeRoutes : ''}>Billing Info</h2>
          <h2 className={location.pathname === '/payment-confirmation' ? style.activeRoutes : ''}>Confirm Payment</h2>
        </div>
      </div>
  )
}
export default Navigation