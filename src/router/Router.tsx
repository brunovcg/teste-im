import { Route, Routes } from 'react-router-dom';
import Home from '@/pages/home/Home';
import AdminPanel from '@/pages/admin-papel/AdminPanel';
import NotFound from '@/pages/not-found/NotFound';
import Dashboard from '@/pages/admin-papel/modules/dashboard/Dashboard';
import ProcessRunner from '@/pages/admin-papel/modules/process-runner/ProcessRunner';
import Parameters from '@/pages/admin-papel/modules/parameters/Parameters';
import Analytics from '@/pages/admin-papel/modules/analytics/Analytics';
import Reports from '@/pages/admin-papel/modules/reports/Reports';
import ScriptsRunner from '@/pages/admin-papel/modules/scripts-runner/ScriptsRunner';

function Router() {
  return (
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="admin-panel" element={<AdminPanel />}>
        <Route path="" element={<Dashboard />} />
        <Route path="process-runner" element={<ProcessRunner />} />
        <Route path="parameters" element={<Parameters />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="Reports" element={<Reports />} />
        <Route path="scripts-runner" element={<ScriptsRunner />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Router;
