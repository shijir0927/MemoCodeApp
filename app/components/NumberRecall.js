import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import Timer from "./timer";
class App extends Component {
  state = {
    randomNumbers: [],
  };

  generateRandomNumbers = () => {
    var numbers = [];
    for (let i = 0; i < 200; i++) {
      let number = Math.floor(Math.random() * 9);
      numbers.push(number);
    }
    this.setState({ randomNumbers: numbers });
  };

  render() {
    return (
      <View>
        <TouchableOpacity onPress={this.generateRandomNumbers}>
          <View style={{ backgroundColor: "#ff567d" }}>
            <Text
              style={{
                textAlign: "center",
                margin: 40,
                color: "white",
                fontSize: 44,
                fontWeight: 700,
              }}
            >
              Numbers
            </Text>
          </View>
        </TouchableOpacity>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            height: 50,
            backgroundColor: "lightgrey",
            alignItems: "center",
          }}
        >
          <View>
            <TouchableOpacity>
              <View style={{ borderWidth: 2, borderColor: "black" }}>
                <Text
                  style={{
                    fontSize: 18,
                    marginTop: 10,
                    marginBottom: 10,
                    marginRight: 20,
                    marginLeft: 20,
                  }}
                >
                  Back
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          <View>
            <Timer />
          </View>

          <View>
            <TouchableOpacity>
              <View style={{ borderWidth: 2, borderColor: "black" }}>
                <Text
                  style={{
                    fontSize: 18,
                    marginTop: 10,
                    marginBottom: 10,
                    marginRight: 20,
                    marginLeft: 20,
                  }}
                >
                  Recall
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ margin: 20 }}>
          <TextInput keyboardType="numeric" />
        </View>

        <View
          style={{
            backgroundColor: "#ff567d",
            height: 80,
            marginTop: 325,
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <TouchableOpacity>
            <View>
              <Image
                source={{
                  uri: "https://img.icons8.com/pastel-glyph/2x/home.png",
                }}
                style={{ height: 50, width: 50 }}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View>
              <Image
                source={{
                  uri:
                    "https://www.freeiconspng.com/uploads/circle-of-friends-icon-png-1.png",
                }}
                style={{ height: 50, width: 50 }}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View>
              <Image
                source={{
                  uri:
                    "https://upload-icon.s3.us-east-2.amazonaws.com/uploads/icons/png/19339625881548233621-512.png",
                }}
                style={{ height: 50, width: 50 }}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default App;
