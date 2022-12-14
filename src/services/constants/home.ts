import { publicRoutes } from "routes";

export const homeHeader = [
  {
    title: "Free shipping",
    subtitle: "Delivered to your door",
    icon: "Truck",
  },
  {
    title: "Self-watering ceramic pot",
    subtitle: "Never forget to water again",
    icon: "Ceramic",
  },
  {
    title: "Easy maintenance",
    subtitle: "Worry-free plant care",
    icon: "Maintenance",
  },
];

export const shopIndoorItems = [
  { id: 0, img: "/img/ShopSmall.png", name: "Shop small", category: "small" },
  {
    id: 1,
    img: "/img/ShopMedium.png",
    name: "Shop medium",
    category: "medium",
  },
  { id: 2, img: "/img/ShopLarge.png", name: "Shop large", category: "large" },
  { id: 3, img: "/img/ShopHuge.png", name: "Shop huge", category: "huge" },
];

export const selfWateringItems = [
  {
    icon: "1",
    img: "/img/Simply.png",
    name: "Simply open the lid and fill with water",
  },
  {
    icon: "2",
    img: "/img/ThePlant.png",
    name: "The plant drinks only when it needs",
  },
  {
    icon: "2",
    img: "/img/GetHealthy.png",
    name: "Get healthy worry-free plant",
  },
];

export const footerLinks = [
  { name: "Home", link: publicRoutes.home.path },
  { name: "Shop plants", link: publicRoutes.shopPlants.path },
  { name: "FAQ", link: publicRoutes.faq.path },
  { name: "Talk to us", link: publicRoutes.contact.path },
  { name: "About us", link: publicRoutes.about.path },
];
