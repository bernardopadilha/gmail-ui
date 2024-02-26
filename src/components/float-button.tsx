import { Text, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { colors } from '@/styles/colors'
import { TouchableOpacity } from 'react-native-gesture-handler'

export function FloatButton() {
  return (
    <View
      className="px-4 py-3 bg-gray-600 rounded-full absolute bottom-4 right-4 gap-1 flex-row items-center"
    >
      <MaterialIcons name="edit" size={22} color={colors.orange[500]} />

      <Text className="font-normal text-orange-500">Escrever</Text>
    </View>
  )
}