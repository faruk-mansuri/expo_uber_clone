import { View, Text, Image, ImageSourcePropType } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { icons } from '@/constant'

const TabIcon = ({
  focused,
  source,
}: {
  focused: boolean
  source: ImageSourcePropType
}) => {
  return (
    <View
    // className={`flex flex-row justify-center items-center ${focused ? 'bg-white' : ''} `}
    >
      <View
        className={`rounded-full w-12 h-12 items-center justify-center ${focused ? 'bg-general-400' : ''}`}
      >
        <Image
          source={source}
          tintColor='white'
          resizeMode='contain'
          className='h-7 w-7'
        />
      </View>
    </View>
  )
}

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'white',
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#333333',
          borderRadius: 50,
          paddingBottom: 0,
          overflow: 'hidden',
          marginHorizontal: 20,
          height: 78,
          // display: 'flex',
          // justifyContent: 'space-between',
          // alignItems: 'center',
          // flexDirection: 'row',
          position: 'absolute',
          marginBottom: 10,
        },
      }}
    >
      <Tabs.Screen
        name='home'
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} source={icons.home} />
          ),
        }}
      />
      <Tabs.Screen
        name='rides'
        options={{
          title: 'Rides',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} source={icons.list} />
          ),
        }}
      />
      <Tabs.Screen
        name='chat'
        options={{
          title: 'Chat',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} source={icons.chat} />
          ),
        }}
      />
      <Tabs.Screen
        name='profile'
        options={{
          title: 'Profile',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} source={icons.profile} />
          ),
        }}
      />
    </Tabs>
  )
}

export default TabsLayout
