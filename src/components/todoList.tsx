import React, { useEffect, useState } from "react";
import Todo from "./model";
import TodoCard from "./todoCard";
import { Droppable } from "react-beautiful-dnd";

interface TodosInterface {
  todos: Todo[];
  completedTodos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<TodosInterface> = ({
  todos,
  setTodos,
  completedTodos,
  setCompletedTodos,
}) => {
  const [txt, setTxt] = useState("0");
  useEffect(() => {
    setTimeout(() => {
      setTxt("1");
    }, 3000);
  }, []);

  return (
    <div className="flex w-[90%] m-auto my-5 flex-wrap justify-start gap-2 md:gap-5  ">
      <Droppable droppableId={`TodosList${txt}`}>
        {(provided) => (
          <div
            className="w-[100%] lg:w-[48.5%] bg-white p-5"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <h3 className="text-xl font-bold mb-3 text-red-500">
              Active Tasks
            </h3>

            {todos.map((todo, index) => (
              <TodoCard
                todo={todo}
                todos={todos}
                todosAlt={completedTodos}
                setTodos={setTodos}
                setTodosAlt={setCompletedTodos}
                key={todo.id}
                index={index}
                label="ACTIVE"
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>

      <Droppable droppableId={`TodosRemove${txt}`}>
        {(provided) => (
          <div
            className="w-[100%] lg:w-[48.5%]  bg-white p-5"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <h3 className="text-xl font-bold mb-3 text-green-600">
              Completed Tasks
            </h3>

            {completedTodos.map((todo, index) => (
              <TodoCard
                todo={todo}
                todos={completedTodos}
                todosAlt={todos}
                setTodosAlt={setTodos}
                setTodos={setCompletedTodos}
                key={todo.id}
                index={index}
                label="COMPLETED"
              />
            ))}

            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default TodoList;
