import { Tabs } from "components";
import { shopTabsItems } from "services";

export const Shop = () => {
  return (
    <section className="mt-_10 min-h-screen max-w-_1140 m-auto px-8">
      <Tabs tabs={shopTabsItems} />
    </section>
  );
};
