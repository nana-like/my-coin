import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '@/views/Home/Home';
import Chart from '@/views/Chart/Chart';
import Detail from '@/views/Detail/Detail';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:coinId" element={<Detail />} />
        <Route path="/chart" element={<Chart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
