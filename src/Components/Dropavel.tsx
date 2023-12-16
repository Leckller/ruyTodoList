function Dropavel({ listName }: { listName: string[] }) {
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
        console.log(item);
      } }
    >
      {listName && listName.map((item, index) => (
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
  );
}

export default Dropavel;
