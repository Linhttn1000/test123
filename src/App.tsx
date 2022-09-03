import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import routes from './configs/configureRoutes';
import LoadingSpinner from './shared/components/loading-spinner';
import Wrapper from './shared/components/wrapper';

const App = () => {
  return (
    <>
      <Wrapper>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            {routes.map((route) => {
              return <Route key={route.id} path={route.path} element={route.element} />;
            })}
          </Routes>
        </Suspense>
        <LoadingSpinner />
      </Wrapper>
    </>
  );
};

export default App;
