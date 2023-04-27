import React from "react";
import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { useRouter } from "expo-router";
import { icons, SIZES } from "../../../constants";
import styles from "./welcome.style";

const Welcome = () => {
  const router = useRouter();
  return (
    <View style= { styles.container }>
      <Text style= { styles.userName }>Nicholas</Text>
      <Text style= { styles.welcomeMessage }>
        Find your dream job
      </Text>
      <View style= { styles.searchContainer }>
        <View style= { styles.searchWrapper }></View>
        <TextInput
          style= { styles.searchInput }
        />
      </View>
    </View>
  );
};

export default Welcome;
