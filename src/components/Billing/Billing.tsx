import ActionButtons from "../ActionButtons";
import Input from "../Input"
import Navigation from "../Navigation/Navigation";
import style from './Billing.module.scss';

const Billing:React.FC = () => {
  return (
    <>
      <Navigation />
      <form className="formContainer">
        <Input 
          type="text"
          name="Name on Card"
          required
        />
        <Input 
          type="text"
          name="Card Type"
          required
        />
        <div className={style.cardNumber}>
          <Input 
            type="text"
            name="Card details"
            required
          />
          <Input 
            type="text"
            name="Expiry date"
            required
          />
          <Input 
            type="text"
            name="CVV"
            required
          />
        </div>
        <ActionButtons text="Next" linkTo="payment-confirmation"/>
      </form>
    </>
  )
}
export default Billing