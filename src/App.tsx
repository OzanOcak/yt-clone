import SideNavBar from "./main_components/SideNavBar";
import TopNavBar from "./main_components/TopNavBar";
import SideNavPage from "./main_components/SideNavPage";
import { useState } from "react";
import MainPage from "./main_components/MainPage";

function App() {
  const [openSide, setOpenSide] = useState<boolean>(false);
  return (
    <div className="flex flex-col">
      <TopNavBar openSide={openSide} setOpenSide={setOpenSide} />
      {openSide && (
        <SideNavPage openSide={openSide} setOpenSide={setOpenSide} />
      )}
      <div className="flex">
        <SideNavBar />
        <div className="flex flex-col">
          <MainPage />
        </div>
      </div>
    </div>
  );
}

export default App;
