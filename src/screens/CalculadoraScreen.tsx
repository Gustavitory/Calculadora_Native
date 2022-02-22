import React from 'react'
import { View, Text } from 'react-native'
import { BotonCalc} from '../components/BotonCalc';
import { globalStyles } from '../theme/appTheme';
import { useCalculadora } from '../hooks/useCalculadora';



export const CalculadoraScreen = () => {

  const {num,numPeque,op,separator,referencia,limpiar,negativoPositivo,
  borrar,dividir,escribir,multiplicar,restar,sumar,resultado}=useCalculadora()

  return (
    <View style={globalStyles.calculadoraContainer}>
      <View style={[{flex:1},globalStyles.calculadoraContainer]}>
        {
        (numPeque!=='0')?
          <Text style={globalStyles.resultadoPeque}>{separator(numPeque)}{referencia(op)}</Text>:
          null
        }        
        <Text style={[globalStyles.resultado,num.length>7?{fontSize:40}:null,num.length>18?{fontSize:25}:null]}>{separator(num)}</Text>
      </View>
      
      <View style={[globalStyles.buttonsContainer,{flex:1.3}]}>

        <BotonCalc nombre={'C'} tipo={'u'} action={()=>limpiar()}/> 
        <BotonCalc nombre={'+/-'} tipo={'u'} action={()=>negativoPositivo()}/> 
        <BotonCalc nombre={'del'} tipo={'u'} action={()=>borrar()}/> 
        <BotonCalc nombre={'/'} tipo={'o'} action={()=>dividir()}/> 

        <BotonCalc nombre={'7'} tipo={'n'} action={()=>escribir('7')}/> 
        <BotonCalc nombre={'8'} tipo={'n'} action={()=>escribir('8')}/> 
        <BotonCalc nombre={'9'} tipo={'n'} action={()=>escribir('9')}/> 
        <BotonCalc nombre={'x'} tipo={'o'} action={()=>multiplicar()}/> 

        <BotonCalc nombre={'4'} tipo={'n'} action={()=>escribir('4')}/> 
        <BotonCalc nombre={'5'} tipo={'n'} action={()=>escribir('5')}/> 
        <BotonCalc nombre={'6'} tipo={'n'} action={()=>escribir('6')}/> 
        <BotonCalc nombre={'-'} tipo={'o'} action={()=>restar()}/> 

        <BotonCalc nombre={'1'} tipo={'n'} action={()=>escribir('1')}/> 
        <BotonCalc nombre={'2'} tipo={'n'} action={()=>escribir('2')}/> 
        <BotonCalc nombre={'3'} tipo={'n'} action={()=>escribir('3')}/> 
        <BotonCalc nombre={'+'} tipo={'o'} action={()=>sumar()}/> 

        <BotonCalc nombre={'0'} tipo={'cero'} action={()=>escribir('0')}/> 
        <BotonCalc nombre={'.'} tipo={'n'} action={()=>escribir('.')}/> 
        <BotonCalc nombre={'='} tipo={'o'} action={()=>resultado()}/>
      </View>
               
    </View>
    );
}
