import { Icon } from "components/ui";
import { Link } from "react-router-dom";
import { navLinks } from "services";

export const Header = () => {
  return (
    <header className="bg-hero-pattern h-_700 bg-cover bg-center">
      <div className="flex justify-between items-center text-sm font-normal leading-_17.26 text-gray-100 max-w-_1140 m-auto py-5">
        <Icon name="Logo" />
        <div>
          <ul className="flex items-center gap-5">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link to={link.path}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-2">
          <Icon name="Cart" />
          <Link to="/cart">Cart</Link>
        </div>
      </div>
    </header>
  );
};
