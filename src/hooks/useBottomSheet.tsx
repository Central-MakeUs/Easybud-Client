import BottomSheet from '@gorhom/bottom-sheet';
import {useCallback, useRef} from 'react';

export default function useBottomSheet() {
  const ref = useRef<BottomSheet>(null);

  const open = useCallback(() => {
    ref.current?.expand();
  }, []);

  const close = useCallback(() => {
    ref.current?.close();
  }, []);

  return {
    ref,
    open,
    close,
  };
}
