import React from "react";
import "./items.css";

const Items = ({ data, datas, setdatas }) => {
  const handleDelete = (data) => {
    setdatas(datas.filter((item) => item !== data));
  };

  const handleComplete = (data) => {
    setdatas(
      datas.map((item) =>
        item === data ? { ...item, done: !item.done } : item
      )
    );
  };

  let completeText = data.done ? "completed" : "";

  return (
    <>
      <li>
        <div
          className={completeText}
          onClick={() => handleComplete(data)}
        >
          {data.name}
        </div>
        <button className="btn2" onClick={() => handleDelete(data)}>
          X
        </button>
      </li>
    </>
  );
};

export default Items;
