import styled from 'styled-components'
import { BiTrash } from "react-icons/bi";
import { FaCheck } from "react-icons/fa";

const Todo = ({ todo, handleCheck, handleDelete }) => {
  return (
    <TodoWrapper className={todo.done && 'done'} key={todo.id}>
      <h3>{todo.text}</h3>
      <div className="line"></div>
      <FaCheck onClick={() => handleCheck(todo.id)} color={'green'} />
      <BiTrash onClick={() => handleDelete(todo.id)} color={'crimson'} />
    </TodoWrapper>
  );
};

const TodoWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: .5rem;
  gap: 1rem;

  h3{
    transition: all .3s ease;
  }
  &.done{
    h3{
      opacity: .3;
    }
    .line{
      background-color: #555;
    }
  }
  .line{
    flex-grow: 1;
    height: 1px;
    background-color: #ccc;
    transition: all .3s ease;
    min-width: 2rem;
  }
  svg{
    cursor: pointer;
    font-size: 1.2rem;
  }
`

export default Todo;
