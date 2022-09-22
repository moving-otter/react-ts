import { useSelector, RootStateOrAny } from 'react-redux';

export const useStoreState = () => {
  const uiState = useSelector((state: RootStateOrAny) => state.UiReducer);
  const cartState = useSelector((state: RootStateOrAny) => state.CartReducer);
  const todoState = useSelector((state: RootStateOrAny) => state.TodoReducer);

  return {
    uiState,
    cartState,
    todoState
  }
}
