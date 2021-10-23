import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 36,
  },

  message: {
    fontSize: 16,
    fontFamily: FONTS.REGULAR,
    color: COLORS.WHITE,
    lineHeight: 20,
  },

  footer: {
    width: '100%',
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
  },

  useName: {
    color: COLORS.WHITE,
    marginLeft: 20,
  },
});
