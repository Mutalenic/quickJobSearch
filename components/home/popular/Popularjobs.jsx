import React from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import { useState } from 'react'
import { useRouter } from 'expo-router'
import { COLORS,SIZES } from '../../../constants'
import styles from './popularjobs.style'
import PopularJobCard from '../../common/cards/popular/PopularJobCard';

const router = useRouter();

const Popularjobs = () => {
  return (
    <View>
      <Text>Popularjobs</Text>
    </View>
  )
}

export default Popularjobs