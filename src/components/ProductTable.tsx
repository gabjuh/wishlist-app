import { useEffect, useState } from "react";
import { IProduct } from '../interfaces/IProduct';
import { db } from "../firebase";
import { onValue, ref, remove, update } from "firebase/database";
import Product from "./Product";

const ProductTable= ({
  onEditHandler,
  isAdminLoggedIn,
}: {
  onEditHandler: (id: string) => void;
  isAdminLoggedIn: boolean;
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
    });
  }, []);

  const toggleBought = (productId: string, currentState: boolean) => {
    const productRef = ref(db, `products/${productId}`);
    update(productRef, { isBought: !currentState });
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
    <div className={`${!isAdminLoggedIn ? 'mt-20' : ''}`}>
      <table className="lg:max-w-[1200px] w-full mx-auto bg-white">
        <thead className="bg-gray-100 hidden md:table-header-group">
          <tr>
            <th className="py-2 px-4 text-left">Bild</th>
            <th className="py-2 px-4 text-left">Name des Produktes</th>
            <th className="py-2 px-4 text-left">Preis</th>
            <th className="py-2 px-4 text-left">Status</th>
            {isAdminLoggedIn && <th className="py-2 px-4 text-left"></th>}
          </tr>
        </thead>
        <tbody>
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
      <p className="mt-5 ml-3 text-[#ddd]">* Der Preis kann je nach Aktion variieren.</p>
    </div>
  );
};

export default ProductTable;