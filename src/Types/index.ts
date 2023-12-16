export type ListasType = {
  [key: string]: []
};

export type ListasContextType = {
  listas: ListasType,
  setListas: (p: ListasType) => void,
};
