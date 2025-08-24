import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'
import './global.css'

export default function App() {
  return (
    <View className="flex-1 bg-white items-center justify-center">
      <Text className="text-4xl font-bold text-gray-800 mb-4">Shall we?</Text>
      <Text className="text-lg text-gray-600">Let's get started with your journey</Text>
      <StatusBar style="auto" />
    </View>
  )
}
