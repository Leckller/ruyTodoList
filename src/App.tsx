import { useState } from 'react';
import './App.css';
import Dropavel from './Components/Dropavel';
import Trash from './Components/Trash';
import { TarefaType } from './Types';

function App() {
  const [novaTarefa, setNovaTarefa] = useState<TarefaType>({
    listName: '',
    text: '',
  });
  const [tarefas, setTarefas] = useState<TarefaType[]>([]);
  return (
    <main className="w-screen bg-slate-800 h-screen flex flex-row">
      <div className="w-1/2">
        <section className="flex flex-row">
          <Dropavel listName="lista1" />
          <Dropavel listName="lista2" />
          <Trash/>
        </section>
      </div>

      <div className="w-1/2 flex flex-col items-center pt-20">
        <label htmlFor="tarefa">
          Tarefa
          <input
            className="text-black"
            onChange={ ({ target: { value } }) => setNovaTarefa({...novaTarefa, text: value}) }
            value={ novaTarefa.text }
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
          {tarefas && tarefas.map((tf,i) => (
            <p
              draggable
              onDragStart={ (e) => {
                e.dataTransfer.setData('text', JSON.stringify(tf));
              } }
              onDragEnd={ () => console.log('onDragEnd') }
              key={ i }
            >
              {tf.text}
            </p>
          ))}
        </div>
      </div>
    </main>
  );
}

export default App;
