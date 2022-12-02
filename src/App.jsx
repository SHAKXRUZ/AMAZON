import Routes from "./rautes/Rautes";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { useState, useEffect } from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Footers from "./components/footers/Footers";
import { Overlay } from "./utils";
function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  useEffect(() => {
    if (isSidebarOpen === true) {
      document.body.style.overflow = "hidden";
    }
    else {
      document.body.style.overflow = "auto";
    }
  }, [isSidebarOpen])

  return (
    <>
      <Header isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <Routes />
      <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      {isSidebarOpen && <Overlay setIsSidebarOpen={setIsSidebarOpen} />}
      <Footer />
      <Footers />
    </>
  );
}
export default App;