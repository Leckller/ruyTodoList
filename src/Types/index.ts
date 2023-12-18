export type TarefaType = {
  text: string,
  listName: string,
}

export type ListasType = {
  [key: string]: TarefaType[]
};

export type ListasContextType = {
  listas: ListasType,
  setListas: (p: any) => void,
};
