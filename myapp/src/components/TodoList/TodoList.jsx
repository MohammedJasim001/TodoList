import React, { useState } from "react";

const TodoList = () => {
  const [inputTodo, setInputTodo] = useState("");
  const [addTodo, SetAddTodo] = useState([]);
  const [deletd, setDeleted] = useState([]);

  function handleinputChange(eve) {
    setInputTodo(eve.target.value);
  }
  function handleAdd() {
    if (inputTodo.trim() !== "") {
      SetAddTodo([...addTodo, inputTodo]);
      setInputTodo("");
    }
  }


  function handleDelet(index) {
    let updated = addTodo.filter((e, i) => i !== index);
    SetAddTodo([...updated]);
    const delet = addTodo.filter((e, i) => i === index);
    setDeleted([...deletd, delet]);
  }
  return (
    <div className="h-[100vh] mt-10">
        <div className="flex items-center justify-center">
            <input
                type="text"
                className="border bg-red-50 p-2"
                value={inputTodo}
                onChange={handleinputChange}
            />
            <button className="bg-red-700 p-2" onClick={handleAdd}>
                ADD
            </button>
        </div>
        <div className="flex flex-col w-[500px] m-auto ">
            {addTodo.map((e, inx) => {
          return (
            <div key={inx} className=" flex w-[100%] ">
              <div className="p-2 bg-red-500 mt-2 w-[100%]">{e}</div>
              <button
                className="w-[100px] mt-2 h-10 bg-red-900 text-white"
                onClick={() => handleDelet(inx)}
              >
                DELET
              </button>
            </div>
          );
        })}
      </div>
   
    </div>
  );
};

export default TodoList;
