import { useNavigate } from "react-router";

export default function ProductList({ product }) {
  const navigate = useNavigate();

  // Function to calculate discount percentage
  const calculateDiscountPercentage = (price, discountedPrice) => {
    if (!discountedPrice) return 0;  // If no discounted price, return 0%
    return Math.round(((price - discountedPrice) / price) * 100);
  };

  return (
    <div className="product-list">
      {product ? (
        <div
          onClick={() => navigate(`/product/${product?._id}`)}
          key={product?._id}
          className="group relative bg-gray-800 flex justify-center items-end lg:aspect-auto h-[60vh] hover:shadow-lg transition duration-300 ease-in-out overflow-hidden rounded-md"
        >
          <div className="absolute top-0 w-[100%] group-hover:h-[80%] h-[70%] z-10 transition-all duration-100 ease-in-out">
            <img
              alt={product?.title}
              src={product?.imageUrl}
              className="aspect-square w-full h-full bg-gray-500 object-cover object-top group-hover:scale-105 transition-transform duration-300 ease-in-out"
            />
          </div>
          <div className="mt-4 flex justify-between px-4 py-2 z-20 bg-gray-200 rounded-md w-full lg:h-[20vh] group-hover:h-[25vh] transition-all duration-100 ease-in-out">
            <div>
              <h3 className="md:text-[1.5vw] lg:text-[1.4vw] font-medium text-black/80 capitalize">
                {product?.brand}
              </h3>
              <h3 className="md:text-[1.5vw] lg:text-[1vw] font-medium text-black truncate">
                {product?.title}
              </h3>
              <p className="mt-1 text-md font-normal text-black">{product?.color}</p>
              <p className="text-sm font-medium text-gray-900">
                <span className="text-gray-500 mr-2">₹{product?.price}</span>
                {product?.discountedPrice && (
                  <span className="line-through text-gray-500 mr-2">
                    ₹{product?.discountedPrice}
                  </span>
                )}
                {product?.discountedPrice && (
                  <span className="text-green-500 mr-2">
                    + {calculateDiscountPercentage(product?.price, product?.discountedPrice)}% off
                  </span>
                )}
              </p>
            </div>
          </div>
          <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></div>
        </div>
      ) : (
        <div>No products available</div>
      )}
    </div>
  );
}
