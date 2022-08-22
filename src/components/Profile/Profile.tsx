import React, { useEffect, useState, useRef } from "react"
import ActionButtons from "../ActionButtons"
import Input from "../Input"
import Navigation from "../Navigation/Navigation";

import styles from './Profile.module.scss';


interface State {
  name: string
  capital: string
}


const Profile: React.FC = () => {
  const [states, setStates] = useState<State[]>([])
  const [local, setLocal] = useState<string[]>([]) 
  const stateRef = useRef(null)
  const [selectedState, setSelectedState] = useState('Abia')
  
  // http://locationsng-api.herokuapp.com/api/v1/states/lagos/lgas

  
  const getState = async () => {
    const res = await fetch('http://locationsng-api.herokuapp.com/api/v1/states')
    const data = await res.json()
    setStates(data)
  }

  const handleState = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const state = e.target.value
    setSelectedState(state)
  }

  
  
  useEffect(() => {
    getState()
  }, [])

  
  useEffect(() => {
    const getLocal = async () => {
      const res = await fetch(`http://locationsng-api.herokuapp.com/api/v1/states/${selectedState}/lgas`)
      const data = await res.json()
      setLocal(await data)
    }
    getLocal()
    console.log(selectedState)
  }, [selectedState])

  // useEffect(() => {
  //   if (stateRef.current != null) {
  //     getLocal(stateRef.current.value)
  //   }
  // }, [])

  
  return (
    <>
      <Navigation />
      <form className="formContainer">
        <Input 
          type="text" 
          name="Name"
        />
        <Input 
          type="email"
          name="Email Address"
          inputInfo="The purchase receipt would be sent to this address"
          required
        />
        <Input 
          type="text"
          name="Address 1"
        />
        <Input 
          type="text"
          name="Address 2"
        />
        <div className={styles.location}>
          <div className="local">
            <label htmlFor="Local Government">Local Government</label>
            <select name="Local Government" id="Local Government">
              {local?.map(each =>(
                <option value={each} key={each}>{each}</option>
              ))}
            </select>
          </div>
          <div className="state">
            <label htmlFor="state">State</label>
            <select name="state" id="state" ref={stateRef} onChange={handleState}>
              {states.map(state => (
                <option value={state.name} key={state.name}>{state.name}</option>
              ))}
            </select>
          </div>
        </div>
        <ActionButtons text="Next" linkTo="billing"/>
      </form>
    </>
  )
}
export default Profile
