import { useState, useEffect } from "react";

import styles from './Imc.module.css';

const Imc = () => {
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);

  useEffect(() => {
    return() => {

    }
  }, []);

  const calcImc = () => {
    const imc = (peso / (altura * altura)).toFixed(2);

    if (imc === 0 || altura === 0) {
      return (
        <p>Informe seu peso e altura</p>
      )
    } else if (imc < 18.5) {
      return (
        <p>Abaixo do peso, IMC: {imc}</p>
      )
    } else if (imc >= 18.5 && imc <= 24.9) {
      return (
        <p>Peso normal, IMC: {imc}</p>
      )
    } else if (imc > 24.9 && imc <= 29.9) {
      return (
        <p>Sobrepeso, IMC: {imc}</p>
      )
    } else if (imc > 29.9 && imc <= 34.9) {
      return (
        <p>Obesidade classe I, IMC: {imc}</p>
      )
    } else if (imc > 34.9 && imc <= 39.9) {
      return (
        <p>Obesidade classe II, IMC: {imc}</p>
      )
    } else if (imc > 40) {
      return (
        <p>Obesidade classe III, IMC: {imc}</p>
      )
    }
  }

  return (
    <form>
      <input type="number" placeholder="Peso Ex: 80" onChange={({target}) => setPeso(parseFloat(target.value))} />
      <input type="number" placeholder="Altura Ex: 1.80" onChange={evento => setAltura(parseFloat(evento.target.value))} />
      {calcImc()}
    </form>
  )

}

export default Imc