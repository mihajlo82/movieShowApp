export interface IThemeContext {
  tabActive: boolean;
  setTabActive: (value: boolean) => void;
}

export interface ChildrenProps {
  children: React.ReactNode;
}
