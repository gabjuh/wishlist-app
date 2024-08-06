import './App.css'
import ProductTable from './components/ProductTable';
import AddProduct from './components/AddProduct';
import Nav from './components/Nav';
import { useState } from 'react';
import Letter from './components/Letter';
import Footer from './components/Footer';

function App() {

  const [isProductFormActive, setIsProductFormActive] = useState<boolean>(false);
  const [selectedId, setSelectedId] = useState<string | undefined>();
  const isAdminLoggedIn = true;

  const onClose = () => {
    setIsProductFormActive(false);
    setSelectedId(undefined);
  }

  const onEditHandler = (id: string) => {
    setIsProductFormActive(true);
    setSelectedId(id);
  }

  return (
    <>
      <Nav 
        isAdminLoggedIn={isAdminLoggedIn} 
        setIsProductFormActive={setIsProductFormActive}
      />
      {isAdminLoggedIn && isProductFormActive && 
        <AddProduct 
          onClose={onClose} 
          selectedId={selectedId} 
        />}
      
      <div className="text-[#ddd] bg-gradient-to-b from-[#606888] to-[#3f4a6b] py-10">
        <Letter />
      </div>
      <ProductTable
        onEditHandler={onEditHandler}
        isAdminLoggedIn={isAdminLoggedIn}
      />
      <Footer />
    </>
  )
}

export default App
