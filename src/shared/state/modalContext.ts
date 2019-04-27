import { createContext } from 'react';

export const ModalContext = createContext({
  props: { videoId: '' },
  showModal: (props: { videoId: string | undefined }) => { },
  hideModal: () => { }
});