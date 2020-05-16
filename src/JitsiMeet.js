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
    if (room && name) setCall(true)
  }

  return call ? (
    <JitsiCalling name={name} password={password} roomId={room} />
  ) : (
    <form>
      <input
        id='room'
        type='text'
        placeholder='Room'
        value={room}
        onChange={(e) => setRoom(e.target.value)}
      />
      <input
        id='name'
        type='text'
        placeholder='Name'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        id='password'
        type='text'
        placeholder='Password (optional)'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleClick} type='submit'>
        Start / Join
      </button>
    </form>
  )
}
