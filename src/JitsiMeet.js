import React, { useState } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'

import { Jutsu } from 'react-jutsu'

export const JitsiCalling = ({ roomId, name, password }) => {
  //   const { id } = useParams()
  return (
    <Jutsu
      domain='13.250.211.215'
      roomName={roomId}
      displayName={name}
      password={password}
      loadingComponent={<p>loading ...</p>}
    />
  )
}

export const JitsiMeet = () => {
  const history = useHistory()
  const [room, setRoom] = useState('')
  const [name, setName] = useState('')
  const [call, setCall] = useState(false)
  const [password, setPassword] = useState('')

  const handleClick = (event) => {
    event.preventDefault()
    setCall(true)
  }
  return (
    <>
      <form>
        <input
          id='name'
          type='text'
          placeholder='custom link'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={handleClick} type='submit'>
          Start / Join
        </button>
      </form>
      {call && <p>https://13.250.211.215/{name}</p>}
    </>
  )
}
