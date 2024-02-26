import { colors } from "@/styles/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";

export function DrawerButton() {
  return (
    <Pressable>
      <View>
        <MaterialIcons name="email" size={20} color={colors.orange[300]} />
        <Text>Todas as caixas de e-mail</Text>
      </View>
    </Pressable>
  )
}