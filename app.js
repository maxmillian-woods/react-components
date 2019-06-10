// TODO
var App = () => (
    <div>
    <h2>My GroceryList</h2>
    <GroceryList items={['milk', 'bread']}/>
  </div>
);

// class GroceryList extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         return (
//             <div>
//             <ul>
//                 <li>{props.items[0]}</li>
//                 <li>{props.items[1]}</li>
//             </ul>
//         </div>
//         );
//     } 
// }

// class GroceryListItem extends React.Component {
//     constructor(props) {
//       super(props);
//     }
//     render() {
//       return (
//         <li>{this.props.items}</li>
//       );
  
//     }
//   }
  class GroceryListItem extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        done: false
      };
    }
    onListItemHover() {
      this.setState({
        done: !this.state.done
      });
    }
    onListItemOut() {
        this.setState({
          done: this.state.done
        });
      }
  
    render() {
      var style = {
        fontWeight: this.state.done ? 'bold' : 'none'
      };

      return (
        <li style={style} onMouseOver={this.onListItemHover.bind(this)} onMouseOut={this.onListItemOut.bind(this)}>{this.props.items}</li>
      );
    }
  }

  var GroceryList = (props) => (
    <ul>
      {props.items.map(item =>
        <GroceryListItem items={item} />
      )}
    </ul>
  );


  class TodoListItem extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        done: false
      };
    }
    onListItemClick() {
      this.setState({
        done: !this.state.done
      });
    }
  
    render() {
      var style = {
        textDecoration: this.state.done ? 'line-through' : 'none'
      };
      return (
        <li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.todo}</li>
      );
    }
  }

  var TodoList = (props) => (
    <ul>
      {props.todos.map(todo =>
        <TodoListItem todo={todo} />
      )}
    </ul>
  );

  ReactDOM.render(<App />, document.getElementById("app"));