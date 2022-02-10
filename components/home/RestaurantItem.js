import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function RestaurantItem(props) {
  return (
    <>
      <View style={{ backgroundColor: "white", marginTop: 10, padding: 15 }}>
        <RestaurantImage image={props.image} />
        <RestaurantInfo name={props.name} rating={props.rating} />
      </View>
    </>
  );
}

const RestaurantImage = (props) => {
  return (
    <>
      <Image
        source={{
          uri: props.image,
        }}
        style={{ width: "100%", height: 180 }}
      />
      <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
        <MaterialCommunityIcons name="heart-outline" size={25} color="white" />
      </TouchableOpacity>
    </>
  );
};

const RestaurantInfo = (props) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 10,
      }}
    >
      <View>
        <Text style={{ fontSize: 15, fontWeight: "bold" }}>{props.name}</Text>
        <Text style={{ fontSize: 13, color: "grey" }}>30-45 • min</Text>
      </View>
      <View
        style={{
          backgroundColor: "#eee",
          height: 30,
          width: 30,
          alignItems: "center",
          borderRadius: 15,
          justifyContent: "center",
        }}
      >
        <Text style={{ fontWeight: "bold" }}>{props.rating}</Text>
      </View>
    </View>
  );
};

