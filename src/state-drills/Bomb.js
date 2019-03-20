import React from 'react';

class Bomb extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      let newTime = this.state.count + 1;
      this.setState({ count: newTime })
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tickTock() {
    if (this.state.count >= 8) {
      clearInterval(this.interval);
      return 'BOOM!'
    }
    if (this.state.count % 2 === 0) {
      return 'tick';
    }
    if (this.state.count % 2 !== 0) {
      return 'tock';
    }
  }

  render() {
    return (
      <div>
        <p>{this.tickTock()}</p>
      </div>
    )
  }

}

export default Bomb;