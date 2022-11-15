import { publicRoutes } from "routes";
import { AiOutlineLogin, AiOutlineUserAdd } from "react-icons/ai";

export const navLinks = [
  {
    path: publicRoutes.signIn.path,
    name: publicRoutes.signIn.name,
    Icon: AiOutlineLogin,
  },
  {
    path: publicRoutes.signUp.path,
    name: publicRoutes.signUp.name,
    Icon: AiOutlineUserAdd,
  },
];
