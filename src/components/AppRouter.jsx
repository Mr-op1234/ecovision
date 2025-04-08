import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import ScrollToTop from './ScrollToTop';
import Home from '../pages/Home';
import UNSDGs from '../pages/UNSDGs';
import UnderstandingEnvironment from '../pages/UnderstandingEnvironment';
import SustainableCities from '../pages/SustainableCities';
import SustainableEnergy from '../pages/SustainableEnergy';
import WaterSanitation from '../pages/WaterSanitation';
import WasteManagement from '../pages/WasteManagement';
import FoodSecurity from '../pages/FoodSecurity';
import SustainableManagement from '../pages/SustainableManagement';
import ChatIframePage from '../pages/ChatIframePage';
import ClimateChangePage from '../pages/ClimateChangePage';
import ActionStepsPage from '../pages/ActionStepsPage';

// Import placeholder for pages we'll create later
const PlaceholderPage = ({ title }) => (
  <div style={{ padding: '100px 20px', textAlign: 'center' }}>
    <h1>{title}</h1>
    <p>This page is under construction. Check back soon!</p>
  </div>
);

const AppRouter = () => {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/understanding-environment" element={<UnderstandingEnvironment />} />
          <Route path="/un-sdgs" element={<UNSDGs />} />
          <Route path="/sustainable-management" element={<SustainableManagement />} />
          <Route path="/climate-change" element={<ClimateChangePage />} />
          <Route path="/water-sanitation" element={<WaterSanitation />} />
          <Route path="/sustainable-cities" element={<SustainableCities />} />
          <Route path="/sustainable-energy" element={<SustainableEnergy />} />
          <Route path="/waste-management" element={<WasteManagement />} />
          <Route path="/food-security" element={<FoodSecurity />} />
          <Route path="/action-steps" element={<ActionStepsPage />} />
          <Route path="/chat" element={<ChatIframePage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default AppRouter;