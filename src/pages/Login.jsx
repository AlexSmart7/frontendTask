import {useState, useEffect } from 'react'
import { FaSignInAlt } from 'react-icons/fa'

const Login = () => {
  
  const [formData, setFormData] = useState({
    email:'',
    password: ''
})
  
const {email, password} = formData
  
const onChange =(e) => {
  setFormData((prevState) => ({
    ...prevState,
    [e.target.name]: e.target.value
  }))
}

const onSubmit = (e) => {
  e.preventDefault()
}

  return (
    <>
    <section className='heading'>
          <h4><FaSignInAlt /> Entrar a la App</h4>
          <p>Por favor ingresa tus credenciales</p>
    </section>
    <section className='form'>
          <form onSubmit={onSubmit}>
              <div className="form-group">
                <input 
                    type="email"
                    className='form-control'
                    id='email'
                    name='email'
                    value={email}
                    placeholder='Ingresa tu Email'
                    onChange={onChange} 
                />
              </div>
              <div className="form-group">
                <input 
                    type="password"
                    className='form-control'
                    id='password'
                    name='password'
                    value={password}
                    placeholder='Ingresa tu Password'
                    onChange={onChange} 
                />
              </div>
              <div className='form-group'>
                <button type='submit' className='btn btn-block'>
                    Accesar
                </button>
              </div>
          </form>
    </section>

  </>
  )
}

export default Login