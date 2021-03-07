import React from 'react';
import './App.css';
import NameForm from './Components/NameForm';
import HarwareForm from './Components/HardwareForm';


function App() {
  return (
    <div className="App">
      <h1>Deltahacks</h1>
        <header className="App-header">
          <p>Input Name:</p>
          <NameForm />
          <p>Input Password:</p>
          <NameForm />
          <HarwareForm />
        </header>
    </div>
  );
}

export default App;

/*
class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2
    };
 
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
 
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
 
    this.setState({
      [name]: value
    });
  }
 
  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.username + ' with password ' + this.state.password);
    event.preventDefault();
  }
 
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
         <label>
            Username:
            <input
              name="username"
              type="text"
              value={this.state.username}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Password:
            <input
              name="password"
              type="text"
              value={this.state.password}
              onChange={this.handleInputChange} />
          </label>
        <br />
          <input type="submit" value="Submit" />
        </form>
 
    );
  }
}
 
ReactDOM.render(
  <Reservation />,
  document.getElementById('root')
);
 */