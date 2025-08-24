import React from 'react'
import { Text, View } from 'react-native'

export const HomePage = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-2xl font-bold text-gray-800 mb-4">홈</Text>
      <Text className="text-lg text-gray-600">오늘의 추천 모임</Text>
    </View>
  )
}
