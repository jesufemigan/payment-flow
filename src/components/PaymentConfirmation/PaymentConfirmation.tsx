import ActionButtons from "../ActionButtons"
import Navigation from "../Navigation/Navigation";

import style from './PaymentConfirmation.module.scss';

const PaymentConfirmation:React.FC = () => {
  
  return (
    <>
      <Navigation />
      <div className={style.payment}>
        <div className={style.header}>
          <p>Item Name</p>
          <p>&#8358; Price</p>
        </div>
        <div className={style.table}>
          <div className={style.tableRow}>
            <p>
              Data science and usability
            </p>
            <p>
              50,000.00
            </p>
          </div>

          <div className={style.tableRow}>
            <p>
              Shipping
            </p>

            <p className={style.null}>
              0.00
            </p>
          </div>
          <div className={style.line}></div>
          <div className={`${style.tableRow} ${style.total}`}>
            <p>
              Total
            </p>

            <p>
              50,000.00
            </p>
          </div>
        </div>
      </div>
      <ActionButtons text="Pay" linkTo="payment-complete"/>
    </>
  )
}
export default PaymentConfirmation