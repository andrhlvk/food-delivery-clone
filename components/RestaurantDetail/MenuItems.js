import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { Divider } from "react-native-elements";

const food = [
  {
    title: "Makaroni s kotletoi",
    description: "Amazing nigger",
    price: "$5.12",
    image: "https://vseretsepti.ru/images/content-img/big/160521102738.jpg",
  },
  {
    title: "Borsh",
    description: "Amazing nigger2",
    price: "$3.34",
    image: "https://www.gastronom.ru/binfiles/images/20161226/bb647ec7.jpg",
  },
  {
    title: "Vareniki",
    description: "Amazing nigger3",
    price: "$10.45",
    image: "https://img.delo-vcusa.ru/2018/11/Vareniki-s-tikvoi.jpg",
  },
  {
    title: "Vareniki",
    description: "Amazing nigger3",
    price: "$10.45",
    image: "https://img.delo-vcusa.ru/2018/11/Vareniki-s-tikvoi.jpg",
  },
  {
    title: "Vareniki",
    description: "Amazing nigger3",
    price: "$10.45",
    image: "https://img.delo-vcusa.ru/2018/11/Vareniki-s-tikvoi.jpg",
  },
  {
    title: "Vareniki",
    description: "Amazing nigger3",
    price: "$10.45",
    image: "https://img.delo-vcusa.ru/2018/11/Vareniki-s-tikvoi.jpg",
  },
  {
    title: "Vareniki",
    description: "Amazing nigger3",
    price: "$10.45",
    image: "https://img.delo-vcusa.ru/2018/11/Vareniki-s-tikvoi.jpg",
  }
  
];

const styles = StyleSheet.create({
  menuItemStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },
  titleStyle: {
    fontWeight: "bold",
    fontSize: 19,
  },
});

export default function MenuItems() {
  return (
    <>
      {food.map((el, index) => {
        return (
          <View key={index}>
            <MenuItem food={el} />
          </View>
        );
      })}
    </>
  );
}

const MenuItem = ({ food }) => {
  return (
    <>
      <View style={styles.menuItemStyle}>
        <FoodInfo food={food} />
        <FoodImage image={food.image} />
      </View>
      <Divider width={1} style={{marginHorizontal: 20}} />
    </>
  );
};

const FoodInfo = ({ food }) => {
  return (
    <View style={{ width: 240, justifyContent: "space-evenly" }}>
      <Text style={styles.titleStyle}>{food.title}</Text>
      <Text>{food.description}</Text>
      <Text>{food.price}</Text>
    </View>
  );
};

const FoodImage = ({ image }) => {
  return (
    <View>
      <Image
        source={{ uri: image }}
        style={{ width: 100, height: 100, borderRadius: 8 }}
      />
    </View>
  );
};
