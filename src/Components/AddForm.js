import React from "react";

class AddForm extends React.Component {
  state = { NewItem: "" };

  onInputChange = event => {
    this.setState({ NewItem: event.target.value });
  };

  onButtonClick = event => {
    event.preventDefault();
    const item = this.state.NewItem;
    this.props.onSubmit(item);
    this.setState({ NewItem: "" });
  };

  onDeleteClick = event => {
    event.preventDefault();
    this.props.onDelete();
  };

  render() {
    return (
      <div>
        <form>
          <div className="form-row align-items-center">
            <div className="col-auto">
              <input
                type="text"
                value={this.state.NewItem}
                placeholder="Enter new item..."
                onChange={this.onInputChange}
              />
              <button
                className="btn btn-success"
                onClick={this.onButtonClick}
                type="submit"
              >
                Add
              </button>
              <button className="btn btn-danger" onClick={this.onDeleteClick}>
                Clear All
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default AddForm;
