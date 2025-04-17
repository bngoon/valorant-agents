import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
  const location = useLocation();

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Agents', path: '/agents' },
    { label: 'Weapons', path: '/weapons' },
    { label: 'Loadout', path: '/loadout' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-700 text-white flex justify-around items-center h-16 z-50">
      {navItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={`hover:text-pink-400 transition ${
            location.pathname === item.path ? 'text-pink-500 font-bold' : ''
          }`}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
};

export default NavBar;
