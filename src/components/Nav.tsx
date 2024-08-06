import Present from "../assets/svg/Present";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { onValue, ref } from "firebase/database";
import { IProduct } from "../interfaces/IProduct";

const Nav = ({
  isAdminLoggedIn,
  setIsProductFormActive,
}: {
  isAdminLoggedIn: boolean;
  setIsProductFormActive: (arg: boolean) => void;
}) => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [boughtProducts, setBoughtProducts] = useState<IProduct[]>([]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

  useEffect(() => {
    const productsRef = ref(db, "products");
    onValue(productsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const productList = Object.entries(data).map(([id, product]) => ({
          id,
          ...(product as Omit<IProduct, "id">),
        }));
        setProducts(productList);
        const boughtProductsList = productList.filter(
          (product) => product.isBought
        );
        setBoughtProducts(boughtProductsList);
      } else {
        setProducts([]);
      }
    });
  }, []);

  const checkUrlEnding = () => {
    const url = window.location.href;
    return url.endsWith("impressum");
  };

  const getNumberOfBoughtProducts = (): number => {
    return products.filter((product: IProduct) => product.isBought).length;
  };

  return (
    <div className="backdrop-blur-sm bg-[#fffd] fixed w-full z-[1001] shadow-md">
      <div className="h-16 flex lg:max-w-[1400px] mx-auto">
        <div className="pt-4 pl-3 sm:pl-5 text-xl flex-grow select-none">
          Hannah's Geschenkkorb
        </div>
        {!checkUrlEnding() && isAdminLoggedIn && (
          <div className="my-5 ml-2">
            <button
              onClick={() => setIsProductFormActive(true)}
              className="px-2 py-1 mx-4 translate-y-[-3px] rounded bg-green-500 text-[#fff]"
            >
              Neues Produkt
            </button>
          </div>
        )}
        <Present
          numberOfBoughtProducts={getNumberOfBoughtProducts()}
          isCartOpen={isCartOpen}
          setIsCartOpen={setIsCartOpen}
        />
        <div
          className={`absolute right-14 top-[48px] w-[320px] h-[400px] bg-[#dddd] backdrop-blur-[8px] transition-all ease-out duration-200 rounded-b-[30px] drop-shadow-md border-[#ff6666c2] border-4 ${
            isCartOpen ? "opacity-100 visible" : "opacity-0 invisible z-[-50]"
          }`}
        >
          <div className="h-[380px] overflow-auto">
            {boughtProducts.map((product) => (
              <div key={product.id} className="flex gap-2 p-2">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-16 h-16"
                />
                <div>
                  <p>
                    {product.name.length > 45
                      ? `${product.name.substring(0, 45)}...`
                      : product.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
