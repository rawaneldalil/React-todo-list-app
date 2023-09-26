import { Todo } from "../model";
import { Dispatch, SetStateAction } from "react";
import TodoCard from "./TodoCard";
import { Droppable } from "react-beautiful-dnd";

interface TodoListProps {
  todos: Todo[];
  completedTodos: Todo[];
  setTodos: Dispatch<SetStateAction<Todo[]>>;
  setCompletedTodos: Dispatch<SetStateAction<Todo[]>>;
}

const TodoList = ({
  todos,
  setTodos,
  completedTodos,
  setCompletedTodos,
}: TodoListProps) => {
  return (
    <>
      <div className="container">
        <Droppable droppableId="TodosList">
          {(provided) => (
            <div
              className="todos"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              <div className="tasks-heading">Active tasks</div>
              {todos?.map((todo, index) => (
                <TodoCard
                  index={index}
                  todo={todo}
                  key={todo.id}
                  todos={todos}
                  setTodos={setTodos}
                />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>

        <Droppable droppableId="TodoRemove">
          {(provided) => (
            <div
              className="todos remove"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              <div className="tasks-heading">Completed tasks</div>
              {completedTodos?.map((todo, index) => (
                <TodoCard
                  index={index}
                  todo={todo}
                  key={todo.id}
                  todos={completedTodos}
                  setTodos={setCompletedTodos}
                />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    </>
  );
};

export default TodoList;
