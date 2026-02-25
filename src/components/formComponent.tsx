
import { useState } from 'react';
import { Input } from 'antd';
import { Button } from 'antd';

type FormComponentprops = {
    className ?: string
}




export function FormComponent ({ className } : FormComponentprops){
const [result, setResult] = useState(0);

const [numero1, setNumero1] = useState(0);
const [numero2, setNumero2] = useState(0);


const invocasomma = async (numero1 : number, numero2: number) => {
  try {
    console.log("Invocazione somma con numeri: ", numero1, numero2);
    const response = await fetch(`http://localhost:3000/somma?num1=${numero1}&num2=${numero2}`);  
    console.log("Response ", response);
    const data = await response.text();
    console.log("Data ", data);
    setResult(parseInt(data));
    console.log('Risultato della somma:', data);
  } catch (error) {
    console.error('Errore durante la chiamata alla somma:', error);
  } 
};

const invocasottrazione = async (numero1: number, numero2: number) => {
  try {
    console.log("Invocazione sottrazione con numeri: ", numero1, numero2);
    const response = await fetch(`http://localhost:3000/sottrazione?num1=${numero1}&num2=${numero2}`);  
    const data = await response.text();
    console.log("Data ", data);
    setResult(parseInt(data));
    console.log('Risultato della sottrazione:', data);
  } catch (error) {
    console.error('Errore durante la chiamata alla sottrazione:', error);
  } 
};

const invocamultiplicazione = async (numero1: number, numero2: number) => {
  try {
    console.log("Invocazione moltiplicazione con numeri: ", numero1, numero2);
    const response = await fetch(`http://localhost:3000/multiplicazione?num1=${numero1}&num2=${numero2}`);    
    const data = await response.text();
    console.log("Data ", data);
      setResult(parseInt(data));
    console.log('Risultato della moltiplicazione:', data);
  }
    catch (error) {
    console.error('Errore durante la chiamata alla moltiplicazione:', error);
  }
};

const invocaDivisione = async (numero1: number, numero2: number) => {
  try {
    console.log("Invocazione divisione con numeri: ", numero1, numero2);
    const response = await fetch(`http://localhost:3000/Divisione?num1=${numero1}&num2=${numero2}`);    
    const data = await response.text();
    console.log("Data ", data);
      setResult(parseInt(data));
    console.log('Risultato della divisione:', data);
  }
    catch (error) {
    console.error('Errore durante la chiamata alla divisione:', error);
  }
};

return(
  <div>
    <h1>operatori</h1>
    <div className="min-h-screen flex items-center justify-center px-4 ">
<div className={className}>
       <div className='w-[450px] h-[100px] border border-1 mt-4 justify-center align-center bg-gray-200'>
          <div className='flex flex gap-2 mt-4 justify-center align-center'>
            <Input placeholder="Num1" value={numero1} onChange={(e) => setNumero1(Number(e.target.value))}/>
            <Input placeholder="Num2" value={numero2} onChange={(e) => setNumero2(Number(e.target.value)) }/>
        </div>
       </div>
    
    <div className='flex gap-4 justify-center align-center mt-4'>
     <Button onClick={() => invocasomma(numero1, numero2)}>Addizione</Button>
     <Button onClick={() => invocasottrazione(numero1, numero2)}>Sottorazione</Button>
     <Button onClick={() => invocamultiplicazione(numero1, numero2)}>Multiplicazione</Button>
     <Button onClick={() => invocaDivisione(numero1, numero2)}>Divisione</Button>
    </div>

    <div>
      risultato operazione bella : {result}
    </div>
    
</div>
  </div>
  </div>
  


)
}
