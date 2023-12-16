import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [itens, setItens] = useState<string[]>([]);
  const [itens2, setItens2] = useState<string[]>([]);
  const [novaTarefa, setNovaTarefa] = useState('');
  const [tarefas, setTarefas] = useState<string[]>([]);
  useEffect(() => {
    console.log(itens);
  }, [itens]);
  return (
    <main className="w-screen bg-slate-800 h-screen flex flex-row">
      <div className="w-1/2">
        <div
          draggable
          onDragStart={ (e) => {
            e.dataTransfer.setData('text', 'apenas um teste');
          } }
          onDragEnd={ (e) => console.log('onDragEnd') }
        >
          apenas um teste
        </div>
        <div
          draggable
          onDragStart={ (e) => {
            console.log('onDragStart');
            e.dataTransfer.setData('text', 'eita testando');
          } }
          onDragEnd={ (e) => console.log('onDragEnd') }
        >
          eita testando
        </div>

        <section className="flex flex-row">
          <div
            className="w-96 h-96 border border-black"
            onDragEnter={ (e) => console.log('onDragEnter') }
            onDragLeave={ (e) => console.log('onDragLeave') }
            onDragOver={ (e) => {
              e.preventDefault(); console.log('onDragOver');
            } }
            onDrop={ (e) => {
              e.preventDefault();
              const item = e.dataTransfer.getData('text');
              console.log(item);
              setItens((prev) => [...prev, item]);
              setItens2((prev) => [...prev.filter((i) => i !== item)]);
              setTarefas((prev) => [...prev.filter((itF) => itF !== item)]);
            } }
          >
            {itens && itens.map((item, index) => (
              <p
                draggable
                onDragStart={ (e) => {
                  // console.log(e.detail);
                  e.dataTransfer.setData('text', item);
                } }
                onDragEnd={ (e) => console.log('onDragEnd') }
                key={ index }
              >
                {item}

              </p>
            ))}
          </div>
          <div
            className="w-96 h-96 border border-black"
            onDragEnter={ (e) => console.log('onDragEnter') }
            onDragLeave={ (e) => console.log('onDragLeave') }
            onDragOver={ (e) => {
              e.preventDefault(); console.log('onDragOver');
            } }
            onDrop={ (e) => {
              e.preventDefault();
              const item = e.dataTransfer.getData('text');
              console.log(item);
              setItens2((prev) => [...prev, item]);
              setItens((prev) => [...prev.filter((i) => i !== item)]);
              setTarefas((prev) => [...prev.filter((itF) => itF !== item)]);
            } }
          >
            {itens2 && itens2.map((item, index) => (
              <p
                draggable
                onDragStart={ (e) => {
                  // console.log(e.detail);
                  e.dataTransfer.setData('text', item);
                } }
                onDragEnd={ (e) => console.log('onDragEnd') }
                key={ index }
              >
                {item}

              </p>
            ))}
          </div>
          <div
            className="w-52 h-52 border border-black"
            onDragEnter={ (e) => console.log('enterTrash') }
            onDragLeave={ (e) => console.log('leaveTrash') }
            onDragOver={ (e) => {
              e.preventDefault(); console.log('overTrash');
            } }
            onDrop={ (e) => {
              e.preventDefault();
              const item = e.dataTransfer.getData('text');
              console.log(item);
              setItens((prev) => [...prev.filter((itF) => itF !== item)]);
              setItens2((prev) => [...prev.filter((itF) => itF !== item)]);
              setTarefas((prev) => [...prev.filter((itF) => itF !== item)]);
            } }
          >
            trash
          </div>
        </section>
      </div>
      <div className="w-1/2 flex flex-col items-center pt-20">
        <label htmlFor="tarefa">
          Tarefa
          <input
            className="text-black"
            onChange={ ({ target: { value } }) => setNovaTarefa(value) }
            value={ novaTarefa }
            id="tarefa"
            type="text"
          />
        </label>
        <button
          onClick={ () => setTarefas((prev) => [...prev, novaTarefa]) }
        >
          Adicionar Tarefa

        </button>
        <div>
          {tarefas && tarefas.map((tf) => (
            <p
              draggable
              onDragStart={ (e) => {
                e.dataTransfer.setData('text', tf);
              } }
              onDragEnd={ (e) => console.log('onDragEnd') }
              key={ tf }
            >
              {tf}
            </p>
          ))}
        </div>
      </div>
    </main>
  );
}

export default App;
