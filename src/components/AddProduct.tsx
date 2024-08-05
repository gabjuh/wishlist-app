import { child, onValue, push, ref, set } from 'firebase/database';
import { db } from '../firebase';
import { useEffect, useState } from 'react';

const initProduct = {
  name: '',
  price: '',
  priceCurrent: '',
  link: '',
  imageUrl: '',
  isBought: false
}

const AddProduct = ({
  onClose,
  selectedId
}: {
  onClose: any;
  selectedId?: string;
}) => {
  const [product, setProduct] = useState(initProduct);

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setProduct(prevProduct => ({
      ...prevProduct,
      [name]: value
    }));
  }

  const onFormSave = (event: React.FormEvent) => {
    event.preventDefault();
    const productsRef = ref(db, 'products');
    if (!selectedId) {
      push(productsRef, product);
    } else {
      set(ref(db, `products/${selectedId}`), product);
    }
    setProduct(initProduct);
    (event.currentTarget as HTMLFormElement).reset();
    onClose();
  }

  useEffect(() => {
    if (!selectedId) {
      return;
    }
    const productsRef = ref(db, 'products');
    const productRef = child(productsRef, selectedId);
    onValue(productRef, (snapshot) => {
      if (snapshot.exists()) {
        const productData = snapshot.val();
        setProduct(productData);
      }
    });
  }, [selectedId]);

  return (
    <>
      <div className="fixed top-0 left-0 w-[100%] h-[100%] bg-[#333b] backdrop-filter backdrop-blur-md z-[999]">
      </div>   

      <div className="fixed left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%] z-[1000] md:w-[80%] w-full">
        <form onSubmit={onFormSave} className="relative flex flex-col gap-4 max-w-[500px] bg-[#ddd] sm:px-10 px-3 py-10 mx-auto mt-10 rounded">
          <div className="absolute right-5 top-5 bg-[#777] font-bold text-center text-[#ddd] rounded-full w-6 h-6 cursor-pointer" onClick={() => onClose()}>✕</div>
            <h2 className="text-2xl mb-6">Neues Produkt hinzufügen</h2>
            <div className="flex flex-col">
              <label htmlFor="name" className="text-lg font-medium">Name</label>
              <input name="name" onChange={onInputChange} type="text" id="name" defaultValue={selectedId ? product.name : ''} className="border border-gray-300 rounded-md p-2" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="link" className="text-lg font-medium">Link</label>
              <input name="link" onChange={onInputChange} type="text" id="link" defaultValue={selectedId ? product.link : ''} className="border border-gray-300 rounded-md p-2" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="imageUrl" className="text-lg font-medium">Bild URL</label>
              <input name="imageUrl" onChange={onInputChange} type="text" id="imageUrl" defaultValue={selectedId ? product.imageUrl : ''} className="border border-gray-300 rounded-md p-2" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="price" className="text-lg font-medium">Preis</label>
              <input name="price" onChange={onInputChange} type="text" id="price" defaultValue={selectedId ? product.price : product.price} className="border border-gray-300 rounded-md p-2" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="priceCurrent" className="text-lg font-medium">Aktueller Preis</label>
              <input name="priceCurrent" onChange={onInputChange} type="text" id="priceCurrent" defaultValue={selectedId ? product.priceCurrent : product.priceCurrent} className="border border-gray-300 rounded-md p-2" />
            </div>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4">Product speichern</button>
          </form>   
      </div>
     </>
  )
}

export default AddProduct