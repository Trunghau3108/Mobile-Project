import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("screen");

const ModalCss = StyleSheet.create({
    modalView: {
        flex: 1,
        alignItems: 'center',
    },
    modal: {
        width: width,
        height: height *95/100,
        marginTop: height *5/100,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        backgroundColor: 'white',
    },
    titleView: {
        height: height *6/100,
        justifyContent: 'center',
        paddingLeft: 20,
    },
    title: {
        fontSize: 23,
        fontWeight: 'bold',
        color: "#146C94",
    },
    imgView: {
        height: height *20/100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imgText: {
        color: 'white',
        fontSize: 36,
        fontWeight: 'bold',
    },
    bodyView: {
    },
    bottomView: {
        height: height *14/100,
        justifyContent: 'center',
        paddingBottom: 20,
    },
    touchDong: {
        width: width *90/100,
        height: 50,
        borderRadius: 10,
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center',
    },
    touchText: {
        fontSize: 23,
        fontWeight: 'bold',
        color: "white",
    },
});

export default ModalCss;