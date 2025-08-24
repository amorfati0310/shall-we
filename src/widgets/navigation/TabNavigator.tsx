import { Ionicons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { Platform, Text } from 'react-native'
import { DiscoverPage } from '@/pages/discover/DiscoverPage'
import { HomePage } from '@/pages/home/HomePage'
import { MatchingPage } from '@/pages/matching/MatchingPage'
import { ProfilePage } from '@/pages/profile/ProfilePage'
import type { TabParamList } from '@/shared/types/navigation'

const Tab = createBottomTabNavigator<TabParamList>()

type IoniconsName = 'home' | 'search' | 'heart' | 'person'

interface TabIconProps {
  name: IoniconsName
  emoji: string
  color: string
  size: number
}

// 웹에서는 이모지, 모바일에서는 Ionicons 사용
const TabIcon = ({ name, emoji, color, size }: TabIconProps) => {
  const adjustedSize = size - 4 // 아이콘 크기 4px 감소

  if (Platform.OS === 'web') {
    return <Text style={{ fontSize: adjustedSize }}>{emoji}</Text>
  }
  return <Ionicons name={name} size={adjustedSize} color={color} />
}

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#ec4899',
        tabBarInactiveTintColor: '#6b7280',
        tabBarStyle: {
          backgroundColor: 'white',
          borderTopWidth: 1,
          borderTopColor: '#e5e7eb',
          height: 80, // 높이 증가
          paddingBottom: 12, // 하단 패딩 증가
          paddingTop: 8,
        },
        tabBarIconStyle: {
          marginBottom: 2, // 아이콘과 텍스트 간격 조정
        },
        tabBarLabelStyle: {
          fontSize: 11, // 텍스트 크기 조정
          fontWeight: '500',
          paddingBottom: 2,
        },
      }}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomePage}
        options={{
          title: '홈',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <TabIcon name="home" emoji="🏠" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="DiscoverTab"
        component={DiscoverPage}
        options={{
          title: '탐색',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <TabIcon name="search" emoji="🔍" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="MatchingTab"
        component={MatchingPage}
        options={{
          title: '매칭',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <TabIcon name="heart" emoji="💃" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileTab"
        component={ProfilePage}
        options={{
          title: '프로필',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <TabIcon name="person" emoji="👤" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}
