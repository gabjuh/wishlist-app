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
      <tr className="hidden md:table-row border-b">
        <td className="py-2 px-4 max-w-48">
          <a href={product.imageUrl} target="_blank">
            <img src={product.imageUrl} alt={product.name} className="w-48 h-48 " />
          </a>
        </td>
        <td className="py-2 px-4 max-w-[300px] text-[1.1rem]">
          <a href={product.link} target="_blank" className="text-blue-700 italic">
            {product.name} &#x2197;
          </a>
        </td>
        <td className="py-2 px-4 font-bold"> {product.price} € *</td>
        <td className="py-2 px-4">
          <button
            onClick={() => toggleBought(product.id, product.isBought)}
            className={`px-2 py-1 rounded ${
              !product.isBought ? 'bg-green-500 text-white' : 'bg-gray-200'
            }`}
          >
            {product.isBought ? 'Schon gekauft' : 'Auswählen'}
          </button>
        </td>
        {isAdminLoggedIn && <td>
          <button onClick={() => onEditHandler(product.id)} className="text-[#fff] px-2 py-1 rounded bg-blue-400">Bearbeiten</button>
          <button onClick={() => removeProduct(product.id)} className="text-[#fff] bg-red-500 px-2 py-1 rounded ml-2">✕</button>
        </td>}
      </tr>
      <tr className="md:hidden flex gap-3 my-3">
        <div className="w-[40vw] bg-[#ddd3] rounded-lg py-10 px-3">
          <img src={product.imageUrl} alt="Product Image" />
        </div>
        <div className="w-[55vw]">
          <h3 className="text-sm">{product.name}</h3>
          <p className="text-xl">{product.price} €</p>
          <p className="text-[.6rem] leading-1">(Der Preis kann je nach Aktion variieren.)</p>
          <button
            onClick={() => toggleBought(product.id, product.isBought)}
            className={`px-2 py-1 mt-3 w-full rounded-full ${
              !product.isBought ? 'bg-green-500 text-white' : 'bg-gray-200'
            }`}
          >
            {product.isBought ? 'Schon gekauft' : 'Auswählen'}
          </button>
        </div>
        {/* <td className="">{product.}</td> */}
        {/* <button onClick={() => onEditHandler(product.id)} className="text-[#fff] px-2 py-1 rounded bg-blue-400">Bearbeiten</button>
          <button onClick={() => removeProduct(product.id)} className="text-[#fff] bg-red-500 px-2 py-1 rounded ml-2">✕</button> */}
      </tr>
    </>
  )
}

export default Product