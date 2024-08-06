import React from 'react'
import Nav from '../components/Nav'
import AddProduct from '../components/AddProduct'
import Footer from '../components/Footer'

const Layout = ({
  isAdminLoggedIn,
  isProductFormActive,
  setIsProductFormActive,
  onClose,
  selectedId,
  children
}: {
  isAdminLoggedIn: boolean,
  isProductFormActive: boolean,
  setIsProductFormActive: any,
  onClose: any,
  selectedId: string | undefined,
  children: React.ReactNode
}) => {
  const checkUrlEnding = () => {
    const url = window.location.href;
    return url.endsWith('impressum');
  }
  return (
    <>
      <Nav 
        isAdminLoggedIn={isAdminLoggedIn} 
        setIsProductFormActive={setIsProductFormActive}
      />
      {!checkUrlEnding() && isAdminLoggedIn && isProductFormActive && 
        <AddProduct 
          onClose={onClose} 
          selectedId={selectedId} 
        />}
        {children}
      <Footer />
    </>
  )
}

export default Layout