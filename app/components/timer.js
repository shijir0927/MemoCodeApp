import React, { Component } from "react";
import { View, Text, Button } from "react-native";

let timer = () => {};

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      remainingTime: 300,
    };
  }

  countdownTimer() {
    this.setState({ remainingTime: 300 });
    clearInterval(timer);
    timer = setInterval(() => {
      if (!this.state.remainingTime) {
        clearInterval(timer);
        return false;
      }
      this.setState((prevState) => {
        return { remainingTime: prevState.remainingTime - 1 };
      });
    }, 1000);
  }

  render() {
    return (
      <View>
        <Text style={{ textAlign: "center", fontSize: 24, marginBottom: -10 }}>
          {this.state.remainingTime}
        </Text>
        <Button title="Start" onPress={() => this.countdownTimer()} />
      </View>
    );
  }
}

export default Timer;
