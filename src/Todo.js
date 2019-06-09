import React from "react";

// export class Todo extends React.Component {
//   render() {
//     return <div>{this.props.title}</div>;
//   }
// }

export const Todo = props => {
  return (
    <div>
      <label>
        <input
          onChange={props.handleCheck}
          type="checkbox"
          checked={props.checked}
        />
        {props.checked ? <s>{props.title}</s> : props.title}
      </label>
    </div>
  );
};
