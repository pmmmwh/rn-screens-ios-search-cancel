import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Fragment } from "react";

import { HeaderButton } from "@/components/HeaderButton";

export default function RootLayout() {
  return (
    <Fragment>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            headerRight: () => <HeaderButton title="Button" />,
            headerSearchBarOptions: {
              hideWhenScrolling: false,
            },
            headerTransparent: false,
          }}
        />
      </Stack>
      <StatusBar style="auto" />
    </Fragment>
  );
}
