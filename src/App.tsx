import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout";
import Home from "./pages/home";
import AboutUs from "./pages/about-us";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          {/* <Route path='/account' element={<AccountPage />} />
          <Route path='/report' element={<ReportPage />} />
          <Route path='/incentives' element={<IncentivesSchemaPage />} />
          <Route path='/deduction' element={<DeductionSchemaPage />} /> */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
