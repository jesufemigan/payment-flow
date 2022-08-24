import React, { useEffect, useState, useRef } from "react"
import ActionButtons from "../ActionButtons"
import Input from "../Input"
import Navigation from "../Navigation/Navigation";

import styles from './Profile.module.scss';

import data from '../../data/state-lga.json';


const Profile: React.FC = () => {
  const [states, setStates] = useState<string[]>([])
  const [local, setLocal] = useState<{ name: string, id: number }[]>(data[0].states.locals) 
  const stateRef = useRef<HTMLSelectElement>(null)
  const [selectedState, setSelectedState] = useState('Abia')
  
  const getState = async () => {
    const states = data.map(states => states.states.name.split(' ')[0])
    setStates(states)
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
      data.map(states => {
        if (stateRef.current != null) {
          if (states.states.name.split(' ')[0] === stateRef.current.value) {
            setLocal(states.states.locals)
          }
        }
        return states
      })
    }
    getLocal()
  }, [selectedState])

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
                <option value={each.name} key={each.id}>{each.name}</option>
              ))}
            </select>
          </div>
          <div className="state">
            <label htmlFor="state">State</label>
            <select name="state" id="state" ref={stateRef} onChange={handleState}>
              {states.map(state => (
                <option value={state} key={state}>{state}</option>
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
