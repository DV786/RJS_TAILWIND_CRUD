import { useEffect, useMemo, useState } from "react";
import Header from "../../components/Header";
import { AppDispatch, RootState } from "../../redux/store";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { fetchProductsAction } from "../../redux/product";
import { addToCart } from "../../redux/cart/slice";

const DashboardPage: React.FC = () => {
  const dispatch = useAppDispatch<AppDispatch>();
  const { products, loading } = useAppSelector((state: RootState) => state.product);  
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    dispatch(fetchProductsAction());
  }, [dispatch]);

  const filteredProducts = useMemo(
    () => products.filter((p) => p.title.toLowerCase().includes(search.toLowerCase())),
    [search, products]
  );

  if (loading) return <p className="text-center text-lg">Loading...</p>;

  return (
    <div>
      <Header />
      <div className="p-4">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full p-2 border rounded"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="border p-4 rounded-lg shadow-lg">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-48 object-cover rounded"
              />
              <h3 className="font-semibold mt-2 text-lg">{product.title}</h3>
              <p className="text-gray-600 font-medium">${product.price} <span className="text-sm text-red-500">(-{product.discountPercentage}%)</span></p>
              <p className="text-gray-500 text-sm">{product.description}</p>
              <p className="text-yellow-500 text-sm">⭐ {product.rating.toFixed(1)}</p>
              <div className="flex justify-center mt-2">
                <button
                  onClick={() => dispatch(addToCart(product))}
                  className="cursor-pointer bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded transition"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center col-span-3 text-gray-500">No products found</p>
        )}
      </div>
    </div>
  );
};

export default DashboardPage;
