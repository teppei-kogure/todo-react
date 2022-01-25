import React from "react";

const style = {
  backgroundColor: "#ffffe0",
  width: "400px",
  minHeight: "200px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px"
};

export const CompleteTodos = (props) => {
  const { todos, onClickReturn } = props;
  return (
    <>
      <div style={style}>
        <p className="title">完了したTODO</p>
        <ul>
          {todos.map((todo, index) => {
            return (
              <li key={todo}>
                <div className="list-row">
                  <p className="todo">{todo}</p>
                  <button onClick={() => onClickReturn(index)}>戻す</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
