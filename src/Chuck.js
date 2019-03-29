import React from "react";

class Chuck extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ChuckJoke: [], loading: false };
  }
  componentDidMount() {
    fetch("https://api.icndb.com/jokes/random")
      .then(function(response) {
        return response.json();
      })
      .then(data => {
        this.setState({ ChuckJoke: data.value.joke });
      });
  }
  handleChuckJoke = () => {
    this.setState({ loading: true });
    fetch("https://api.icndb.com/jokes/random")
      .then(function(response) {
        return response.json();
      })

      .then(data => {
        setTimeout(() => {
          this.setState({ ChuckJoke: data.value.joke, loading: false });
        }, 10000);
      });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <p>{this.state.loading ? "Loading..." : this.state.ChuckJoke} </p>

        <button onClick={this.handleChuckJoke}>Blague de Chuck</button>
      </div>
    );
  }
}

export default Chuck;
