"use client"

import { formatPrice } from "@/utils/formatePrice"
import { truncateText } from "@/utils/truncateText"
import { Rating } from "@mui/material"
import Image from "next/image"

interface ProductCartProps{
    data: any
}


const ProductCart:React.FC<ProductCartProps> = ({data}) =>{

    
const ProductRating = data.reviews.reduce((acc:number,
    item:any ) => item.rating + acc, 0) /data.reviews.length





    return (
        <>
        <div className="col-span-1 cursor-pointer  rounded-sm p-2 transition hover:scale-105 text-center text-sm">
            <div className="flex flex-col text-center w-full gap-1">
                <div className="aspect-square overflow-hidden relative w-full">
                    <Image fill src={data.images[0].image} alt={data.name} className="w-full h-full object-contain "/>
                </div>
                <div className="mt-4">
                    {truncateText(data.name)}
                </div>
                <div> <Rating value={ProductRating} readOnly/> </div>
                <div>{data.reviews.length} reviews</div>
                <div className="font-semibold"> {formatPrice(data.price)} </div>
            </div>
        </div>
        </>
    )
}

export default ProductCart