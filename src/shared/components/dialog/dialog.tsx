import {
  useState,
  useImperativeHandle,
  forwardRef,
  ReactElement,
} from 'react';

import {
  BackDrop,
  DialogBody,
  Divider
} from './styled.components';

type propsType = {
  title: any,
  onClose?: () => void,
  children: any,
};

export type DialogHandler = {
  open: (v: boolean) => void,
};

function Dialog({ title, onClose, children }: propsType, ref: any): ReactElement<typeof Dialog | DialogHandler> | null {
  const [open, setOpen] = useState<boolean>(false);

  useImperativeHandle(ref, () => ({
    open: (value: boolean) => setOpen(value),
  }));

  const closeModal = (_: any) => {
    // Callback to execute stuff when the modal closes.
    if (onClose) onClose();
    setOpen(false);
  };

  return open ? (
    <BackDrop onClick={closeModal}>
      <DialogBody
        $ai="flex-start"
        onClick={(e: any) => e.stopPropagation()}
      >
        {title}
        <Divider />
        {children}
      </DialogBody>
    </BackDrop>
  ) : null;
}

export default forwardRef(Dialog);
