import { View, Text, ScrollView, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { icons, images } from '@/constant'
import InputField from '@/components/InputField'
import CustomButton from '@/components/CustomButton'
import { Link, router } from 'expo-router'
import OAuth from '@/components/OAuth'
import { useSignUp } from '@clerk/clerk-expo'
import ReactNativeModal from 'react-native-modal'
import { fetchAPI } from '@/lib/fetch'
import { POST } from '../(api)/user+api'

const SignUpScreen = () => {
  const { isLoaded, signUp, setActive } = useSignUp()
  const [form, setForm] = useState({
    name: 'rurzuporta',
    email: 'rurzuporta@gufum.com',
    password: 'worldW@r3',
  })
  const [verification, setVerification] = useState({
    state: 'default',
    error: '',
    code: '',
  })

  const onSignUpPress = async () => {
    if (!isLoaded) {
      return
    }

    try {
      await signUp.create({
        emailAddress: form.email,
        password: form.password,
      })

      await signUp.prepareEmailAddressVerification({ strategy: 'email_code' })
      setVerification({ ...verification, state: 'pending' })
    } catch (err: any) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      Alert.alert('Error', err.errors[0].longMessage)
      console.error(JSON.stringify(err, null, 2))
    }
  }

  const onPressVerify = async () => {
    if (!isLoaded) return

    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code: verification.code,
      })

      if (completeSignUp.status === 'complete') {
        // TODO - create database user.
        await fetchAPI('/(api)/user', {
          method: 'POST',
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            clerkId: completeSignUp.createdUserId,
          }),
        })

        await setActive({ session: completeSignUp.createdSessionId })
        setVerification({ ...verification, state: 'success' })
      } else {
        setVerification({
          ...verification,
          error: 'Verification failed.',
          state: 'failed',
        })
      }
    } catch (err: any) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      console.error(JSON.stringify(err, null, 2))
      setVerification({
        ...verification,
        error: err.errors[0].longMessage,
        state: 'pending',
      })
    }
  }

  return (
    <ScrollView className='flex-1 bg-white'>
      <StatusBar style='dark' />
      <View className='flex-1 bg-white'>
        <View className='relative w-full h-[250px]'>
          <Image source={images.signUpCar} className='z-0 w-full h-[250px]' />
          <Text className='text-2xl text-black font-JakartaSemiBold absolute bottom-5 left-5'>
            Create Your Account
          </Text>
        </View>

        <View className='p-5 '>
          {/* NAME */}
          <InputField
            label='Name'
            placeholder='Enter your email'
            icon={icons.person}
            value={form.name}
            onChangeText={(value) => setForm({ ...form, name: value })}
          />

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
            onPress={onSignUpPress}
            className='mt-6'
          />

          {/* OAuth */}
          <OAuth />

          <Link
            href='/(auth)/sign-in'
            className='text-lg text-center text-general-200 mt-10'
          >
            <Text>Already have an account? </Text>
            <Text className='text-primary-500'>Log In</Text>
          </Link>
        </View>

        {/* Verification Modal  */}
        <ReactNativeModal
          isVisible={verification.state === 'pending'}
          onModalHide={() =>
            setVerification({ ...verification, state: 'success' })
          }
        >
          <View className='bg-white px-7 py-9 rounded-2xl min-h-[300px]'>
            <Text className='text-2xl font-JakartaBold text-center mb-2'>
              Verification
            </Text>
            <Text className='font-Jakarta-Regular mb-5'>
              We have sent a verification cod eto {form.email}
            </Text>

            <InputField
              label='Code'
              icon={icons.lock}
              placeholder='123456'
              value={verification.code}
              keyboardType='numeric'
              onChangeText={(value) =>
                setVerification({ ...verification, code: value })
              }
            />

            {verification.error && (
              <Text className='text-red-500 text-sm mt-1'>
                {verification.error}
              </Text>
            )}

            <CustomButton
              title='verify Email'
              onPress={onPressVerify}
              className='mt-5 bg-success-500'
            />
          </View>
        </ReactNativeModal>

        {/* Success Modal  */}
        <ReactNativeModal isVisible={verification.state === 'success'}>
          <View className='bg-white px-7 py-9 rounded-2xl min-h-[300px]'>
            <Image
              source={images.check}
              className='h-[110px] w-[110px] mx-auto my-5'
            />

            <Text className='text-3xl font-JakartaBold text-center'>
              Verified
            </Text>
            <Text className='text-base text-gray-400 font-Jakarta-Regular text-center mt-2'>
              you have successfully verified your account.
            </Text>

            <CustomButton
              title='Browse Home'
              onPress={() => router.replace('/(root)/(tabs)/home')}
              className='mt-3'
            />
          </View>
        </ReactNativeModal>
      </View>
    </ScrollView>
  )
}

export default SignUpScreen
