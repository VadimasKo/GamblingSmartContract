import { useCallback, useState } from "react";

import LossModal    from "./lossModal/LossModal";
import WinModal     from "./winModal/WinModal";

type modalModes = 'off' | 'win' | 'loss'


const useModal = (): [JSX.Element, (x: modalModes) => void ] => {
  const [modal, setModal] = useState(<></>);

  const closeModal = () => setModal(<></>)

  const updateModal = useCallback((mode: modalModes) => {
    switch (mode) {
      case 'off':
        setModal(<></>)
        break
      case 'loss':
        setModal(<LossModal onClick={closeModal}/>)
        break
      case 'win':
        setModal(<WinModal onClick={closeModal}/>)
        break
    }
  }, [])

  return [modal, updateModal]
}

export default useModal
