/* eslint-disable no-unused-vars */
export interface ITabs {
  tabs: {
    id: number;
    category: string;
    title: string;
    subtTitle: string;
    content: React.ReactNode;
  }[];
}
