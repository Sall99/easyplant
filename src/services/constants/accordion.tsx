import { Icon } from "components";
import {
  hugePlantImages,
  largePlantImages,
  mediumPlantImages,
  smallPlantImages,
} from "./shop-data";

export const allPlants = [
  ...smallPlantImages,
  ...mediumPlantImages,
  ...largePlantImages,
  ...hugePlantImages,
];

// Plant Biography
export const plantBiographyData = [
  "Native to southern Mexico and Central America, Monstera displays breathtakingly large foliage that earn it the name after the Latin word for ‘monstrous’.",

  "Its famously perforated leaves, called fenestrations, are a unique adaptation that lets sunlight pass through its broad canopy and reach the forest floor. ",

  "Their unique patterns are genetically predetermined when the leaf sprouts, and with time become larger and more common, while the leaves get larger and darker. ",

  "Monstera grows best in a well-lit space. Avoid placing it in direct sunlight or spaces without natural light.",
];

// How Self Watering Works
export const selfWateringData = [
  { icon: "1", title: "Simply open the lid and fill with water" },
  { icon: "2", title: "The plant drinks only when it needs" },
  {
    icon: "3",
    title: "Get healthy plants that don't die and  easy to maintain",
  },
];
export const BenefitsData = [
  { icon: "Ok", tile: "Carefree and convenient" },
  { icon: "Ok", tile: "Never worry about when to water" },
  { icon: "Ok", tile: "Healthier plants that live longer" },
];

// What's included data
export const whatsIncludedData = [
  { icon: "Sprout", tile: "Healthy live plant in premium soil" },
  { icon: "Height", tile: `44"-58" tall (including pot) / 6" wide` },
  { icon: "Synchronize", tile: "Self-watering, beautiful ceramic pot " },
  { icon: "UPS", tile: "Free UPS shipping to your doorstep" },
  { icon: "stand", tile: "Premium bamboo wooden stand" },
  {
    icon: "OrganicFood",
    tile: "All plants arrive in healthy condition,or we’ll replace them for free",
  },
];
export const WhatsIncluded = () => {
  return (
    <div className="flex flex-col gap-5">
      {whatsIncludedData.map((item, index) => (
        <div key={index} className="flex items-center">
          <Icon name={item.icon} className="mr-2" />
          <p className="">{item.tile}</p>
        </div>
      ))}
    </div>
  );
};

export const PlantBiography = () => {
  return (
    <div className="flex flex-col gap-4">
      {plantBiographyData.map((bio, index) => (
        <p key={index}>{bio}</p>
      ))}
    </div>
  );
};

export const SelfWatering = () => {
  return (
    <div>
      <div className="flex flex-col items-center gap-5">
        <div className="flex flex-col gap-5">
          {selfWateringData.map(({ icon, title }, index) => (
            <div key={index} className="flex items-center gap-4">
              <Icon name={icon} />
              <p>{title}</p>
            </div>
          ))}
        </div>
        <img src="/img/EasyPlant.png" alt="" className="w-full" />
      </div>
      <div className="text-gray-200">
        <h2 className="font-semibold py-5">easyplant benifits</h2>
        <div className="flex flex-col gap-4">
          {BenefitsData.map(({ icon, tile }, index) => (
            <div key={index} className="flex items-center gap-4">
              <Icon name={icon} />
              <p>{tile}</p>
            </div>
          ))}
        </div>
      </div>
      <table className="table-auto w-full mt-5 table-rouded-corners font-Montserrat font-semibold">
        <thead>
          <tr className="bg-gray-500">
            <th className="text-left text-sm">Advantages</th>
            <th className="text-left text-base text-green-100 font-bold italic">
              easyplant
            </th>
            <th className="text-left">Competitors</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Water every</td>
            <td className="text-green-100">Every 2 Months</td>
            <td className="text-red-100">Every 2 Weeks</td>
          </tr>
          <tr>
            <td>Overwatering</td>
            <td className="text-green-100">Never</td>
            <td className="text-red-100">Common</td>
          </tr>
          <tr>
            <td>Underwatering</td>
            <td className="text-green-100">Never</td>
            <td className="text-red-100">Common</td>
          </tr>
          <tr>
            <td>Easy water check</td>
            <td>
              <Icon name="Ok" />
            </td>
            <td>
              <Icon name="Cancel" />
            </td>
          </tr>
          <tr>
            <td>Stable root growth</td>
            <td>
              <Icon name="Ok" />
            </td>
            <td>
              <Icon name="Cancel" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export const productAccordion = [
  {
    title: "Plant biography",
    Content: PlantBiography,
  },
  {
    title: "How self-watering works?",
    Content: SelfWatering,
  },
  {
    title: "What's included",
    Content: WhatsIncluded,
  },
];

export const WhyDoPlantShipsDifferently = () => {
  return (
    <div className="">
      <p>
        You never know what adventures a plant can get into making its way to
        your home! Most of our small and medium plants ship in their nursery
        grow pot to allow for a safe and comfy ride all the way to your
        doorstep. <br /> Allowing plants to stay in their original pot while
        being shipped helps reduce the risk of stress and shock that could
        happen if they were to be placed in a new pot before leaving the
        greenhouse. Most of our younger, mini and x-small plants ship directly
        potted; they don’t seem to mind and we take extra precautions here.{" "}
        <br /> In our retail locations, we offer to freshly pot plants in-store
        for our customers. Plants potted in our shops have a shorter journey to
        your home so we love offering this service for local plant parents.
      </p>
    </div>
  );
};
export const HowWillMyPlantArrive = () => {
  return (
    <div className="">
      <p>
        You never know what adventures a plant can get into making its way to
        your home! Most of our small and medium plants ship in their nursery
        grow pot to allow for a safe and comfy ride all the way to your
        doorstep. <br /> Allowing plants to stay in their original pot while
        being shipped helps reduce the risk of stress and shock that could
        happen if they were to be placed in a new pot before leaving the
        greenhouse. Most of our younger, mini and x-small plants ship directly
        potted; they don’t seem to mind and we take extra precautions here.{" "}
        <br /> In our retail locations, we offer to freshly pot plants in-store
        for our customers. Plants potted in our shops have a shorter journey to
        your home so we love offering this service for local plant parents.
      </p>
    </div>
  );
};

export const WhatIfMyOrderIsAGift = () => {
  return (
    <div className="">
      <p>
        You never know what adventures a plant can get into making its way to
        your home! Most of our small and medium plants ship in their nursery
        grow pot to allow for a safe and comfy ride all the way to your
        doorstep. <br /> Allowing plants to stay in their original pot while
        being shipped helps reduce the risk of stress and shock that could
        happen if they were to be placed in a new pot before leaving the
        greenhouse. <br /> Most of our younger, mini and x-small plants ship
        directly potted; they don’t seem to mind and we take extra precautions
        here. In our retail locations, we offer to freshly pot plants in-store
        for our customers. Plants potted in our shops have a shorter journey to
        your home so we love offering this service for local plant parents.
      </p>
    </div>
  );
};

export const WhyDoesMyPlanterNotHaveADrainageHole = () => {
  return (
    <div className="">
      <p>
        You never know what adventures a plant can get into making its way to
        your home! Most of our small and medium plants ship in their nursery
        grow pot to allow for a safe and comfy ride all the way to your
        doorstep. <br /> Allowing plants to stay in their original pot while
        being shipped helps reduce the risk of stress and shock that could
        happen if they were to be placed in a new pot before leaving the
        greenhouse. Most of our younger, mini and x-small plants ship directly
        potted; they don’t seem to mind and we take extra precautions here.{" "}
        <br /> In our retail locations, we offer to freshly pot plants in-store
        for our customers. Plants potted in our shops have a shorter journey to
        your home so we love offering this service for local plant parents.
      </p>
    </div>
  );
};

export const DoIhaveToRepotMyPlantOnceItArrives = () => {
  return (
    <div className="">
      <p>
        You never know what adventures a plant can get into making its way to
        your home! Most of our small and medium plants ship in their nursery
        grow pot to allow for a safe and comfy ride all the way to your
        doorstep. <br /> Allowing plants to stay in their original pot while
        being shipped helps reduce the risk of stress and shock that could
        happen if they were to be placed in a new pot before leaving the
        greenhouse. <br /> Most of our younger, mini and x-small plants ship
        directly potted; they don’t seem to mind and we take extra precautions
        here. In our retail locations, we offer to freshly pot plants in-store
        for our customers. Plants potted in our shops have a shorter journey to
        your home so we love offering this service for local plant parents.
      </p>
    </div>
  );
};

export const faqAccordion = [
  {
    title: "How will my plant arrive?",
    Content: HowWillMyPlantArrive,
  },
  {
    title: "What if my order is a gift?",
    Content: WhatIfMyOrderIsAGift,
  },
  {
    title: "Why does my planter not have a drainage hole?",
    Content: WhyDoesMyPlanterNotHaveADrainageHole,
  },
  {
    title: "Do I have to repot my plant once it arrives?",
    Content: DoIhaveToRepotMyPlantOnceItArrives,
  },
  {
    title: "Why do some plants ship differently?",
    Content: WhyDoPlantShipsDifferently,
  },
];
