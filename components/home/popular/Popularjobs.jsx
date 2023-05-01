import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";
import { COLORS, SIZES } from "../../../constants";
import styles from "./popularjobs.style";
import PopularJobCard from "../../common/cards/popular/PopularJobCard";


const Popularjobs = () => {
  const router = useRouter();
  const error = false;
  const isLoading = false;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardContainer}>
        {isLoading ? (
          <ActivityIndicator SIZES="Large" colors={COLORS.primary} />
        ) : error ? (
          <Text style={styles.errorText}>Something went wrong</Text>
        ) : (
          <View>
            <FlatList
              data={[1, 2, 3, 4]}
              renderItem={({ item }) => <PopularJobCard item={item} />}
              keyExtractor={(item) => item?.job_id}
              contentContainerStyle={{ columnGap: SIZES.medium }}
              horizontal
            />
          </View>
        )}
      </View>
    </View>
  );
};

export default Popularjobs;
