import { ReactNode } from 'react';
import Footer from './footer/Footer';
import Header from './header/Header';


interface IWrapperProps {
  children: ReactNode;
}

const Wrapper = ({ children }: IWrapperProps) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Wrapper;