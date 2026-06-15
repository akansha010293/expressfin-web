import { Footer } from "./components/Footer";
import { Topbar } from "./components/Topbar";
import { Outlet } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen min-w-screen">
      <Topbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;