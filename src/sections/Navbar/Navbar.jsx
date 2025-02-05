import { useState } from 'react';
import styles from './NavbarStyles.module.css';
import { FiMenu, FiX } from 'react-icons/fi'; // Icônes du menu burger

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Ouvrir/fermer le menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Fermer le menu lorsqu'on clique sur un lien
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={styles.container}>
      {/* Bouton Burger (mobile uniquement) */}
      <button className={styles.burger} onClick={toggleMenu}>
        {isOpen ? <FiX size={30} /> : <FiMenu size={30} />}
      </button>

      {/* Menu */}
      <ul className={`${styles.navMenu} ${isOpen ? styles.open : ''}`}>
        <li>
          <a href="#" onClick={closeMenu}>
            Accueil
          </a>
        </li>
        <li>
          <a href="#projects" onClick={closeMenu}>
            Projets
          </a>
        </li>
        <li>
          <a href="#skills" onClick={closeMenu}>
            Compétences
          </a>
        </li>
        <li>
          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
