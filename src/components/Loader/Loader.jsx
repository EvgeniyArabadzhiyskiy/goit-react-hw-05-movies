import { createPortal } from 'react-dom';
import { Circles } from 'react-loader-spinner';
import { Overlay } from 'components/Overlay/Overlay';

const loaderRoot = document.querySelector('#loader-root');

const Loader = () => {
  return createPortal(
    <Overlay>
      <Circles
        color="orangered"
        height={300}
        width={300}
        ariaLabel="loading-indicator"
      />
    </Overlay>,
    loaderRoot
  );
};

export default Loader;
