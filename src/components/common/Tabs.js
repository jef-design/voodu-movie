import { useState } from "react";
import TabMovie from '../views/search/SearchTabs/TabMovie'
import TabTv from '../views/search/SearchTabs/TabTv'
import TabPeople from '../views/search/SearchTabs/TabPeople'

function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs-but active-tabs" : "tabs-but"}
          onClick={() => toggleTab(1)}
        >
          Movies
        </button>
        <button
          className={toggleState === 2 ? "tabs-but active-tabs" : "tabs-but"}
          onClick={() => toggleTab(2)}
        >
          TV Shows
        </button>
        <button
          className={toggleState === 3 ? "tabs-but active-tabs" : "tabs-but"}
          onClick={() => toggleTab(3)}
        >
          People
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
 
          <TabMovie/>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >


          <TabTv/>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <TabPeople/>
        </div>

      </div>
    </div>
  );
}

export default Tabs;