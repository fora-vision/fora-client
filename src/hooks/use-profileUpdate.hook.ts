import React, { useState, useEffect, useMemo } from 'react'
import { IProfile } from '../interfaces/api/IProfile'
import { getUserInfo, updateProfile } from '../utils/API/user/api-user'
import { sessionStore } from '../store/sessionStore'
import { userStore } from '../store/profileStore'
import { setValidatedName, setValidatedNumber } from '../utils/validation-utils'

export const useProfileUpdate = (profile: IProfile) => {
  const splittedName = profile.name.split(' ')
  const [name, setName] = useState<string>(splittedName[0])
  const [lastName, setLastName] = useState<string>(splittedName[1])
  const [height, setHeight] = useState<number>(profile.height)
  const [weight, setWeight] = useState<number>(profile.weight)
  const [isUpdating, setIsUpdating] = useState(false)

  const states = useMemo(() => ({ name, lastName, height, weight }), [name, lastName, height, weight]);

  const handleSetName = (value: string) => setValidatedName(value, setName);
  const handleSetLastName = (value: string) => setValidatedName(value, setLastName);
  const handleSetHeight = (value: string) => setValidatedNumber(value, setHeight);
  const handleSetWeight = (value: string) => setValidatedNumber(value, setWeight);

  const setStates = { setName: handleSetName, setLastName: handleSetLastName, setHeight: handleSetHeight, setWeight: handleSetWeight }

  const [isChanged, setIsChanged] = useState(false)
  const [initialState] = useState(states)

  useEffect(() => {
    const hasChanged = (Object.keys(states) as (keyof typeof states)[]).some(key => {
      return states[key] !== initialState[key];
    });

    setIsChanged(hasChanged);
  }, [states, initialState]);


  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    const token = sessionStore.getSessionCode()
    const updatedData = {
      name: `${name} ${lastName}`,
      height: height,
      weight: weight
    }
    if (token) {
      setIsUpdating(true)
      await updateProfile(updatedData, token).catch(error => { console.log(error) })
      await getUserInfo(token).then((res) => {
        userStore.setUserProfile(res)
        window.location.reload()
      }).catch(error => {
        console.log(error)
      })
      setIsUpdating(false)
    }
  }

  return { handleSubmit, isUpdating, states, setStates, isChanged }
}
