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
          console.log('onDragStart');
          e.dataTransfer.setData('text', 'apenas um teste');
        } }
        onDragEnd={ (e) => console.log('onDragEnd') }
      >
        apenas um teste
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
        a
        {itens && itens.map((item, index) => (
          <p key={ index }>{item}</p>
        ))}
      </div>
    </>
  );
}

export default App;
