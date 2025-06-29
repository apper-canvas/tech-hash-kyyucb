import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Layout from './Layout';
import HomePage from '@/components/pages/HomePage';
import ArchivePage from '@/components/pages/ArchivePage';
import NotFoundPage from '@/components/pages/NotFoundPage';
import { routeArray } from './config/routes';
import TaskProvider from '@/context/TaskContext';

function App() {
return (
    <BrowserRouter>
      <div className="h-screen flex flex-col overflow-hidden bg-white">
        <TaskProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              {routeArray.map((route) => (
                <Route 
                  key={route.id} 
                  path={route.path} 
                  element={<route.component />} 
                />
              ))}
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </TaskProvider>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          toastClassName="font-sans"
          className="z-[9999]"
        />
      </div>
    </BrowserRouter>
  );
}

export default App;