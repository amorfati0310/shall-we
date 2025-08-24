import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Text, View } from 'react-native'
import type { RootStackParamList } from '@/shared/types/navigation'

interface ProfilePageProps extends NativeStackScreenProps<RootStackParamList, 'Profile'> {}

export const ProfilePage = ({ route }: ProfilePageProps) => {
  const { username } = route.params || {}

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-2xl font-bold text-gray-800 mb-4">프로필</Text>
      <Text className="text-lg text-gray-600">
        {username ? `${username}님의 프로필` : '내 프로필'}
      </Text>
    </View>
  )
}
