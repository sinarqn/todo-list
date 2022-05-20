import { useEffect, useState } from 'react'
import styled from 'styled-components'

const AddTodo = ({ handleSubmit }) => {
  const [input, setInput] = useState('')
  const [focus, setFocus] = useState(false)

  useEffect(() => {
    document.querySelector('textarea').focus()
  }, [])

  const onSubmit = (e) => {
    e.preventDefault()
    handleSubmit(input)
    setInput('')
    e.target.querySelector('textarea').focus()
  }

  return (
    <Form 
    className={focus && 'focused'} 
    onSubmit={onSubmit}>
      <textarea 
      value={input}
      onChange={e => setInput(e.target.value)}
      rows="2"
      placeholder='Add new todo...'
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      ></textarea>
      <button>Add</button>
    </Form>
  )
}

const Form = styled.form`
  border: 2px solid var(--bg-clr);
  border-radius: 5px;
  padding: .5rem;
  display: flex;
  flex-direction: column;
  gap: .5rem;
  transition: all .3s ease;

  &.focused{
    border-color: var(--txt-clr);
  }
  textarea{
    width: 100%;
    resize: none;
    background-color: transparent;
    border: none;
    outline: none;
    color: #ccc;
  }
  button{
    background-color: var(--bg-clr);
    color: var(--txt-clr);
    font-weight: bold;
    padding: .5rem;
    border-radius: 5px;
    text-transform: uppercase;
    letter-spacing: 1px;
    border: none;
    cursor: pointer;
    transition: all .3s ease;
    
    :hover{
      opacity: .8;
    }
}
`

export default AddTodo