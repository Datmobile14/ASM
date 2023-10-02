import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  ScrollView,
  Image,
  Pressable,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import NewPostScreen from "./NewPostScreen";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
  const [searchText, setSearchText] = useState("");

  return (
    <ScrollView style={{ flex: 1 }}>
      <View
        style={{
          backgroundColor: "white",
          height: 150,
          paddingTop: 40,
          paddingLeft: 20,
          paddingBottom: 20,
          borderBottomWidth: 1,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontWeight: "bold", fontSize: 25 }}>facebook</Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              borderColor: "black",
              borderWidth: 1,
              height: 36,
              width: 250,
              justifyContent: "space-between",
              borderRadius: 8,
              backgroundColor: "white",
              marginLeft: 20,
            }}
          >
            <TextInput
              placeholder="Search..."
              onChangeText={(text) => setSearchText(text)}
              value={searchText}
              style={{ padding: 10, fontSize: 13 }}
            />
            <TouchableOpacity
              onPress={() => {
                if (searchText) {
                  // onSearch(searchText)
                }
              }}
            >
              <Ionicons
                name="search"
                size={14}
                color="black"
                style={{ padding: 10 }}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.contens}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View
              style={{
                width: 40,
                height: 40,
                borderColor: "black",
                borderWidth: 1,
                borderRadius: 20,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "white",
              }}
            >
              <Ionicons
                name="people"
                size={20}
                color="black"
                onPress={() => navigation.navigate("User")}
              />
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate("NewPost")}
              style={{ marginLeft: 10 }}
            >
              <Text>Bạn đang nghĩ gì?</Text>
            </TouchableOpacity>
          </View>
          <Ionicons name="images" size={20} style={{ paddingEnd: 40 }} />
        </View>
      </View>

      <View style={{ height: 100 }} />
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  contens: {
    marginTop: 25,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
  },
});
