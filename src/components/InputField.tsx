import { Dispatch, FC, SetStateAction, useRef, FormEvent } from 'react';


type TodoProps = {
    todo: string, 
    setTodo: Dispatch<SetStateAction<string>>,
    handleAdd: (e: FormEvent) => void,
}

const InputField: FC<TodoProps> = ({ todo, setTodo, handleAdd }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form 
    className='input-form' 
    onSubmit={(e) => { 
        handleAdd(e);
        inputRef.current?.blur();
      }}
      >
        <input 
        ref={inputRef}
        type="text"
        value={todo}
        onChange={e => setTodo(e.target.value) } 
        placeholder='Enter a task...' 
        className='input-box'
        />
        <button type='submit' className='submit-btn'>Go</button>
    </form>
  )
}

export default InputField