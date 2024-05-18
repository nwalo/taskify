import React, { useEffect, useRef, useState } from "react";
import Todo from "./model";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { capitalize, trim } from "lodash";
import { Draggable } from "react-beautiful-dnd";
import { BiReset } from "react-icons/bi";

interface TodosInterface {
  todo: Todo;
  todos: Todo[];
  todosAlt: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  setTodosAlt: React.Dispatch<React.SetStateAction<Todo[]>>;
  index: number;
  label: string;
}

const TodoCard: React.FC<TodosInterface> = ({
  todo,
  todos,
  todosAlt,
  setTodos,
  setTodosAlt,
  index,
  label,
}) => {
  const [isEdit, setEdit] = useState<boolean>(false);
  const [val, setVal] = useState<string>(todo?.todo);
  const handleDelete = (id: number) => {
    const todosCopy = todos.filter((e) => e.id !== id);

    setTodos(todosCopy);
  };

  const handleDone = (id: number) => {
    const todosCopy = todos.map((e) =>
      e.id === id ? { ...e, isDone: !e?.isDone } : e
    );

    setTodos(todosCopy);

    const filter = todosCopy.filter((e) => e.id !== id);
    const find = todosCopy.find((e) => e.id === id);

    if (find) {
      const concat = [find, ...todosAlt];

      setTimeout(() => {
        setTodos(filter);
        setTodosAlt(concat);
      }, 500);
    }
  };

  const handleEdit = (id: number) => {
    const todosCopy = todos.map((e) => (e.id === id ? { ...e, todo: val } : e));
    setEdit(!isEdit);

    setTodos(todosCopy);
  };

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isEdit) {
      inputRef.current?.focus();
    }
  }, [isEdit]);

  return (
    <Draggable draggableId={todo.id.toString()} index={index}>
      {(provided) => (
        <div
          className=" w-[100%]"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleEdit(todo?.id);
            }}
            className="flex justify-between w-[100%] rounded p-2 mt-3 bg-cover bg-center items-center transition-all duration-2000
       bg-[url('https://shorturl.at/13Bmc')] 
       hover:shadow-xl hover:scale-[1.01]"
          >
            {isEdit ? (
              <input
                ref={inputRef}
                className="w-[80%]"
                value={val}
                onChange={(e) => setVal(e.target.value)}
                onBlur={() => handleEdit(todo?.id)}
              />
            ) : (
              <span
                className={`max-w-[80%] p-1 overflow-scroll border-none text-md text-green-500 focus:outline-none ${
                  label === "COMPLETED" ? "line-through" : ""
                }`}
              >
                <span className="text-black">
                  {todo?.todo
                    .split(". ")
                    .map((sentence) => capitalize(trim(sentence.toLowerCase())))
                    .join(". ")}
                </span>
              </span>
            )}

            <div className="flex gap-1">
              {label === "ACTIVE" ? (
                <span
                  className="ml-2 text-xl cursor-pointer "
                  onClick={() => {
                    if (!isEdit) {
                      setEdit(!isEdit);
                    }
                  }}
                >
                  <AiFillEdit />
                </span>
              ) : (
                <span
                  className="ml-2 text-xl cursor-pointer "
                  onClick={() => handleDelete(todo?.id)}
                >
                  <AiFillDelete />
                </span>
              )}

              <span
                className="ml-2 text-xl cursor-pointer "
                onClick={() => handleDone(todo?.id)}
              >
                {label === "ACTIVE" ? <MdDone /> : <BiReset />}
              </span>
            </div>
          </form>
        </div>
      )}
    </Draggable>
  );
};

export default TodoCard;
