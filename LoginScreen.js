import {
  Alert,
  Button,
  ImageBackground,
  Keyboard,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import React from "react";
import { useState } from "react";

const LoginScreen = ({ navigation }) => {
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ImageBackground
        source={require("./assets/anhnendep.jpg")}
        style={{
          width: "100%",
          height: "100%",
          alignItems: "center",
          flex: 1,
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            marginBottom: 50,
            fontSize: 35,
            fontWeight: "bold",
            color: "blue",
          }}
        >
          WELCOME
        </Text>

        <TextInput
          value={mail}
          placeholder="Nhập Email"
          style={{
            borderColor: "white",
            borderWidth: 1,
            height: 35,
            width: 300,
            marginBottom: 10,
            paddingHorizontal: 10,
          }}
          onChangeText={(text) => setMail(text)}
        ></TextInput>

        <TextInput
          value={pass}
          placeholder="Nhập Pass"
          style={{
            borderColor: "white",
            borderWidth: 1,
            height: 35,
            width: 300,
            marginBottom: 70,
            paddingHorizontal: 10,
          }}
          onChangeText={(text) => setPass(text)}
          secureTextEntry={true}
        ></TextInput>
        <View style={{ width: 300 }}>
          <Button
            title="Sign In"
            onPress={() => {
              navigation.navigate("TabBar");
            }}
          ></Button>
        </View>
        <View style={{ margin: 20, flexDirection: "row" }}>
          <Text>Don't have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <Text style={{ color: "blue" }}> Sign Up</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;
