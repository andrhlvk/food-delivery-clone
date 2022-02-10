import React from "react";
import { View, Text, Image } from "react-native";

// const yelpRestaurantInfo = {
//   name: "Andrushka's restaurant",
//   image:
//     "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
//   price: "$$",
//   reviews: "1500",
//   rating: 4.5,
//   categories: [{ title: "Ukrainian" }, { title: "Comfort" }],
// };

export default function About(props) {
  const {
    name: title,
    image,
    price,
    reviews,
    rating,
    categories,
  } = props.route.params;

  const formattedCategories = categories.map((cat) => cat.title).join(" • ");

  const description = `${formattedCategories} ${
    price ? " • " + price : ""
  } • 💳 • ${rating} ⭐ ${reviews ? "(" + reviews + "+)" : ""}`;
  return (
    <View>
      <RestaurantImage image={image} />
      <RestaurantTitle title={title} />
      <RestaurantDescription description={description} />
    </View>
  );
}

const RestaurantImage = (props) => {
  return (
    <Image
      source={{ uri: props.image }}
      style={{ width: "100%", height: 180 }}
    />
  );
};

const RestaurantTitle = (props) => {
  return (
    <Text
      style={{
        fontSize: 29,
        fontWeight: "bold",
        marginTop: 10,
        marginHorizontal: 15,
      }}
    >
      {props.title}
    </Text>
  );
};

const RestaurantDescription = (props) => {
  return (
    <Text style={{ marginTop: 10, marginHorizontal: 15, fontSize: 15.5 }}>
      {props.description}
    </Text>
  );
};
