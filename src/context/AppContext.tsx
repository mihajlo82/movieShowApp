import { createContext } from "react";
import {
  IThemeContext,
  ChildrenProps,
} from "../types/context_app/context_type";
import useFetch from "./useFetch";
export const MediaContext = createContext<IThemeContext | any>({});

const AppContext = ({ children }: ChildrenProps) => {
  const { medias, tabActive, setTabActive, searchVal, setSearchVal } =
    useFetch();

  return (
    <MediaContext.Provider
      value={{
        tabActive,
        setTabActive,
        medias,
        searchVal,
        setSearchVal,
      }}
    >
      {children}
    </MediaContext.Provider>
  );
};

export default AppContext;
