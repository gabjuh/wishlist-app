import { IProduct } from "../interfaces/IProduct"

const Product = ({
  product,
  toggleBought,
  isAdminLoggedIn,
  onEditHandler,
  removeProduct
}: {
  product: IProduct;
  toggleBought: (id: string, state: boolean) => void;
  isAdminLoggedIn: boolean,
  onEditHandler: (id: string) => void;
  removeProduct: (id: string) => void;
}) => {

  return (
    <>
      {/* DESKTOP */}
      <tr className={`hidden md:table-row border-b bg-opacity-50 transition-all ease-in-out duration-50 ${product.isBought ? 'bg-[#ddd3] select-none' : ''}`}>
        <td className={`relative py-2 px-4 max-w-48 ${product.isBought ? 'z-[-1] blur-[1.5px] grayscale-[60%]' : ''}`}>
          <a href={product.imageUrl} target="_blank">
            <img src={product.imageUrl} alt={product.name} className="w-48 h-48 mx-auto" />
          </a>
        </td>
        <td className={`relative py-2 px-4 max-w-[300px] text-[1.1rem] ${product.isBought ? 'z-[-5] blur-[4px] grayscale' : ''}`}>
          <a href={product.link} target="_blank" className="text-blue-700 italic">
            {product.name} &#x2197;
          </a>
          <p className="text-[.8rem] text-red-700 leading-1">* Der Preis kann je nach aktuellen Aktionen variieren.</p>
        </td>
        <td className={`relative py-2 px-4 font-bold ${product.isBought ? 'z-[-5] blur-[4px] grayscale' : ''}`}>
          <p className="text-xl font-medium text-center">{product.priceCurrent ?? product.price} € *</p>
          {product.priceCurrent && <p className="block text-[.75rem] opacity-50 line-through text-center">{product.price} €</p>}
        </td>
        <td className={`py-2 px-4 ${product.isBought ? '' : ''}`}>
          <button
            onClick={() => toggleBought(product.id, product.isBought)}
            className={`relative block px-2 py-1 rounded !z-5 font-normal mx-auto ${
              !product.isBought ? 'bg-green-500 text-white' : 'bg-gray-400 text-[#fff]'
            }`}
          >
            {product.isBought ? 'Bereits gekauft' : 'Noch frei zu wählen'}
          </button>
        </td>
        {isAdminLoggedIn && <td>
          <button onClick={() => onEditHandler(product.id)} className="text-[#fff] mx-auto px-2 py-1 rounded-l bg-blue-400 font-normal">Bearbeiten</button>
          <button onClick={() => removeProduct(product.id)} className="text-[#fff] mx-auto bg-red-500 px-2 py-1 rounded-r font-normal">✕</button>
        </td>}
      </tr>
 
        {/* MOBILE */}
      <tr className={`md:hidden flex gap-3 my-3 bg-opacity-50 transition-all ease-in-out duration-50 ${product.isBought ? 'bg-[#ddd3] select-none' : ''}`}>
        <td className={`w-[40vw] bg-[#ddd3] rounded-lg py-10 px-3 ${product.isBought ? 'z-[-5] blur-[2px] grayscale' : ''}`}>
          <a href={product.link} target="_blank">
            <img src={product.imageUrl} alt="Product Image" />
          </a>
        </td>
        <td className={`w-[55vw]`}>
          <h3 className={`text-sm text-blue-800 italic underline ${product.isBought ? 'z-[-5] blur-[4px] grayscale' : 'cursor-pointer'}`}>
            {!product.isBought ? 
              <a href={product.link} target="_blank">{product.name}  &#x2197;</a> :
              <p>{product.name}  &#x2197;</p>
            }
          </h3>
          <p className={`${product.isBought ? 'z-[-5] blur-[4px] grayscale' : ''}`}>
            <span className="text-xl font-medium">{product.priceCurrent ?? product.price} € </span>
            {product.priceCurrent && <span className="inline-block ml-1 text-[.75rem] opacity-50 line-through">{product.price} €</span>}
          </p>
          <p className={`text-[.7rem] text-red-700 leading-1 ${product.isBought ? 'z-[-5] blur-[4px] grayscale' : ''}`}>Der Preis kann je nach aktuellen Aktionen variieren.</p>
          <button
            onClick={() => toggleBought(product.id, product.isBought)}
            className={`px-2 py-1 mt-1.5 w-full rounded-full font-normal ${
              !product.isBought ? 'bg-green-500 text-white' : 'bg-gray-400 text-[#fff]'
            }`}
          >
            {product.isBought ? 'Bereits gekauft' : 'Noch frei zu wählen'}
          </button>
          {isAdminLoggedIn && <span className="flex mt-1">
            <button onClick={() => onEditHandler(product.id)} className="text-[#fff] px-2 py-1 flex-grow rounded-l-full bg-blue-400 font-normal">Bearbeiten</button>
            <button onClick={() => removeProduct(product.id)} className="text-[#fff] bg-red-500 px-2 py-1 rounded rounded-r-full font-normal">✕</button>
          </span>}
        </td>
      </tr>
    </>
  )
}

export default Product