import List from "./list/List";
import mainStyle from "./Main.module.css";
import Search from "./search/Search";
import Tabs from "./tabs/Tabs";

const Main = () => {
  return (
    <main className={mainStyle.mainWrapp}>
      <Tabs />
      <Search />
      <List />
    </main>
  );
};

export default Main;
