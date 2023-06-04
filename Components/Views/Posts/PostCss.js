import { StyleSheet } from 'react-native'


const PostCss = StyleSheet.create({
    postView: {
        width: '90%',
        borderRadius: 15,
        backgroundColor: 'white',
        marginHorizontal: '5%',
        marginVertical: 10,
        flex: 1,
    },

    imageView: {
        flex:1,
    },
    img: {
        width: 300,
        height: 200,
        borderRadius: 10,
        flex: 9,
        alignSelf:'center',
    },
    head: {
        flex: 1,
        marginVertical: 5,
        height: 40,
        flexDirection: 'row',
        marginTop: 10,
    },
    sale: {
        flex: 7,
        marginRight: 50,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor:'#146C94',
    },
    distance: {
        backgroundColor:'#ECECEC',
        flex: 3,
        justifyContent:'center',
        borderRadius: 10,
        marginRight: 10,
        flexDirection:'row',
        alignItems:'center',
    },

    tenxeView: {
        flex:1,
        height:50,
        justifyContent:'center',
        paddingLeft: 20,
    },
    textView: {
        flex: 1,
        flexDirection:'row',
        paddingHorizontal: 10,
        paddingBottom: 10,
    },
    in4Car1: {
        flex: 1,
    },
    in4Car2: {
        flex: 1,
    },
    priceView: {
        flex: 1,
        justifyContent:'center',

    },
    item: {
        flexDirection: 'row',
        margin: 5,
        flex: 1,
    },
    
});

export default PostCss
