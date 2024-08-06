import { useEffect, useState } from "react";
import { IProduct } from '../interfaces/IProduct';
import { db } from "../firebase";
import { onValue, ref, remove, update } from "firebase/database";
import Product from "./Product";

const ProductTable = ({
  onEditHandler,
  isAdminLoggedIn,
}: {
  onEditHandler: (id: string) => void;
  isAdminLoggedIn: boolean;
}) => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [isAscendingSort, setIsAscendingSort] = useState<boolean>(false);
  // const [isSorted, setIsSorted] = useState<boolean>(false);

  const sortProducts = (productList: IProduct[]) => {
    return [...productList].sort((a, b) => {
      if (!isAscendingSort) {
        return stringToNumber(a.priceCurrent) - stringToNumber(b.priceCurrent);
      } else {
        return stringToNumber(b.priceCurrent) - stringToNumber(a.priceCurrent);
      }
    })
  }

  useEffect(() => {
    const productsRef = ref(db, 'products');
    onValue(productsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const productList = Object.entries(data).map(([id, product]) => ({
          id,
          ...(product as Omit<IProduct, 'id'>)
        }));
        setProducts(sortProducts(productList));
      } else {
        setProducts([]);
      }
    });
  }, [isAscendingSort]);

  const sortProductsByPriceHandler = () => {
    setIsAscendingSort(!isAscendingSort);
    // setIsSorted(true);
  };

  const stringToNumber = (str: string | undefined): number => { 
    let numericStr = str ?? '0';
    numericStr = numericStr.replace(/\D/g, ''); 
    return parseInt(numericStr); 
  };

  const toggleBought = (productId: string, currentState: boolean) => {
    if (currentState) {
      if (confirm('Hast du das Spielzeug versehentlich markiert und möchtest es wiederherstellen?\n\nFalls nicht, klicke auf "Abbrechen" und lass es bitte so, da es bereits von jemand anderem gekauft und markiert wurde. Vielen Dank! :-)')) {
        const productRef = ref(db, `products/${productId}`);
        update(productRef, { isBought: !currentState });
      }
      return;
    }
    if (confirm('Hast du das Spielzeug bereits gekauft?\n\nFalls noch nicht, klicke auf "Abbrechen", kaufe das gewünschte Spielzeug und kehre danach zurück, um es zu markieren! :-)')) {
      alert('Vielen herzlichen Dank für das Geschenk!\n\nHannah wird sich sehr freuen! :-)');
      const productRef = ref(db, `products/${productId}`);
      update(productRef, { isBought: !currentState });
    }
  };

  const removeProduct = async (productId: string) => { 
    if (confirm('Bist du sicher, dass du dieses Produkt löschen möchtest?')) {
      const productRef = ref(db, `products/${productId}`); 
      try {
        await remove(productRef);
        console.log("Product successfully deleted!");
      } catch (error) {
        console.error("Error removing product: ", error);
      }
    }
  }; 

  return (
    <div className={`mt-0`}>
      <button className="block md:hidden mx-auto my-5 text-md bg-gradient-to-b from-[#3f4a6b] to-[#384260] px-5 py-2 rounded-full text-[#ddd]" onClick={() => sortProductsByPriceHandler()}>Sortierung umkehren {!isAscendingSort ? '↓' : '↑'}</button>
      <table className="lg:max-w-[1400px] w-full mx-auto hyphens-auto overflow-auto" lang="de">
        <thead className="sticky top-[63px] bg-[#eee] hidden md:table-header-group z-[998]">
          <tr>
            <th className="py-2 px-4 text-center">Bild</th>
            <th className="py-2 px-4 text-left">Beschreibung</th>
            <th className="py-2 px-4 text-center cursor-pointer" onClick={() => sortProductsByPriceHandler()}>Preis {!isAscendingSort ? '↓' : '↑'}</th>
            <th className="py-2 px-4 text-center">Status</th>
            {isAdminLoggedIn && <th className="py-2 px-4 text-left"></th>}
          </tr>
        </thead>
        <tbody className="bg-opacity-0">
          {products.map((product: IProduct) => (
            <Product 
              key={product.id}
              product={product}
              toggleBought={toggleBought}
              isAdminLoggedIn={isAdminLoggedIn}
              onEditHandler={onEditHandler}
              removeProduct={removeProduct}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;