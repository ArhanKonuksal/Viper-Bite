import "./FormStyles.css"

import React from 'react'

const Form = () => {
  return (
    <div className="form">
        <form>
            <label>İsim </label>
            <input type="text"></input>
            <label>Email</label>
            <input type="email"></input>
            <label>Konu</label>
            <input type="text"></input>
            <label>Mesajınız</label>
            <textarea rows="6" placeholder="Mesajınızı buraya yazınız"/>
            <button className="btn">GÖNDER</button>
        </form>
    </div>
  )
}

export default Form