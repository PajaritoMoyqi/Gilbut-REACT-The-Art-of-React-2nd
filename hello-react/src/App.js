import { Component } from 'react';
import LifecycleError from './LifecycleError';
import ErrorBoundary from './ErrorBoundary'

function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
  state = {
    color: '#000000'
  }

  handleClick = () => {
    this.setState({
      color: getRandomColor()
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Random Color Generator</button>
        <ErrorBoundary>
          <LifecycleError color={this.state.color} />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;