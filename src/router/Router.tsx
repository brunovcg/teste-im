import { Route, Routes } from 'react-router-dom';
import Home from '@/pages/home/Home';
import AdminPanel from '@/pages/admin-papel/AdminPanel';
import NotFound from '@/pages/not-found/NotFound';

function Router() {
  return (
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="admin-panel" element={<AdminPanel />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Router;
