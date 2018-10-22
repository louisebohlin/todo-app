import React from "react"

class NewItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      newItem: ""
    }
  }
    handleChange = (event) => {
      this.setState({
        newItem: event.target.value
      })
    }
    handleSubmit = (event) => {
      event.preventDefault()
      this.props.onSubmit(this.state.newItem)
    }
    render() {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="Enter task"
              value={this.state.newItem}
              onChange={this.handleChange} />
            <button>Add</button>
          </form>
        </div>
      )
    }
}
export default NewItem
