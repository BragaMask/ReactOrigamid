import { useState, useEffect } from "react";
import React from "react";
import "./index.css";

export default function App() {
const [cor, setCor] = useState("white"); //cor -> Variavel || setCor -> Função
const [nome, setNome] = useState("");
const [anagrama, setAnagrama] = useState("");

function geracaoAnagrama() {
    const embaralhar = nome.split("").sort(() => Math.random() - 0.5).join("");
    setAnagrama(embaralhar);
}

return (
    <div className="container" style={{ backgroundColor: cor }}>
    <h1>Trocar Cor de Fundo</h1>

    <div className="botoes">
        <button onClick={() => setCor("red")}>Vermelho</button>
        <button onClick={() => setCor("blue")}>Azul</button>
        <button onClick={() => setCor("green")}>Verde</button>
        <button onClick={() => setCor("yellow")}>Amarelo</button>
        <button onClick ={() => setCor("white")}>Resetar</button>
    </div>

    <h3 className="corAtual">
        Cor atual: {cor}
    </h3>
    <br />
    <h1>Gerar Anagramas</h1>
    <div className="espacoInput"><input type="text" placeholder="Digite a palavra" onChange={(palavra) => setNome(palavra.target.value)} />
    </div>
    <div className="espacoButton"><button onClick={geracaoAnagrama}>Gerar</button></div>
    <h3>{anagrama}</h3>
    </div>
);
}