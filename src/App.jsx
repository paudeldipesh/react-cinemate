import { BrowserRouter as Router } from "react-router-dom";
import { AllRoutes } from "./routes/AllRoutes";
import { Header, Footer } from "./components";
import ScrollToTop from "./utils/scrollToTop";

const App = () => {
  return (
    <div className="dark:bg-slate-800">
      <Router>
        <ScrollToTop />
        <Header />
        <AllRoutes />
        <Footer />
      </Router>
    </div>
  );
};

export default App;
