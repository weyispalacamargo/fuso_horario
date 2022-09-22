import { useEffect, useState } from "react";

//valor fixo
/* const Horario = () => {

    return <div>20:03</div>
} */

//State Estático - 1º Passo
/* const Horario = () => {

    const [hora, setHora] = useState('20:07')

    return <div>{hora}</div>

} */

//State Dinâmico - 2º Passo
/* const Horario = () => {

    const atual = new Date().toLocaleTimeString();

    const [hora, setHora] = useState(atual)

    return <div>{atual}</div>
} */

//State Dinâmico - 3º Passo - atualização automática

/* const Horario = () => {

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  })

  function addZero(i: any) {
    if (i < 10) { i = "0" + i }
    return i;
  }

  const hours = addZero(time.getHours());
  const minutes = addZero(time.getMinutes());
  const seconds = addZero(time.getSeconds());

  return <div>{hours}:{minutes}:{seconds}</div>
} */

//State Dinâmico - 4º Passo - Botões para incrementar e decrementar
const Horario = () => {

  return <div>Ola</div>
}

export default Horario;