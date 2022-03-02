import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from '@/views/Home/Home';
import ChartView from '@/views/ChartView/ChartView';
import Detail from '@/views/Detail/Detail';
import { useLayoutEffect } from 'react';

const ScrollToTop = ({ children }: any) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

function Router() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </ScrollToTop>
      <Routes>
        <Route path="/:coinId" element={<Detail />} />
        <Route path="/chart" element={<ChartView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
