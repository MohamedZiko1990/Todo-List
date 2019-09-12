import React from "react";
import ToDoItems from "./ToDoItems";

const ToDoList = ({ items }) => {
  const list = items.map(item => {
    return <ToDoItems item={item} />;
  });

  return <div>{list}</div>;
};

export default ToDoList;
