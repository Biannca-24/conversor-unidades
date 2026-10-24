import { useState } from "react";

// Quanto vale cada unidade em metros; a partir disso calculamos as conversoes.
const unidades = { m: 1, km: 1000, cm: 0.01, mi: 1609.344 };

export default function App() {
  // Guarda o valor digitado e as unidades selecionadas.
  const [valor, setValor] = useState(1);
  const [de, setDe] = useState("km");
  const [para, setPara] = useState("m");

  // Converte o valor para metros e, em seguida, para a unidade de destino.
  const resultado = (valor * unidades[de]) / unidades[para];

  // Troca as unidades de origem e destino.
  function inverter() {
    setDe(para);
    setPara(de);
  }

  // Interface do conversor.
  return (
    <main className="card">
      <h1>Conversor de comprimentos</h1>

      {/* Campo numérico ligado ao estado valor. */}
      <input
        type="number"
        value={valor}
        onChange={(e) => setValor(e.target.value)}
      />

      {/* Lista suspensa para escolher a unidade de origem. */}
      <select value={de} onChange={(e) => setDe(e.target.value)}>
        {Object.keys(unidades).map((u) => (
          <option key={u}>{u}</option>
        ))}
      </select>

      {/* Botão que inverte as unidades selecionadas. */}
      <button type="button" onClick={inverter} aria-label="Inverter unidades">
        ⇄
      </button>

      {/* Lista suspensa para escolher a unidade de destino. */}
      <select value={para} onChange={(e) => setPara(e.target.value)}>
        {Object.keys(unidades).map((u) => (
          <option key={u}>{u}</option>
        ))}
      </select>

      {/* Mostra o resultado com duas casas decimais e a unidade de destino. */}
      <p className="resultado">
        {resultado.toFixed(2)} {para}
      </p>
    </main>
  );
}