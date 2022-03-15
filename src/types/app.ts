import { State } from "zustand";

export type AppProps = {
  navbarOpen: boolean;
  sidebarOpen: boolean;
  searchText: string;
};

export interface IAppState extends AppProps, State {
  toggleSidebar: () => void;
  setApp: (key: keyof AppProps, value: AppProps[typeof key]) => Promise<any>;
}
