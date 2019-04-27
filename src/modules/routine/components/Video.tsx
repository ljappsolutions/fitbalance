import React from "react";
import YouTube from "react-youtube";
import { ModalContext } from "../../../shared/state/modalContext";
import { DialogTitle, Dialog } from "@material-ui/core";

export class VideoModal extends React.Component {
  public render() {
    const ModalConsumer = ModalContext.Consumer;
    console.log('Rendering modal');

    return (
      <ModalConsumer>
        {({ props, hideModal }) =>
          props && props.videoId ?
            <>
              <Dialog open={true} onClose={hideModal} aria-labelledby="video-modal">
                <DialogTitle id="video-modal-title">Video</DialogTitle>
                <YouTube videoId={props.videoId} opts={{
                  height: 'auto',
                  width: 'auto',
                }} />
              </Dialog>
            </>
            : null
        }
      </ModalConsumer>
    );
  }
}