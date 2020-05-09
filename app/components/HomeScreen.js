import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

class App extends Component {
  render() {
    return (
      <View>
        <TouchableOpacity>
          <View style={{ backgroundColor: "#6563ff" }}>
            <Text
              style={{
                textAlign: "center",
                margin: 40,
                color: "white",
                fontSize: 44,
                fontWeight: "700",
              }}
            >
              MemoCode
            </Text>
          </View>
        </TouchableOpacity>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: "#70ff4a",
                width: 210,
                height: 120,
                justifyContent: "center",
              }}
            >
              <Text
                style={{ color: "white", fontSize: 36, textAlign: "center" }}
              >
                Cards
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: "#ffaa7d",
                width: 210,
                height: 120,
                justifyContent: "center",
              }}
            >
              <Text
                style={{ color: "white", fontSize: 36, textAlign: "center" }}
              >
                Words
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: "#ff567d",
                width: 210,
                height: 120,
                justifyContent: "center",
              }}
            >
              <Text
                style={{ color: "white", fontSize: 36, textAlign: "center" }}
              >
                Numbers
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: "#63bd4b",
                width: 210,
                height: 120,
                justifyContent: "center",
              }}
            >
              <Text
                style={{ color: "white", fontSize: 36, textAlign: "center" }}
              >
                Images
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: "#4affae",
                width: 210,
                height: 120,
                justifyContent: "center",
              }}
            >
              <Text
                style={{ color: "white", fontSize: 36, textAlign: "center" }}
              >
                Names
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: "#d263ff",
                width: 210,
                height: 120,
                justifyContent: "center",
              }}
            >
              <Text
                style={{ color: "white", fontSize: 36, textAlign: "center" }}
              >
                Binary
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View
          style={{
            backgroundColor: "#6563ff",
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
