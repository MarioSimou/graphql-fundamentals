import React from 'react'

const Register = () => {
  const [username,setUsername] = React.useState('')
  const [email,setEmail] = React.useState('')
  const [password,setPassword] = React.useState('')

  const onChangeEmail = e => setEmail(e.target.value)
  const onChangeUsername = e => setUsername(e.target.value)
  const onChangePassword = e => setPassword(e.target.value)

  return (
    <div id="register" style={styles.root}>
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
          <button style={styles.submitBtn}>Submit</button>
        </div>
      </form>
    </div>
  )
}

const styles = {
  root : {
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
  },
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

export default Register