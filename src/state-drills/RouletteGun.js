import React from 'react';

class RouletteGun extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      chamber: null,
      deadlyChamber: this.bulletInChamber(),
      spinning: false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    console.log('click');

    let bullet = this.bulletInChamber();

    console.log(bullet, this.state.deadlyChamber);
    
    // Spin the chamber for 2 seconds
    this.setState({
        spinning: true
      });


    setTimeout(() => {
      // After the spinning is done...
      this.setState({
        chamber: bullet,
        spinning: false,
      });
    }, 2000);

  }

  bulletInChamber = () => {
    return Math.floor( Math.random() * Math.floor(8));
  }

  understandMortality = () => {
    if (this.state.spinning) {return 'Spinning the chamber...'};
    if (!this.state.spinning && this.state.chamber !== this.state.deadlyChamber) {return 'You\'re still alive'}
    if (!this.state.spinning && this.state.chamber === this.state.deadlyChamber) {return 'You died'}
    return 'Something else is happening...';
  }

  render() {
    return (
      <div>
        <p>{this.understandMortality()}</p>
        <button onClick={this.handleClick}>Pull the trigger</button>
      </div>
    );
  }
}


export default RouletteGun;