import React, {useState,useEffect} from 'react';
import Hearth from './assets/Hearth.png';
import './App.css';
import { BiInfinite } from 'react-icons/bi';

function App() {
  const [name,setname] = useState<any>(null)

  useEffect(() => {
    const arr = window.location.pathname.split('/');

    setname(arr[1])
  },[])

  const text: any = {
    'hewder': 'Obrigada por tudo q vc faz por mim sempre q eu preciso,vc é muito especial pra mim. De vdd,o q vc fez e faz por mim é surreal msm seu amor por mim não ser na mesma intensidade. Acho q ninguém faz ou faria tudo o q vc faz por mim, principalmente por que você está namorando, e eu não consigo parar de pensar em nos juntos. Mas sério msm, a cada vez que conversamos meu coração se acalma e eu fico com borboletas no estomâgo. Você sempre segura minha mão quando estou mal e agoniada, mas enfim, eu desejo muito que você consiga me ver do mesmo jeito que eu te vejo, como a pessoa mais incrivel e apaixonavel do mundo. Eu te amo muito e gostaria de saber, vamos compartilhar essa vida juntos? Vc quer ser meu duo do amor?',
    'elcoss': 'Simplesmente Perfeito',
    'ketlyn': 'A mais gostosa',
  }
  
  const mensagem: any = {
    'hewder': 'Eu percebi que não importa aonde esteja, ou o que esteja fazendo, ou com quem esteja. Eu vou sempre, verdadeiramente, completamente, amar você, Hewder',
    'elcoss': 'Simplesmente Perfeito',
    'ketlyn': 'A mais gostosa',
  }

  if(name === null){
    return <div />
  }

  return (
    <div className="App">
      <h1 className='title'>Tempo que eu vou te amar, {name}</h1>
      <BiInfinite size='150px' color='#fff' />
      <img src={Hearth} alt="manda pix" className='ketlyngostosa' />
      <h2 className='msg'>{mensagem[name]}</h2>
      <p className="Text" >{text[name]}</p>
      <img src={Hearth} alt="manda pix" className='ketlyngostosa' />
    </div>
  );
}

export default App;
