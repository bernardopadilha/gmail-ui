import { DrawerContentComponentProps } from "@react-navigation/drawer";
import { Image, ScrollView, View } from "react-native";
import { DrawerButton } from "@/components/drawer-button";

export function DrawerContent(drawerProps: DrawerContentComponentProps) {
  return (
    <View className="flex-1 bg-gray-600 overflow-hidden">
      <View className="mt-20 w-full border-b pb-6 border-gray-500">
        <Image
          className="w-28 ml-5"
          source={require("@/assets/logo.png")}
          resizeMode="contain"
        />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 42,
        }}
      >
        <View className="mt-2">
          {drawerProps.state.routes.map((route, index) => {
            const isFocused = drawerProps.state.index === index
            const options = drawerProps.descriptors[route.key].options

            if(options.title === undefined) {
              return
            }

            return (
              <View key={route.key}>
                <DrawerButton />
              </View>
            )
          })}
        </View>
      </ScrollView>
    </View>
  );
}
