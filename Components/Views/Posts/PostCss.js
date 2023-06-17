import { StyleSheet } from 'react-native'


const PostCss = StyleSheet.create({
    postView: {
        width: '92%',
        borderRadius: 15,
        backgroundColor: 'white',
        marginHorizontal: '4%',
        marginVertical: 10,
        flex: 1,
        padding: 20,
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

        borderBottomRightRadius: 10,
        borderTopRightRadius: 10,
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
        // margin: ,
        margin: 5,
        flex: 1,
    },
    
});

const PostCss2 = StyleSheet.create({
    container: {
        width: "100%",
        height: 400,
        alignItems:'center',
        justifyContent:'center',
        alignSelf: 'center',
        marginBottom: 20,
    },
    post: {
        width: '96%',
        height: 360,
        alignItems:'center',
        borderRadius: 10,
        backgroundColor: 'white',
        borderRadius: 10,
    },
    tag: {
        height: 40,
        padding: 10,
        position:'absolute',
        bottom: 330,
        left: 0,
        borderBottomRightRadius: 5,
        borderTopRightRadius: 5,
        backgroundColor:'#146C94',
    },
    km: {
        backgroundColor:'white',
        height: 40,
        padding: 10,
        marginTop: 10,
        marginRight: 10,
        borderRadius: 5,
        alignSelf: 'flex-end',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: '#ECECEC',
    },
    img: {
        width: "96%",
        height: 140,
        marginTop: 5,
    },
    infor: {
        width:"96%",
        height: 150,

    },
    name: {
        width :"100%",
        height: 40,
        justifyContent:'center',

    },
    define: {
        width: '100%',
        height: 110,
        flexDirection: 'row',
    },
    define1: {
        width: '33%',
        height: 110,
        justifyContent: 'space-around',
    },
    define2: {
        width: '34%',
        height: 110,
        justifyContent:'flex-end',
    },
    item: {
        flexDirection: 'row',
    },
});
export default PostCss2
