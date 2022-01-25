import React from "react";

const style = {
  backgroundColor: "#c6ffe2",
  width: "400px",
  minHeight: "200px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px"
};

export const IncompleteTodos = (props) => {
  const { todos, onClickComplete, onClickDelete } = props;
  return (
    <>
      <div style={style}>
        <p className="title">未完了のTODO</p>
        <ul>
          {todos.map((todo, index) => {
            return (
              <li key={todo}>
                <div className="list-row">
                  {/*  Reactでループ処理をする場合、仮想DOMの目標としてkeyを設定する必要がある*/}
                  <p className="todo">{todo}</p>
                  <button onClick={() => onClickComplete(index)}>完了</button>
                  {/*関数に引数を渡したいときはアロー関数する必要がある。そうしないと、すぐに実行されてしまう*/}
                  <button onClick={() => onClickDelete(index)}>削除</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
