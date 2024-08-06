import Letter from '../components/Letter'
import ProductTable from '../components/ProductTable'
import Layout from './Layout';

const Home = ({
  isAdminLoggedIn,
  onEditHandler,
  isProductFormActive,
  setIsProductFormActive,
  onClose,
  selectedId
}: {
  isAdminLoggedIn: boolean,
  onEditHandler: (id: string) => void,
  isProductFormActive: boolean,
  setIsProductFormActive: any,
  onClose: any,
  selectedId: string | undefined
}) => {
  return (
    <>
      <Layout 
          isAdminLoggedIn={isAdminLoggedIn}
          isProductFormActive={isProductFormActive}
          setIsProductFormActive={setIsProductFormActive}
          onClose={onClose}
          selectedId={selectedId}
        >
      <div className="text-[#ddd] bg-gradient-to-b from-[#606888] to-[#3f4a6b] py-10">
        <Letter />
      </div>
      <ProductTable
        onEditHandler={onEditHandler}
        isAdminLoggedIn={isAdminLoggedIn}
      />
    </Layout>
    </>
  )
}

export default Home