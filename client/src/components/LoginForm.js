import React from 'react'
import { styles } from './RegisterForm'
import { useMutation } from '@apollo/react-hooks'
import { LOGIN_USER } from '../graphql/mutations'
import history from '../utils/history'

const LogiForm = ({setIsSigned}) => {
  const [email,setEmail] = React.useState('')
  const [password,setPassword] = React.useState('')
  const [submitForm] = useMutation(LOGIN_USER, {fetchPolicy: 'no-cache'})

  const onSubmitForm = e => {
    e.preventDefault()
    if(password && email){
      submitForm({ variables: { data: { email, password }}})
      .then(({data}) => {
          if(data.loginUser.success){
            const { token, user } = data.loginUser
            sessionStorage.setItem('user', JSON.stringify(user))
            sessionStorage.setItem('token', token )
            setIsSigned(true)
            history.push('/')
          } else window.alert(data.loginUser.message)
      })
      .catch(e => window.alert(e))
    }else {
      window.alert('Fill the password and email fields')
    }
  }
  const onChangeEmail = e => setEmail(e.target.value)
  const onChangePassword = e => setPassword(e.target.value)

  return (
      <form style={styles.form}>
        <div style={styles.formGroup}>
          <input type="email" 
                 id="email"
                 name="email"
                 value={email}
                 onChange={onChangeEmail}
                 placeholder="Your email..."
                 style={styles.field}
                 required
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
                 required
          />
        </div>
        <div style={styles.formGroup}>
          <button style={styles.submitBtn} onClick={onSubmitForm}>Submit</button>
        </div>
      </form>
  )
}


export default LogiForm