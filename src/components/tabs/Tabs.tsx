import { useContext } from "react";
import tabsStyle from "./Tabs.module.css";
import { MediaContext } from "../../context/AppContext";

const Tabs = () => {
  const { tabActive, setTabActive } = useContext(MediaContext);
  return (
    <section className={tabsStyle.tabsWrapp}>
      <article className={tabsStyle.tabsGroup}>
        <button
          type="button"
          className={tabActive === false ? tabsStyle.btnActive : tabsStyle.btn}
          onClick={() => setTabActive(false)}
        >
          Movies
        </button>
        <button
          type="button"
          className={tabActive === true ? tabsStyle.btnActive : tabsStyle.btn}
          onClick={() => setTabActive(true)}
        >
          TV Shows
        </button>
      </article>
    </section>
  );
};

export default Tabs;
