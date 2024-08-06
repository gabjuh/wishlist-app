import Present from "../assets/svg/Present"
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { onValue, ref } from "firebase/database";
import { IProduct } from "../interfaces/IProduct";

const Nav = ({
  isAdminLoggedIn,
  setIsProductFormActive
}: {
  isAdminLoggedIn: boolean;
  setIsProductFormActive: (arg: boolean) => void;
}) => {

  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const productsRef = ref(db, 'products');
    onValue(productsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const productList = Object.entries(data).map(([id, product]) => ({
          id,
          ...(product as Omit<IProduct, 'id'>)
        }));
        setProducts(productList);
      } else {
        setProducts([]);
      }
    })
  }, []);

  const getNumberOfBoughtProducts = (): number => {
    return products.filter((product: IProduct) => product.isBought).length;
  }

  return (
    <div className="backdrop-blur-sm bg-[#fffd] fixed w-full z-[1001] shadow-md">
      <div className="h-16 flex lg:max-w-[1400px] mx-auto">
        <div className="pt-4 pl-3 sm:pl-5 text-xl flex-grow select-none">Hannah's Geschenkkorb</div>
        {isAdminLoggedIn && <div className="my-5 ml-2">
        <button onClick={() => setIsProductFormActive(true)} className="px-2 py-1 mx-4 translate-y-[-3px] rounded bg-green-500 text-[#fff]">Neues Produkt</button>
      </div>}
        <Present numberOfBoughtProducts={getNumberOfBoughtProducts()} />
      </div>
    </div>
  )
}

export default Nav