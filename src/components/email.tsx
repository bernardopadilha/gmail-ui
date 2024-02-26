import { Text, View } from "react-native";
import { Avatar } from "./avatar";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "@/styles/colors";
import { EmailDataProps } from "@/utils/emails";

interface EmailProps {
  data: EmailDataProps;
}

export function Email({ data }: EmailProps) {
  return (
    <View className="w-full flex-row gap-4">
      <Avatar source={{ uri: data.avatar }} size="md" />

      <View className="flex-1">
        <View className="flex-row items-center gap-1">
          {data.marker && (
            <MaterialIcons
              size={16}
              name="label-important"
              color={colors.yellow[600]}
            />
          )}
          <Text className="text-lg font-subtitle text-gray-400 flex-1">
            {data.name}
          </Text>

          <Text className="text-sm font-body text-gray-400">{data.date}</Text>
        </View>

        <Text
          numberOfLines={1}
          lineBreakMode="tail"
          className="text-base font-body text-gray-400"
        >
          {data.subject}
        </Text>

        <View className="flex-row items-center gap-4">
          <Text
            numberOfLines={1}
            lineBreakMode="tail"
            className="text-base font-body text-gray-400 flex-1"
          >
            {data.message}
          </Text>

          <MaterialIcons
            size={22}
            color={data.star ? colors.yellow[600] : colors.blue[600]}
            name={data.star ? "star" : "star-outline"}
          />
        </View>
      </View>
    </View>
  );
}
