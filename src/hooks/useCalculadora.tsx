import {useState} from 'react'

export const useCalculadora = () => {
    const [num,setNum]=useState('0');
    const [numPeque,setNumPeque]=useState('0');
    const [op,setOp]=useState('')
    
    const limpiar=()=>{
      setNum('0');
      setNumPeque('0');
      setOp('')
    }
    const escribir=(numero:String)=>{
      if(num!=='0'&& num!=='-0' && numero!=='.')setNum(`${num}${numero}`);
      else if(numero==='.'){
        if(num.includes('.'))null;
        else if(num==='0')setNum(`${num}${numero}`)
        else setNum(`${num}${numero}`)
      }
      else if(num.startsWith('-0'))setNum('-'+numero)
      else setNum(`${numero}`); 
    }
  
    const negativoPositivo=()=>{
      if(num.includes('-')) setNum(num.replace('-',''))
      else  setNum('-'+num.replace('-',''))
    }
  
    const borrar=()=>{
      if(num.length===2 && num.startsWith('-'))setNum('0');
      else if(num.length===1) setNum('0');
      else setNum(num.substring(0,num.length-1));
    }
  
    function separator(numb:String) {
      var str = numb.split('.');
      str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return str.join(".");
    }
  
    const dividir=()=>{
      if(numPeque!=='0'&&num!=='0'){
        let result=Number(numPeque)/Number(num);
        setNumPeque(result.toString())
        setOp('div')
        setNum('0')
      }
      else {setNumPeque(num); setNum('0');setOp('div')}
    };
    const multiplicar=()=>{
      if(numPeque!=='0'){
        let result=Number(numPeque)*Number(num);
        setNumPeque(result.toString())
        setOp('mul')
        setNum('0')
      }
      else {setNumPeque(num); setNum('0');setOp('mul')}
    };
  
    const restar=()=>{
      if(numPeque!=='0'){
        let result=Number(numPeque)-Number(num);
        setNumPeque(result.toString())
        setOp('res')
        setNum('0')
      }
      else {setNumPeque(num); setNum('0');setOp('res')}
    };
  
    const sumar=()=>{
      if(numPeque!=='0'){
        let result=Number(numPeque)+Number(num);
        setNumPeque(result.toString())
        setOp('sum')
        setNum('0')
      }
      else {setNumPeque(num); setNum('0');setOp('sum')}
    };
  
    const resultado=()=>{
      switch(op){
        case 'sum':
          setOp('');
          setNum((Number(numPeque)+Number(num)).toString());
          return setNumPeque('0');
        case 'res':
          setOp('');
          setNum((Number(numPeque)-Number(num)).toString());
          return setNumPeque('0');
        case 'div':
          setOp('');
          setNum((Number(numPeque)/Number(num)).toString());
          return setNumPeque('0');
        case 'mul':
          setOp('');
          setNum((Number(numPeque)*Number(num)).toString());
          return setNumPeque('0');
        default:
          null
      }
    }
  
    const referencia=(a:String)=>{
      switch(a){
        case 'sum': return '+'
        case 'res': return '-'
        case 'mul': return '*'
        case 'div':return '/'
        default:null
      }
    }
    return{
        num,
        numPeque,
        op,
        separator,
        referencia,
        limpiar,
        negativoPositivo,
        borrar,
        dividir,
        escribir,
        multiplicar,
        restar,
        sumar,
        resultado
    }
}
