import React from "react";
import { View, Text, ScrollView } from "react-native";
import { Divider } from "react-native-elements";
import About from "../components/RestaurantDetail/About";
import MenuItems from "../components/RestaurantDetail/MenuItems";

export default function RestaurantDetals({route}) {
  return (
    <View style={{ flex: 1 }}>
      <About route={route} />
      <Divider width={2} style={{ marginTop: 20 }} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <MenuItems />
      </ScrollView>
    </View>
  );
}
