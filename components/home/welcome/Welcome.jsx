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
  const jobTypes = [ "Full-time", "Part-time", "Contractor" ];
  return (
    <View style= { styles.container }>
      <Text style= { styles.userName }>Nicholas</Text>
      <Text style= { styles.welcomeMessage }>
        Find your dream job
      </Text>
      <View style= { styles.searchContainer }>
        <View style= { styles.searchWrapper }>
        <TextInput
          style= { styles.searchInput }
          value=""
          onChange={()=> {}}
          placeholder="Search for jobs..."
        />
        </View>
        <TouchableOpacity
          style= { styles.searchBtn }
          onPress={() => {}}>
            <Image
              style= { styles.searchBtnImage }
              source={ icons.search }
              resizeMode="contain"
            />
          </TouchableOpacity>
      </View>
      <FlatList
      data={ jobTypes}
      ></FlatList>
    </View>
  );
};

export default Welcome;
