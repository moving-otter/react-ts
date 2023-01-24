import { RootStateOrAny, useSelector } from 'react-redux';

export const useStoreState = () => {
  const uiState = useSelector((state: RootStateOrAny) => state.UiReducer);
  const todoState = useSelector((state: RootStateOrAny) => state.TodoReducer);

  return {
    uiState,
    todoState,
  };
};
