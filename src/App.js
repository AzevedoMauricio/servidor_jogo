import { useEffect, useState } from "react";
import "./reset.css";
import {
  Button,
  Container,
  Input,
  InputWrapper,
  Title,
  Message,
} from "./style";

function App() {
  const restart = () => {
    setJogador(1);
    setMensagem("");
    setNumero(Math.floor(Math.random() * 10) + 1);
  };

  useEffect(() => {
    setNumero(Math.floor(Math.random() * 10) + 1);
  }, []);

  const [palpite, setPalpite] = useState(null);
  const [numero, setNumero] = useState(0);
  const [jogador, setJogador] = useState(1);
  const [mensagem, setMensagem] = useState("");

  const handleChange = (event) => {
    setPalpite(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (palpite == numero) {
      setMensagem(`Jogador ${jogador} venceu!`);
    } else {
      setJogador(jogador == 1 ? 2 : 1);
    }
  };

  return (
    <div className="App">
      <Container>
        <Title>Vez do jogador {jogador}</Title>
        <Title>Adivinhe o número (Entre 1 e 10)</Title>
        <InputWrapper onSubmit={handleSubmit}>
          <Input onChange={handleChange} placeholder="Digite um número" />
          <Button type="submit">Chutar</Button>
        </InputWrapper>
        <Message>{mensagem}</Message>
        <Button onClick={restart}>Reiniciar</Button>
      </Container>
    </div>
  );
}

export default App;
