import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useRef, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { router } from 'expo-router'
import Swiper from 'react-native-swiper'
import { onboarding } from '@/constant'
// import CustomButton from '@/components/CustomButton'

const WelcomeScreen = () => {
  const swiperRef = useRef<Swiper>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <SafeAreaView className='flex h-full items-center justify-center bg-white'>
      <StatusBar style='dark' />
      <TouchableOpacity
        className='w-full flex justify-end items-end p-5'
        onPress={() => router.replace('/(auth)/sign-up')}
      >
        <Text className='text-black text-md font-JakartaBold'>Skip</Text>
      </TouchableOpacity>
      <Swiper
        ref={swiperRef}
        loop={false}
        dot={<View className='w-[32px] h-[4px] bg-[#E2E8F0] rounded-full' />}
        activeDot={
          <View className='w-[32px] h-[4px] bg-[#0286FF] rounded-full' />
        }
        onIndexChanged={(index) => setActiveIndex(index)}
      >
        {onboarding.map((item) => {
          return (
            <View key={item.id}>
              <Image
                source={item.image}
                className='w-full h-[300px]'
                resizeMode='contain'
              />
              <View className='flex flex-row items-center justify-center w-full mt-10'>
                <Text className='text-black text-3xl font-bold mx-10 text-center'>
                  {item.title}
                </Text>
              </View>
              <Text className='text-md font-JakartaSemiBold text-center text-[#858585] mx-10 mt-3'>
                {item.description}
              </Text>
            </View>
          )
        })}
      </Swiper>

      {/* <CustomButton title={'Next'} /> */}
    </SafeAreaView>
  )
}

export default WelcomeScreen
