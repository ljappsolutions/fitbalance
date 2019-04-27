import React from "react";
import { ModalContext } from "./modalContext";

interface IModalProviderState {
  props: { videoId: string },
  showModal: (props) => any,
  hideModal: () => any,
}

export class ModalProvider extends React.Component<{}, IModalProviderState> {
  constructor(props) {
    super(props);
    this.state = {
      props: { videoId: '' },
      showModal: this.showModal,
      hideModal: this.hideModal
    };
  }

  showModal = (props: { videoId: string }) => {
    console.log('Showing modal');
    this.setState({
      props
    });
  };

  hideModal = () => this.setState({
    props: { videoId: '' },
  });

  public render() {
    return (
      <ModalContext.Provider value={this.state}>
        {this.props.children}
      </ModalContext.Provider>
    )
  }
}