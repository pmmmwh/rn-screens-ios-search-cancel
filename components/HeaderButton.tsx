import {
  Pressable,
  StyleSheet,
  Text,
  PressableProps,
  StyleProp,
  TextStyle,
  ViewStyle,
} from "react-native";

type HeaderButtonProps = Omit<PressableProps, "style"> & {
  contentStyle?: StyleProp<TextStyle>;
  style?: StyleProp<ViewStyle>;
  title?: string;
};

export const HeaderButton = function HeaderButton(props: HeaderButtonProps) {
  const { contentStyle, disabled, style, title, ...restProps } = props;

  return (
    <Pressable
      disabled={disabled}
      style={[styles.buttonContainer, style]}
      {...restProps}
    >
      <Text style={[styles.buttonText, contentStyle]}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: "center",
    height: 44,
    justifyContent: "center",
    paddingHorizontal: 7,
  },
  buttonText: {
    fontSize: 17,
    textTransform: "capitalize",
  },
  row: {
    columnGap: 4,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});
