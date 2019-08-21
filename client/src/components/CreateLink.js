import React from 'react'
import { useMutation } from '@apollo/react-hooks'
import { CREATE_LINK_MUTATION } from '../graphql/mutations'
import history from '../utils/history'

const CreateLink = () => {
  const [ description, setDescription ] = React.useState('')
  const [ url, setUrl ] = React.useState('')
  const [submitForm, {data}] = useMutation( CREATE_LINK_MUTATION, { fetchPolicy: 'no-cache'}) // only supported policy for mutations
  const onChangeDesc = e => setDescription(e.target.value)
  const onChangeUrl = e => setUrl(e.target.value)
  const onClickSubmit = e => {
    e.preventDefault()
    submitForm({ variables: { data: { description, url } }})
    .then(({data})=> {
      if(data && data.createLink && data.createLink.id ) history.push('/')
    })
  }

  // if(data && data.createLink && data.createLink.id ) history.push('/')
  
  return (
    <div id="create-link">
      <form autoComplete="off">
        <div>
          <label htmlFor="desc">Description:</label>
          <input type="text" id="desc" name="desc" onChange={onChangeDesc} value={description} />
        </div>
        <div>
          <label htmlFor="url">Url:</label>
          <input type="text" id="url" name="url" onChange={onChangeUrl} value={url} />
        </div>
        <div>
          <input type="submit" value="Submit" onClick={onClickSubmit} />
        </div>
      </form>
    </div>
  )
}

export default CreateLink