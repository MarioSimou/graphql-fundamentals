import React from 'react'
import { ApolloProvider }  from '@apollo/react-hooks'
import { client } from '../utils/client'
import { Route, Router, Switch } from 'react-router-dom'
import Home from './Home'
import Navbar from './Navbar'
import CreateLink from './CreateLink'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'
import history from '../utils/history'

const styles = {
  root : {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  submitBtn:{
    width: '100%',
    padding: '0.5rem 0',
    backgroundColor: 'teal',
    border: 'none',
    color:'#fff',
    borderRadius: '2rem',
  } 
}

const Login = ({ setIsSigned }) => {
  const [register, setRegister] = React.useState(false)
  const onClickAccount = () => setRegister(!register)
  return (
    <div style={styles.root}>
      <div>
        { register && <RegisterForm setIsSigned={setIsSigned} />}
        { !register && <LoginForm setIsSigned={setIsSigned} />}
        <button style={styles.submitBtn} onClick={onClickAccount}>need to create an account?</button>
      </div>
    </div>    
  )
}

const App = () => {
  const [isSigned, setIsSigned] = React.useState(!!sessionStorage.getItem('token'))
  return (
      <ApolloProvider client={client}>
        <Router history={history}>
          <Navbar isSigned={isSigned} setIsSigned={setIsSigned} />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/link/new" exact component={CreateLink} />
            <Route path="/login" exact component={()=><Login setIsSigned={setIsSigned}/>} />
          </Switch>
        </Router>
      </ApolloProvider>    
  )
}

export default App