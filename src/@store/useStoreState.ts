import { useSelector, RootStateOrAny } from 'react-redux';

export const useStoreState = () => {
  const uiState = useSelector((state: RootStateOrAny) => state.UiReducer);

  return {
    uiState,
  }
}
