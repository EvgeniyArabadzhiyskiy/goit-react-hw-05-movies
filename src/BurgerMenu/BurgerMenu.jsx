import { useState } from 'react';
import { elastic as Menu } from 'react-burger-menu';
import { stylesMune } from './BurgerMunuStyles';

const BurgerMenu = () => {
  const [menuOpen, setmMenuOpen] = useState(false);

  const showSettings = event => {
    event.preventDefault();
    setmMenuOpen(false);
  };

  const handleStateChange = state => {
    setmMenuOpen(state.isOpen);
  };

    const disabledBurger = () => {
      const screenWidth = window.screen.width;
      const disabledBurgericon = screenWidth > 468 || menuOpen === true;
      return disabledBurgericon ? false : null;
    };

  return (
    <Menu
      right
        customBurgerIcon={disabledBurger()}
      styles={stylesMune}
      isOpen={menuOpen}
      onStateChange={state => handleStateChange(state)}
      pageWrapId={'page-wrap'}
      outerContainerId={'outer-container'}
    >
      <p onClick={showSettings}>Home</p>
      <p onClick={showSettings}>About</p>
      <p onClick={showSettings}>Contact</p>
      <p onClick={showSettings}>Settings</p>
    </Menu>
  );
};

export default BurgerMenu;
