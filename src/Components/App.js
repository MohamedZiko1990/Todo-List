import React from "react";
import TextBar from "./AddForm";
import ToDoList from "./ToDoList";

class App extends React.Component {
  state = { list: [] };

  onAdd = item => {
    this.setState(state => {
      const list = [...state.list, item];
      return {
        list
      };
    });
  };

  onDeleteAll = () => {
    this.setState({ list: [] });
  };
  render() {
    return (
      <div className="container">
        <h1>Todo-List</h1>
        <TextBar onSubmit={this.onAdd} onDelete={this.onDeleteAll} />
        <ToDoList items={this.state.list} />
      </div>
    );
  }
}

export default App;
