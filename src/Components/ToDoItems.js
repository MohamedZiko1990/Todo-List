import "../ToDoItems.css";
import React from "react";

class ToDoItems extends React.Component {
  state = { checked: false };

  onChecked = () => {
    this.setState({ checked: !this.state.checked });
  };

  render() {
    if (!this.props.item) {
      return <div></div>;
    } else {
      return (
        <div className={this.state.checked ? "yes" : "no"}>
          <input type="checkbox" onClick={this.onChecked} /> {this.props.item}
        </div>
      );
    }
  }
}

export default ToDoItems;
