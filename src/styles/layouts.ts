import {StyleSheet, Platform} from "react-native";
import {COLORS} from "@styles";

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: COLORS.layoutWhite,
  },

  row: {
    flexDirection: "row",
  },

  loaderView: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 9999,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
  },

  updatePricesView: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 9999,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },

  splashScreenView: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 999999,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },

  splashScreenImage: {
    marginTop: -46,
    width: "69%",
  },

  splashScreenText: {
    marginTop: 20,
    fontSize: 20,
  },

  loaderImage: {
    width: 150,
    height: 150,
  },

  customNavigationHolder: {
    width: "100%",
    height: "100%",
    //backgroundColor:    'transparent',
  },

  customNavigationHolder__Content: {
    flex: 1,
    // borderColor:        '#f0f',
    // borderWidth:        1,
  },

  customNavigationHolder__Menu: {
    height: 65,
    width: "100%",

    // borderColor:        '#f00',
    // borderWidth:        1,
  },

  progressBar: {
    width: "80%",
    height: 10,
  },

  content: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 20,
  },
});
