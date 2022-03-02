import { useLayoutEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from '@/views/Home/Home';
import Detail from '@/views/Detail/Detail';

const ScrollToTop = ({ children }: any) => {
  //TODO: 코드 동작 원리 파헤쳐보기, children 타입 알아보기
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
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
