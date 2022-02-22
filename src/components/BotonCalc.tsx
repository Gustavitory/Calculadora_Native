import React from 'react'
import { Text, TouchableOpacity} from 'react-native'
import { globalStyles } from '../theme/appTheme'
import { backgroundB } from '../TS/backgroundSelector';

export interface Props{
    nombre:String,
    tipo:'n'|'o'|'u'|'cero',
    action:()=>void|null
}

export const BotonCalc = ({nombre,tipo,action}:Props) => {
  return (               
    <TouchableOpacity style={[globalStyles.boton,backgroundB(tipo)]} onPress={()=>action()}>
        <Text key={0} style={[globalStyles.botonTexto,tipo==='cero'?{alignSelf:'flex-start',
        marginLeft:25}:null,tipo==='u'?{color:'black'}:null]}>
            {nombre}
        </Text>
    </TouchableOpacity>
  )
}
