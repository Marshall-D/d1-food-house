import React, {Fragment} from "react";
import Headers from "./components/Layout/Headers";
import Meals from "./components/meals/Meals";

function App() {
  return (
      <Fragment>

          <Headers/>
          <main>
              <Meals/>
          </main>

      </Fragment>

  );
}

export default App;
