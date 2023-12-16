import { useState } from 'react';
import ListasContext from './ListasContext';
import { ListasType } from '../Types';

function ListasProvider({ children }: { children: React.ReactNode }) {
  const [listas, setListas] = useState<ListasType>({});
  return (
    <ListasContext.Provider value={ { listas, setListas } }>
      {children}
    </ListasContext.Provider>
  );
}

export default ListasProvider;
