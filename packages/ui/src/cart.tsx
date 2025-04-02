"use client"
import { CartAtom } from "@repo/atoms/cartAtom"
import { useAtom } from "jotai"
import { CloseIcon } from "../icons/closeIcon.js";
import { MinusIcon } from "../icons/minusIcon.js";
import { PlusIcon } from "../icons/plusIcon.js";
import { DeleteIcon } from "../icons/deleteIcon.js";
import { useState } from "react";
import { BlurAtom } from "@repo/atoms/blurAtom";


export function Cart () {
    const [isCartOpen, setCartOpen] = useAtom(CartAtom);
    const [isBlurOpen, setBlurOpen] = useAtom(BlurAtom);
    const [products, setProducts] = useState([
      {
        id: 1,
        name: "Printed T-Shirt mens",
        quantity: 1,
        price: 1000,
        size: "XS",
      },
      {
        id: 2,
        name: "Printed T-Shirt mens",
        quantity: 1,
        price: 1000,
        size: "XL",
      },
      {
        id: 3,
        name: "Printed T-Shirt mens",
        quantity: 1,
        price: 1000,
        size: "XS",
      },
      {
        id: 4,
        name: "Printed T-Shirt mens",
        quantity: 1,
        price: 1000,
        size: "XS",
      },
      {
        id: 5,
        name: "Printed T-Shirt mens",
        quantity: 1,
        price: 1000,
        size: "XS",
      },
    ]);
  
    const increaseQuantity = (id: number) => {
      setProducts(products.map((product) =>
        product.id === id ? { ...product, quantity: product.quantity + 1 } : product
      ));
    };
  
    const decreaseQuantity = (id: number) => {
      setProducts(products.map((product) =>
        product.id === id && product.quantity > 1
          ? { ...product, quantity: product.quantity - 1 }
          : product
      ));
    };
  
    const deleteProduct = (id: number) => {
      setProducts(products.filter(product => product.id !== id));
    };
  
    const calculateSubtotal = () => {
      return products.reduce((acc, product) => acc + (product.price * product.quantity), 0);
    };

    return <div className={`fixed top-0 right-0 sm:h-full h-[92%] transition-transform duration-300 ease-in-out ${
            isCartOpen ? 'transform translate-x-full' : 'transform -translate-x-0'
          } xl:w-[30%] md:w-[60%] w-[85%] bg-white dark:bg-neutral-900 text-black dark:text-white z-50 flex flex-col py-2`}>
            <div className="h-full w-full">
              <div className="flex flex-col w-full">
                <div className="flex p-5 justify-between items-center dark:text-white">
                  <div className="sm:text-lg text-md text-gray-600 dark:text-white">CART</div>
                  <div onClick={() => {setCartOpen(true), setBlurOpen(false)}} className="cursor-pointer">
                    <CloseIcon size="xl"/>
                  </div>
                </div>

                <hr className="dark:border-gray-600"/>
              </div>

              <div className="relative xl:max-h-[72%] md:max-h-[80%] max-h-[72%] w-full flex flex-col py-3 sm:px-3 gap-2 overflow-y-auto scrollbar-thin">
              {products.length > 0 ? (
                products.map((product) => (
                  <div key={product.id} className="w-full min-h-max h-[23%] gap-2 flex p-2">
                    <div className="bg-red-200 max-w-[30%] h-full w-[30%] rounded-sm flex">
                      <img src="https://manyavar.scene7.com/is/image/manyavar/MOIW221_439-INDIGO+BLUE_444.1761_27-07-2024-21-50:650x900?&dpr=on,2" className="object-cover object-center w-full h-full" />
                    </div>
    
                    <div className="flex flex-col gap-2 min-w-[50%] max-w-[50%] h-full sm:text-base text-sm">
                      <div>{product.name}</div>
    
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-2 border w-max p-1 bordergray-600">
                          <div
                            className={`text-gray-600 dark:text-gray-100 cursor-pointer ${product.quantity === 1 ? 'cursor-not-allowed' : ''}`}
                            onClick={() => decreaseQuantity(product.id)}
                          >
                            <MinusIcon size="sm" />
                          </div>
                          <div>{product.quantity}</div>
                          <div className="text-gray-600 dark:text-gray-100 cursor-pointer" onClick={() => increaseQuantity(product.id)}>
                            <PlusIcon size="sm" />
                          </div>
                        </div>
                        <div className="text-red-500 cursor-pointer" onClick={() => deleteProduct(product.id)}>
                          <DeleteIcon size="md" />
                        </div>
                      </div>
    
                      <div className="text-gray-600 dark:text-gray-200">
                        {product.size}
                      </div>
                    </div>
    
                    <div className="w-[20%] sm:text-base text-sm">
                      Rs.{product.price * product.quantity}
                    </div>
                  </div>
                ))
              ) : (
                <div>Nothing in cart</div>
              )}
              </div>

              <div className="fixed flex flex-col w-full xl:h-[20%] md:h-[15%] h-[20%] bottom-0 left-0 bg-white dark:bg-neutral-900">
                  <hr/>
                  <div className="flex justify-between p-2 font-semibold text-gray-600 dark:text-gray-300">
                    <div>Subtotal:</div>
                    <div className="flex">
                      <div>Rs.</div>
                      <div>{calculateSubtotal()}</div>
                    </div>
                  </div>

                  <div className="w-full text-center p-2">
                    <button className="bg-green-500 hover:bg-black dark:hover:bg-white dark:hover:text-black hover:text-white transition-all duration-300 text-white w-full p-2 font-semibold">CHECKOUT</button>
                  </div>
                </div>
            </div>
    </div>
}