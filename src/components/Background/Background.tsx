import arrowDown from '../../assets/arrow-down.svg';
import style from './Background.module.scss';


interface BackgroundProps {
  children: React.ReactNode
}
const Background: React.FC<BackgroundProps> = ({ children }) => {
  return (
    <>
      <div className={style.container}>
        <img src={arrowDown} alt="arrow-down" />
      </div>
      <div className={style.content}>
        {children}
      </div>
    </>
  )
}
export default Background