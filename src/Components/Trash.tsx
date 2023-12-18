import { useContext } from "react";
import ListasContext from "../context/ListasContext";
import { TarefaType } from "../Types";

function Trash () {
  const {setListas, listas} = useContext(ListasContext);
    return(
        <div
        className="w-52 h-52 border border-black"
        onDragEnter={ (e) => console.log('enterTrash') }
        onDragLeave={ (e) => console.log('leaveTrash') }
        onDragOver={ (e) => {
          e.preventDefault(); console.log('overTrash');
        } }
        onDrop={ (e) => {
          e.preventDefault();
          const data = e.dataTransfer.getData('text');
          console.log(JSON.parse(data))
          const {listName, text} = JSON.parse(data) as TarefaType;  
          setListas({...listas, [listName]: [...listas[listName]
            .filter((it) => it.text !== text)]});
        } }
      >
        trash
      </div>
    )
}

export default Trash;