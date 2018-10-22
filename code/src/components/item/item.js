import React from "react"

class Item extends React.Component {
   handleChangeOnCheck = () => {
     this.props.whenChecked(this.props.index)
   }
    handleRemoveToDo = (e) => {
      e.preventDefault()
      this.props.removeToDo(this.props.index)
    }
    render() {
      return (
        <div className="item-div">
          <form>
            <label>
              <input
                type="checkbox"
                checked={this.props.done}
                onChange={this.handleChangeOnCheck} />
              {this.props.text}
              <button onClick={this.handleRemoveToDo}>Remove</button>
            </label>
          </form>
        </div>
      )
    }

}
export default Item
