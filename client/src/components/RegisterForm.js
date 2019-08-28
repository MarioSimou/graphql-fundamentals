import React from 'react'
import { useMutation } from '@apollo/react-hooks'
import { CREATE_USER } from '../graphql/mutations'
import history from '../utils/history'

const RegisterForm = ({setIsSigned}) => {
  const [username,setUsername] = React.useState('')
  const [email,setEmail] = React.useState('')
  const [password,setPassword] = React.useState('')
  const [submitForm] = useMutation( CREATE_USER, {fetchPolicy: 'no-cache'}) 

  const onSubmitForm = e => {
    e.preventDefault()
    if( username && email && password ){
      submitForm({ variables: { data: { username, email, password }}})
      .then(({data})=> {
        if(data.createUser.success){
          const { user, token } = data.createUser
          sessionStorage.setItem('token', token )
          sessionStorage.setItem('user', JSON.stringify(user))
          setIsSigned(true)
          history.push('/')
        } else window.alert(data.createUser.message)
      })  
      .catch(e => window.alert(e))
    }else {
      window.alert('Fill all the fields to continue')
    }
  }
  const onChangeEmail = e => setEmail(e.target.value)
  const onChangeUsername = e => setUsername(e.target.value)
  const onChangePassword = e => setPassword(e.target.value)

  return (
      <form autoComplete="off" style={styles.form}>
        <div style={styles.formGroup}>
          <input type="text" 
                 id="username"
                 name="username"
                 value={username}
                 onChange={onChangeUsername}
                 placeholder="Your username..."
                 style={styles.field}
                 autoFocus
          />
        </div>
        <div style={styles.formGroup}>
          <input type="email" 
                 id="email"
                 name="email"
                 value={email}
                 onChange={onChangeEmail}
                 placeholder="Your email..."
                 style={styles.field}
          />
        </div>
        <div style={styles.formGroup}>
          <input type="password"
                 id="password"
                 name="password"
                 value={password}
                 onChange={onChangePassword}
                 placeholder="Your password..."
                 style={styles.field}
                 pattern=".{8,}"
          />
        </div>
        <div style={styles.formGroup}>
          <button style={styles.submitBtn} onClick={onSubmitForm}>Submit</button>
        </div>
      </form>
  )
}

export const styles = {
  form: {
    minWidth: '500px',
  },
  formGroup: {
    display:'flex',
    padding: '0.75rem',
    width: '100%',
  },
  field: {
    width: '100%',
    outline: 'none',
    border:'none',
    borderBottom: `1px solid teal`,
    padding: `0.5rem 0`,
  },
  submitBtn: {
    width: '100%',
    padding: '0.5rem 0',
    backgroundColor: 'teal',
    border: 'none',
    color:'#fff',
    borderRadius: '2rem',
  }
}

export default RegisterForm