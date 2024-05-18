import React, { useState } from "react";
import InputField from "./components/inputField";
import Todo from "./components/model";
import TodoList from "./components/todoList";
import { DragDropContext, DropResult } from "react-beautiful-dnd";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [completedtodos, setCompletedTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent<EventTarget>): void => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), isDone: false, todo }]);
      setTodo("");
    }
  };

  const onDragend = (result: DropResult) => {
    const { source, destination } = result;

    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    let item;
    const active = todos,
      complete = completedtodos;

    if (source.droppableId === "TodosList1") {
      item = active[source.index];
      active.splice(source.index, 1);
    } else {
      item = complete[source.index];
      complete.splice(source.index, 1);
    }

    if (destination.droppableId === "TodosList1") {
      active.splice(destination.index, 0, item);
    } else {
      complete.splice(destination.index, 0, item);
    }

    setCompletedTodos(complete);
    setTodos(active);
  };

  // const moveTaskOnDone = (item: number): void => {
  //   console.log(item);
  // };

  return (
    <>
      <div className="bg-blue-500 w-[100vw] h-[100vh]">
        <h1 className="text-4xl text-center py-3 mb-4 uppercase font-semibold z-10 ">
          Taskify App
        </h1>

        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />

        <DragDropContext onDragEnd={onDragend}>
          <TodoList
            todos={todos}
            setTodos={setTodos}
            completedTodos={completedtodos}
            setCompletedTodos={setCompletedTodos}
            // moveTaskOnDone={moveTaskOnDone}
          />
        </DragDropContext>
      </div>
    </>
  );
};

export default App;
