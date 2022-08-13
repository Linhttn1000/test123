import { LoadingSpinner } from './shared/components/loading-spinner';
import routes from './configs/configureRoutes';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
const App = () => {
  return (
    <>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          {routes.map((route) => (
            <Route key={route.id} path={route.path} element={route.element} />
          ))}
        </Routes>
      </Suspense>
      <LoadingSpinner />
    </>
  );
};

export default App;
