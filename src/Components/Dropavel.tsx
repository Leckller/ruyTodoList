import { useContext } from 'react';
import ListasContext from '../context/ListasContext';

function Dropavel({ listName }: { listName: string }) {
  const { listas, setListas } = useContext(ListasContext);
  return (
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
        if (listas[listName]) {
          setListas((prev) => ({ ...prev, [listName]: [...listas[listName], item] }));
        } else {
          setListas((prev) => ({ ...prev, [listName]: [item] }));
        }
      } }
    >
      {listas[listName] && listas[listName].map((item, index) => (
        <p
          draggable
          onDragStart={ (e) => {
            e.dataTransfer.setData('text', item);
          } }
          onDragEnd={ (e) => console.log('onDragEnd') }
          key={ index }
        >
          {item}

        </p>
      ))}
    </div>
  );
}

export default Dropavel;
