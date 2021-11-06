import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

export default function App() {
  const [state, setState] = useState("head");

  const flipCoin = () => {
    const random = Math.floor(Math.random() * 2) + 1;
    console.log(random);
    if (random === 2) {
      setState("tail");
    } else {
      setState("head");
    }
  };

  return (
    <View style={styles.container}>
      {state === "head" ? (
        <Image
          source={require("./assets/coin_h.png")}
          style={{
            width: 150,
            height: 150,
          }}
        />
      ) : (
        <Image
          source={require("./assets/coin_t.png")}
          style={{
            width: 150,
            height: 150,
          }}
        />
      )}

      <TouchableOpacity style={styles.btnPrimary} onPress={flipCoin}>
        <Text style={styles.textStyle}>Flip the Coin</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  btnPrimary: {
    backgroundColor: "red",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 4,
    marginTop: 30,
  },

  textStyle: {
    color: "#fff",
  },
});
