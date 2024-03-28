import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        alignSelf: "center",
        shadowColor: "black",
        shadowOpacity: 4,
        backgroundColor: "black",
        padding: 30,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: "center",
        top: "40%",
        paddingVertical: 20,
        position: 'absolute',
        zIndex: 1,
        ...StyleSheet.absoluteFillObject 
    },
    btn1: {
        backgroundColor: "red",
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 5,
        marginRight:10
    },
    btn2: {
        
    },
    text: {
        color: "white",
        fontSize:18
    },
    title: {
        fontSize: 25,
        color:'white'
    },
    wrapper: {
        flexDirection: "row",
        marginVertical: 20,
        alignItems:'center'
    }
})