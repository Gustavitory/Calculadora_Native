import { StyleSheet } from "react-native";


export const globalStyles = StyleSheet.create({
    fondo:{
        flex:1,
        backgroundColor:'black',        
    },
    calculadoraContainer:{
        paddingHorizontal:20,
        flex:1,
        justifyContent:'flex-end'
    },
    resultado:{
        color:'white',
        fontSize:60,
        textAlign:'right'
    },
    resultadoPeque:{
        color:'rgba(255,255,255,0.5)',
        fontSize:30,
        textAlign:'right'
    },
    boton:{
        height:75,
        width:75,
        borderRadius:100,
        justifyContent:'center',
        marginBottom:10
    },
    botonTexto:{
        textAlign:'center',
        alignSelf:'center',
        padding:10,
        fontSize:30,
        color:'white',
        fontWeight:'600'
    },
    buttonsContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        flexWrap:'wrap',
        // backgroundColor:'red'
    }
});