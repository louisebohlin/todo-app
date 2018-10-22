import React from "react"
import Item from "./item/item.js"
import NewItem from "./new-item/new-item.js"

class App extends React.Component {
  constructor(props) {
    super(props)
    if (localStorage.getItem("userToDos")) {
      this.state = {
        items: JSON.parse(localStorage.getItem("userToDos"))
      }
    } else {
      this.state = {
        items: []
      }
    }
  }
   handleNewItem = (newText) => {
     const toDos = this.state.items
     toDos.push({
       id: Date.now(),
       done: false,
       text: newText
     })
     localStorage.setItem("userToDos", JSON.stringify(toDos))
     this.setState({
       items: toDos
     })
   }
   handleChecked = (index) => {
     const toDo = this.state.items
     toDo[index].done = !toDo[index].done
     localStorage.setItem("userToDos", JSON.stringify(toDo))
     this.setState({
       items: toDo
     })
   }
    handleRemove = (index) => {
      const toDo = this.state.items
      toDo.splice(index, 1)
      this.setState({
        items: toDo
      })
      localStorage.setItem("userToDos", JSON.stringify(toDo))
    }

    render() {
      return (
        <div>
          <h1>To do App</h1>
          <NewItem onSubmit={this.handleNewItem} />
          {this.state.items.map((item, index) => (
            <Item
              index={index}
              key={item.id}
              text={item.text}
              done={item.done}
              whenChecked={this.handleChecked}
              removeToDo={this.handleRemove} />
          ))}
        </div>
      )
    }
}

export default App
