import { ButtonProps } from '@/types/type'

import { View, Text, TouchableOpacity } from 'react-native'

interface T {
  title: string
  bgVariant: string
  onPress: () => {}
  textVariant: string
  IconLeft: React.ReactNode

  IconRight: React.ReactNode
  className: string
}

const getBgVarianStyle = (variant: ButtonProps['bgVariant']) => {
  switch (variant) {
    case 'secondary':
      return 'bg-gray-500'
    case 'danger':
      return 'bg-red-500'
    case 'success':
      return 'bg-green-500'
    case 'outline':
      return 'bg-transparent border-neutral-300 border-[0.5px]'
    default:
      return 'bg-[#028fff]'
  }
}

const getTextVariantStyle = (variant: ButtonProps['textVariant']) => {
  switch (variant) {
    case 'primary':
      return 'text-black'
    case 'secondary':
      return 'text-gray-100'
    case 'danger':
      return 'text-red-100'
    case 'success':
      return 'text-green-100'
    default:
      return 'text-white'
  }
}

const CustomButton = ({
  title,
  bgVariant = 'primary',
  onPress,
  textVariant = 'default',
  IconLeft,
  IconRight,
  className,
  ...props
}: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`w-full rounded-full p-3 flex flex-row justify-center items-center shadow-md shadow-neutral-400/75 ${getBgVarianStyle(bgVariant)} `}
      {...props}
    >
      {IconLeft && <IconLeft />}
      <Text className={`text-lg font-bold ${getTextVariantStyle(textVariant)}`}>
        {title}
      </Text>

      {IconRight && <IconRight />}
    </TouchableOpacity>
  )
}

export default CustomButton
