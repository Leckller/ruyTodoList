import ListasContext from './ListasContext';

function ListasProvider({ children }: { children: React.ReactNode }) {
  return (
    <ListasContext.Provider value={ { listas: [] } }>
      {children}
    </ListasContext.Provider>
  );
}

export default ListasProvider;
