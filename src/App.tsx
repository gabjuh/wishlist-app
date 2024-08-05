import './App.css'
import ProductTable from './components/ProductTable';
import AddProduct from './components/AddProduct';
import Nav from './components/Nav';
import { useState } from 'react';

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
      <Nav isAdminLoggedIn={isAdminLoggedIn} />
      {isAdminLoggedIn && isProductFormActive && 
        <AddProduct 
          onClose={onClose} 
          selectedId={selectedId} 
        />}
      {isAdminLoggedIn && <div className="my-5 ml-2">
        <button onClick={() => setIsProductFormActive(true)} className="px-2 py-1 rounded bg-green-500 text-white">Neues Produkt hinzufügen</button>
      </div>}
      <ProductTable
        onEditHandler={onEditHandler}
        isAdminLoggedIn={isAdminLoggedIn}
      />
    </>
  )
}

export default App
