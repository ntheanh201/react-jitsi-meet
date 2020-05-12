import React, { useState } from 'react'
import axios from 'axios'

const App = () => {
  const [value, setValue] = useState(null)
  const onSubmit = () => {
    console.log('foo')
    return axios
      .post(`https://alpha.jitsi.net/http-pre-bind?room=${value}`)
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  return (
    <>
      <input type='text' onChange={(event) => setValue(event.target.value)} />
      <button onClick={onSubmit}>Generate</button>
    </>
  )
}

export default App
