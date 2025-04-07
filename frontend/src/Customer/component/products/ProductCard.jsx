const products = [
    {
      id: 1,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },
    {
        id: 2,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
      },
      {
        id: 3,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
      },
      {
        id: 4,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
      },
      {
        id: 5,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
      },
      {
        id: 5,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
      },
      {
        id: 5,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
      },
      {
        id: 5,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
      },
    // More products...
  ]
  
export default function ProductCard({product}) {
  return (
            <div
              key={product.id}
              className="group relative bg-gray-800 flex justify-center items-end lg:aspect-auto  h-[60vh] hover:shadow-lg transition duration-300 ease-in-out overflow-hidden rounded-md"
            >
              {/* Image with smooth hover animation */}
              <div className="absolute top-0  w-[100%]    group-hover:h-[80%] h-[70%]      z-10 transition-all duration-100 ease-in-out">

              <img
                alt={product.title}
                src={product.imageUrl}
                className="aspect-square w-full h-full bg-gray-500   object-cover object-top group-hover:scale-105 transition-transform duration-300 ease-in-out"
              />
              </div>


              {/* Product details with smooth hover animation */}
              <div className="mt-4 flex justify-between px-4 py-2 z-20 bg-gray-200 rounded-md w-full  lg:h-[20vh] group-hover:h-[25vh]  transition-all duration-100 ease-in-out">
                <div>
                  <h3 className="md:text-[1.5vw] lg:text-[1.4vw] font-medium text-black/80  capitalize">
                      {product.brand}
                  </h3>
                  <h3 className="md:text-[1.5vw] lg:text-[1vw] font-medium text-black truncate">
                      {product.title}
                  </h3>
                  <p className="mt-1 text-md font-normal text-black">{product.color}</p>
                  <p className="text-sm font-medium text-gray-900">
                    <span className="text-gray-500 mr-2">{product.price}</span>
                    <span className="line-through text-gray-500 mr-2">{product.discountedPrice}</span>
                    <span className=" text-green-500 mr-2">{product.discountPersent} % off</span>
                   
                  </p>
                </div>
              </div>

              {/* Add a subtle scale effect on hover */}
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></div>
            </div>
  );
}