import { View, Text, ScrollView, Image } from 'react-native'
import React, { useCallback, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { icons, images } from '@/constant'
import InputField from '@/components/InputField'
import CustomButton from '@/components/CustomButton'
import { Link, router } from 'expo-router'
import OAuth from '@/components/OAuth'
import { useSignIn } from '@clerk/clerk-expo'

const SignInScreen = () => {
  const { signIn, setActive, isLoaded } = useSignIn()
  const [form, setForm] = useState({
    email: 'dospalolme@gufum.com',
    password: 'worldW@r3',
  })

  const onSignInPress = useCallback(async () => {
    if (!isLoaded) {
      return
    }

    try {
      const signInAttempt = await signIn.create({
        identifier: form.email,
        password: form.password,
      })

      if (signInAttempt.status === 'complete') {
        await setActive({ session: signInAttempt.createdSessionId })
        router.replace('/(root)/(tabs)/home')
      } else {
        // See https://clerk.com/docs/custom-flows/error-handling
        // for more info on error handling
        console.error(JSON.stringify(signInAttempt, null, 2))
      }
    } catch (err: any) {
      console.error(JSON.stringify(err, null, 2))
    }
  }, [isLoaded, form.email, form.password])

  return (
    <ScrollView className='flex-1 bg-white'>
      <StatusBar style='dark' />
      <View className='flex-1 bg-white'>
        <View className='relative w-full h-[250px]'>
          <Image source={images.signUpCar} className='z-0 w-full h-[250px]' />
          <Text className='text-2xl text-black font-JakartaSemiBold absolute bottom-5 left-5'>
            Welcome 👋
          </Text>
        </View>

        <View className='p-5 '>
          {/* EMAIL */}
          <InputField
            label='Email'
            placeholder='Enter your email'
            icon={icons.email}
            value={form.email}
            onChangeText={(value) => setForm({ ...form, email: value })}
          />

          {/* PASSWORD */}
          <InputField
            label='Password'
            placeholder='Enter your password'
            icon={icons.lock}
            secureTextEntry
            value={form.password}
            onChangeText={(value) => setForm({ ...form, password: value })}
          />

          <CustomButton
            title='Sign Up'
            onPress={onSignInPress}
            className='mt-6'
          />

          {/* OAuth */}
          <OAuth />

          <Link
            href='/(auth)/sign-up'
            className='text-lg text-center text-general-200 mt-10'
          >
            <Text>Don't have an account? </Text>
            <Text className='text-primary-500'>Sign Up</Text>
          </Link>
        </View>

        {/* Verification Modal  */}
      </View>
    </ScrollView>
  )
}

export default SignInScreen
