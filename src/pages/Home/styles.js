import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const win = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffe569",
    alignItems: "center",
    padding: 24,
  },
  dateText: {
    color: "#100720",
    fontSize: 36,
    marginTop: 48,
    textAlign: "center",
    fontFamily: "Pacifico",
  },
  specialText: {
    color: "#db005b",
    fontSize: 24,
    marginTop: 12,
    textAlign: "center",
    fontFamily: "SemiBold",
  },
  messageText: {
    color: "#100720",
    fontSize: 18,
    textAlign: "center",
    fontFamily: "Regular",
    alignSelf: "flex-start",
    marginTop: 20,
  },
  gif: {
    width: win.width * 0.9,
    height: win.width * 0.9,
    borderRadius: 20,
    marginTop: 20,
  },
});
