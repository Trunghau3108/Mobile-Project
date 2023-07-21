import { StyleSheet } from "react-native";

const FilterListCss = StyleSheet.create({
  container: {
    height: "30%",
    justifyContent: "center",
  },
  ltnhourctn: {
    backgroundColor: "#ececec",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 15,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 10,
    borderRadius: 5,
  },
  ltn: {
    fontWeight: "700",
    fontSize: 15,
  },
  hour: { fontSize: 12 },
  changebtn: {
    fontWeight: "700",
    color: "#146C94",
  },
  fltctn: {
    backgroundColor: "#ececec",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 15,
    paddingLeft: 15,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 10,
    borderRadius: 5,
  },

  prcctn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  prc: {
    flex: 3,
    width: 250,
    padding: 15,
    paddingLeft: 18,
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 5,
    justifyContent: "space-around",
    backgroundColor: "#ececec",
    alignItems: "center",
    flexDirection: "row",
  },
  prcbtnctn: {
    backgroundColor: "#146C94",
    alignItems: "center",
    height: 50,
    justifyContent: "center",
    flex: 1,
    marginRight: 15,
    borderRadius: 5,
  },
  prcbtntext: {
    color: "white",
    fontWeight: "800",
  },
  CarFil: {
    position: "absolute",
    backgroundColor: "white",
    bottom: 0,
    paddingVertical: 25,
    width: "100%",
    borderRadius: 20,
    elevation: 10,
    zIndex: 50,
  },

  BackSortPrice: {
    width: "100%",
    marginTop: 200,
    position: "absolute",
    alignItems: "center",
    zIndex: 100,
  },
});
export default FilterListCss;
