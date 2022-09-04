import { ReactNode } from 'react';
import Footer from '../footer';
import Header from '../header';

interface IWrapperProps {
  children: ReactNode;
}

const Wrapper = ({ children }: IWrapperProps) => {
  return (
    <>
      <Header />
      {children}
      {/* <Footer /> */}
    </>
  );
};

export default Wrapper;
