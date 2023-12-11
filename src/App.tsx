import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [itens, setItens] = useState<string[]>([]);
  useEffect(() => {
    console.log(itens);
  }, [itens]);
  return (
    <>
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
          e.dataTransfer.setData('text', 'eita testando');
        } }
        onDragEnd={ (e) => console.log('onDragEnd') }
      >
        eita testando
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
          setItens((prev) => [...prev, item]);
        } }
      >
        {itens && itens.map((item, index) => (
          <p
            draggable
            onDragStart={ (e) => {
              console.log(e.detail);
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
        } }
      >
        trash
      </div>
    </>
  );
}

export default App;
