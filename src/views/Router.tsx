import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '@/views/Home';
import Chart from '@/views/Chart';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:coinId" element={<p>코인!</p>} />
        <Route path="/chart" element={<Chart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
