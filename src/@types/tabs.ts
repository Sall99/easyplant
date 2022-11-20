/* eslint-disable no-unused-vars */
export interface ITabs {
  data: { defaultData: [] };
  defaultTab: string | string;
  className: string;
  onChange: (tab: number) => void;
  containerClassName: string;
  center: boolean;
}
