export const backgroundB=(tipo:String)=>{
    switch(tipo){
        case 'o':
            return{backgroundColor:'#FF9427'};
        case 'u':
            return {backgroundColor:'grey'};
        case 'cero':
            return {width:170,backgroundColor:'#2D2D2D'}
        default:
            return {backgroundColor:'#2D2D2D'};
    }
}