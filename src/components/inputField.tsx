import React, { useRef } from "react";

interface InputInterface {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<InputInterface> = ({ todo, setTodo, handleAdd }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form
      className="flex w-[90%] m-auto  relative items-center"
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
      }}
    >
      <input
        ref={inputRef}
        placeholder="Enter a task ..."
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        className="w-[100%] rounded-[50px] px-6 py-4 pr-[60px] text-xl border-none transition-all duration-2000 shadow-inset-0
         shadow-inset-black focus:outline-none"
        onFocus={(e) =>
          (e.currentTarget.style.boxShadow = "0 0 10px 1000px rgba(0,0,0,0.5)")
        }
        onBlur={(e) => (e.currentTarget.style.boxShadow = "none")}
      />
      <button
        className="absolute w-[40px] h-[40px] m-4 rounded-3xl right-[-5px] border-none text-md font-semibold bg-blue-500 
        shadow-all text-white transition-all duration-2000 hover:bg-blue-400 active:shadow-sm active:scale-[0.8]
       shadow-black"
        type="submit"
      >
        Go
      </button>
    </form>
  );
};

export default InputField;
