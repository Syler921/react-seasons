import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner'
if (module.hot) {
  module.hot.accept();
}

class App extends React.Component {
  state = {
    lat: null,
    errorMessage: "",
  };

  componentDidMount() {
    console.log("mounted");
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude });
      },
      (err) => {
        console.log(err);
        this.setState({ errorMessage: err.message });
      }
    );
  }

  componentDidUpdate() {
   
  }

  renderContent(){
    if (this.state.errorMessage && !this.state.lat) {
        return <div>Error: {this.state.errorMessage}</div>;
      }
      if (!this.state.errorMessage && this.state.lat) {
        return <SeasonDisplay lat={this.state.lat}/>;
      }
  
      return <Spinner text="Please allow location"/>;
  }
  render() {

    return (
        <div className="border red">
            {this.renderContent()}
        </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
