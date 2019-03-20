import React from 'react';

class Bomb extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  componentDidMount() {
    setInterval(() => {
      let newTime = this.state.count + 1;
      this.setState({ count: newTime })
    }, 1000)
  }

  render() {
    return (
      <div>
        <p>{this.state.count.toLocaleString()}</p>
      </div>
    )
  }

}

export default Bomb;