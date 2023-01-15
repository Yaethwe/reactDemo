import React from 'react';

class Item extends React.Component {
  render(){
    return (
      <li>
        {this.props.name},
        ${this.props.price}
      </li>
    );
  }
}

class AddForm extends React.Component {
  nameRef = React.createRef();
  priceRef = React.createRef();

  add = () => {
    let name = this.nameRef.current.value;
    let price = this.priceRef.current.value;

    this.props.add(name, price);
  }
  
  render(){
    return (
      <div>
        <input type="text" ref={this.nameRef} placeholder="name"></input>
        <input type="number" ref={this.priceRef} placeholder="price"></input>
        <button onClick={this.add}>Add</button>
      </div>
    )
  }
}

class App extends React.Component {
  state = {
    items: [
      {id: 1, name:"Apple", price:"0.99"},
      {id: 2, name:"Mango", price:"0.99"},      
      {id: 3, name:"Avocado", price:"0.99"},
      {id: 4, name:"Orange", price:"0.99"},

    ]
  };
  

  add = (name, price) => {
    let id = this.state.items.length + 1;

    this.setState({
      items: [
        ...this.state.items,
        { id, name, price }
      ]
    });
  }

  render(){
    return (
      <div>
        <h1>
          Hi Mom!
        </h1>
        <ul>
          {
            this.state.items.map(i => {
              return(
                <Item
                  key={i.id}
                  name={i.name}
                  price={i.price}
                />
              )
            })
          }
        </ul>
        <AddForm add={this.add}/>
      </div>
    )
  }

}

export default App;