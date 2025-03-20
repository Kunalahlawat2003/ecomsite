"use client"
import { AddProductAtom } from "@repo/atoms/addProductAtom";
import { useAtom } from "jotai";
import { CloseIcon } from "../icons/closeIcon.js";
import { BlurAtom } from "@repo/atoms/blurAtom";


export function AddProductModal () {
    const[AddProductModalOpen, SetAddProductModalOpen] = useAtom(AddProductAtom);
    const [, setBlurOpen] = useAtom(BlurAtom);

    return <div className={`xl:h-[80%] lg:h-[45%] md:h-[55%] h-[80%] xl:w-[60%] sm:w-[80%] w-[75%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-white dark:bg-neutral-900 dark:text-white rounded-lg fixed flex-col items-center p-5 ${AddProductModalOpen ? 'flex' : 'hidden'}`}>
        <div className="absolute top-0 right-0 p-2 cursor-pointer dark:text-white"
        onClick={()=> {SetAddProductModalOpen(false), setBlurOpen(false)}}>
            <CloseIcon size="xl"/>
        </div>
        <div className="text-center w-full">
            <h1 className="text-2xl font-semibold">ADD PRODUCT</h1>
        </div>
        <div className="flex flex-col h-full w-full bg-gray-100 rounded-lg dark:bg-transparent p-2 gap-2 sm:mt-1 mt-2">
            <div className="flex flex-col gap-1">
              <div className="sm:text-base text-sm">Product Images URL</div>
              <input type="text" className="w-full sm:py-3 py-3 px-1 sm:rounded-lg rounded-sm sm:text-base text-sm" placeholder="Image 1"></input>
              <input type="text" className="w-full sm:py-3 py-3 px-1 sm:rounded-lg rounded-sm sm:text-base text-sm" placeholder="Image 2"></input>
              <input type="text" className="w-full sm:py-3 py-3 px-1 sm:rounded-lg rounded-sm sm:text-base text-sm" placeholder="Image 3"></input>
            </div>

            <div className="flex flex-col gap-1">
                <div className="sm:text-base text-sm">Product Description</div>
                <input type="text" className="w-full sm:py-3 py-3 px-1 sm:rounded-lg rounded-sm sm:text-base text-sm" placeholder="Description"/>
            </div>

            <div className="flex gap-4">
                <div className="flex-col w-full">
                  <div className="sm:text-base text-sm">Striked Price</div>
                  <input type="text" className="w-full sm:py-3 py-3 px-1 sm:rounded-lg rounded-sm sm:text-base text-sm" placeholder="Striked Price"/>
                </div>

                <div className="flex-col  w-full">
                  <div className="sm:text-base text-sm">Product Price</div>
                  <input type="text" className="w-full sm:py-3 py-3 px-1 sm:rounded-lg rounded-sm sm:text-base text-sm" placeholder="Price"/>
                </div>
            </div>

            <div className="flex gap-4">
                <div className="flex-col w-full">
                  <label className="sm:text-base text-sm">Gender</label>
                  <select className="w-full sm:py-3 py-3 px-1 sm:rounded-lg rounded-sm text-black">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>

                <div className="flex-col  w-full">
                  <label className="sm:text-base text-sm">Category</label>
                  <select className="w-full sm:py-3 py-3 px-1 sm:rounded-lg rounded-sm text-black">
                    <option value="joggers">Joggers</option>
                    <option value="trousers">Trousers</option>
                    <option value="sweatshirt">Sweatshirt</option>
                    <option value="jeans">Jeans</option>
                    <option value="tshirt">T-shirt</option>
                    <option value="shirt">Shirt</option>
                    <option value="jacket">Jacket</option>
                    <option value="shorts">Shorts</option>
                  </select>
                </div>
            </div>

            <div className="w-full justify-center items-center flex mt-2">
                <button className="bg-blue-500 w-[50%] py-2 text-lg rounded-md text-white">Submit</button>
            </div>
        </div>
    </div>
}