export const TOGGLE_SIDEBAR = 'ui/toggleSidebar';
export const TOGGLE_SEARCH_MODAL = 'ui/toggleSearchModal';

export const toggleSidebar = () => {
  return {
    type: TOGGLE_SIDEBAR
  }
};

export const toggleSearchModal = () => {
  return {
    type: TOGGLE_SEARCH_MODAL
  }
};
