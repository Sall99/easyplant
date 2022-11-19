import { Link } from "react-router-dom";
import { publicRoutes } from "routes";
import { footerLinks } from "services";

export const Footer = () => {
  return (
    <footer className="max-w-_1140 m-auto py-11 mt-32 border-t border-gray-300 text-gray-200">
      <div className="flex items-center justify-center gap-10">
        {footerLinks.map(({ name, link }, index) => (
          <Link key={index} to={link} className="font-semibold text-base">
            {name}
          </Link>
        ))}
      </div>
      <div className="flex items-center text-xs justify-center gap-10 mt-5">
        <Link to={publicRoutes.termsAndUse.path} className="font-semibold">
          Privacy Policy
        </Link>
        <Link to={publicRoutes.privacyPolicy.path} className="font-semibold">
          Terms of Use
        </Link>
      </div>
      <p className="text-center text-xs mt-4">
        Patent - Copyright © 2021 - <strong>sallaboudaouda@gmail.com</strong>
      </p>
    </footer>
  );
};
