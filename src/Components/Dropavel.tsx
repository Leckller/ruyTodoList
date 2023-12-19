import { useContext, useEffect, useState } from 'react';
import ListasContext from '../context/ListasContext';
import { TarefaType } from '../Types';

function Dropavel({ listName }: { listName: string }) {
  const { listas, setListas } = useContext(ListasContext);
  const [btn, setBtn] = useState(false);
  const [textA, setTextA] = useState('');
  console.log(listas)
  useEffect(() => {}, [listas])
  return (
    <div
      className="w-96 h-96 border relative border-black"
      onDragEnter={ (e) => console.log('onDragEnter') }
      onDragLeave={ (e) => console.log('onDragLeave') }
      onDragOver={ (e) => {
        e.preventDefault(); console.log('onDragOver');
      } }
      onDrop={ (e) => {
        e.preventDefault();
        const item = e.dataTransfer.getData('text');
        if (listas[listName]) {
          setListas((prev) => ({ ...prev, [listName]: [...listas[listName], item] }));
        } else {
          setListas((prev) => ({ ...prev, [listName]: [item] }));
        }
      } }
    >
      {btn && (
        <div className='absolute h-full bg-gray-400 w-full'>
          <div className='w-full text-2xl items-center flex flex-row p-5 border-b justify-between  border-black h-[20%]'>
            <h2>Adicionar Nova Tarefa</h2>
            <button onClick={() => setBtn(prev => !prev)}>X</button>
          </div>
          <div className='h-[60%]'>
            <textarea 
            value={textA}
            onChange={({target: {value}}) => setTextA(value)}
            className='h-full outline-none resize-none w-full text-black'></textarea>
          </div>
          <div className='h-[20%]'>
            <button onClick={() => {
              setBtn(prev => !prev);
              if (listas[listName]) {
                setListas({...listas, [listName]: [...listas[listName], {text: textA, listName}]})
              } else {
                setListas({ ...listas, [listName]: [{text: textA, listName}] });
              }
            }}>Adicionar</button>
          </div>
        </div>
      )}
      <div className='w-full text-2xl items-center flex flex-row p-5 border-b justify-between  border-black h-[20%]'>
        <h2>{listName}</h2>
        <div>
         <button onClick={() => setBtn(prev => !prev)}>+</button>
        </div>
      </div>
      {listas[listName] && listas[listName].map((item, index) => (
        <p
          draggable
          onDragStart={ (e) => {
            e.dataTransfer.setData('text', JSON.stringify(item));
          } }
          onDragEnd={ (e) => console.log('onDragEnd') }
          key={ index }
        >
          {JSON.parse(item).text}

        </p>
      ))}
    </div>
  );
}

export default Dropavel;
