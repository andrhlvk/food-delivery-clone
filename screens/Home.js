import React, { useEffect, useState } from "react";
import { View, SafeAreaView, ScrollView } from "react-native";
import { Divider } from "react-native-elements/dist/divider/Divider";
import { YELP_API_KEY } from "../API_KEYS";
import ButtonTabs from "../components/home/ButtonTabs";
import Categories from "../components/home/Categories";
import HeaderTabs from "../components/home/HeaderTabs";
import RestaurantItems from "../components/home/RestaurantItems";
import SearchBar from "../components/home/SearchBar";

export default function Home({navigation}) {
  const [restaurantData, setRestaurantData] = useState([]);
  const [city, setCity] = useState("Hollywood");
  const [activeTab, setActiveTab] = useState('Delivery')


  const getRestaurantsHandler = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };
    return fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((json) => setRestaurantData(json.businesses.filter((businesses) => businesses.transactions.includes(activeTab.toLowerCase()))));
  };

  useEffect(() => {
    getRestaurantsHandler();
  }, [city, activeTab]);

  return (
    <SafeAreaView
      style={{
        paddingTop: Platform.OS === "android" ? 30 : 0,
        backgroundColor: "#eee",
        flex: 1,
      }}
    >
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab}/>
        <SearchBar cityHandler={setCity} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems restaurants={restaurantData} navigation={navigation} />
      </ScrollView>
      <Divider width={1}/>
      <ButtonTabs />
    </SafeAreaView>
  );
}
