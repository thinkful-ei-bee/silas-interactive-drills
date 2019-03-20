import React from 'react';

class StateDrills extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      who: 'Message',
    }
  }

  handleClick = (message) => {
    this.setState({
      who: message
    });
  }
  
  render() {
    return (
      <div>
        <p>{this.state.who}</p>
        <button onClick={() => this.handleClick('Hello World')}>World</button>
        <button onClick={() => this.handleClick('Hello Friend')}>Friend</button>
        <button onClick={() => this.handleClick('Hello React')}>React</button>
      </div>  
  )
  }
}

export default StateDrills;