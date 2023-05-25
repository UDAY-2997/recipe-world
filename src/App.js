import './style/index.css';
import React from 'react';
import { useRoutes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import Menu from './components/Menu';
import RecipeDetails from './components/RecipeDetails';
import AddNew from './components/AddNew';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

const App = () => {
  const routing = useRoutes([
    { path: '/', element: (
        <>
          <HeroBanner />
          <Menu />
        </>
      ) 
    },
    { path: '/recipe/:id', element: (
        <>
          <RecipeDetails />
        </>
      ) 
    },
    { path: '/add-new', element: <AddNew /> },
    { path: '*', element: <Navigate to="/" replace /> }, // Default redirect
  ]);

  return (
    <>
      <Header />
      {routing}
      <BackToTop />
      <Footer />
    </>
  );
};

export default App;
