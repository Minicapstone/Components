import React, { Component } from 'react';

class Greetings extends Component {
  state = {
    hour: null,
    username: 'Juan',
    currentDate: new Date(),
  };

  componentDidMount() {
    this.getHour();
  }

  getHour = () => {
    const date = new Date();
    const hour = date.getHours();
    this.setState({ hour });
  };

  render() {
    const { username, currentDate } = this.state;

    // Format the time
    const formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    return (
      <div className="App" style={{ padding: '1rem', backgroundColor: 'white',borderRadius: '10px', }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div className="Greetings">
            <p className="text-3xl font-bold pr-4">
              Hello, <span style={{ color: 'maroon' }}>Welcome {username}!👋</span>
            </p>
          </div>
          <div>
            <p className="text-3xl font-bold p-size" style={{ color: 'black' }}>
              {currentDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })} |{' '}
              {currentDate.toLocaleDateString('en-US', { weekday: 'long' })}, {formattedTime}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Greetings;