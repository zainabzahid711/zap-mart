"use client";

import Heading from "@/app/components/heading";
import React from "react";
import moment from "moment";
import { Rating } from "@mui/material";

interface ListRatingProps {
  product: any;
}

const ListRating: React.FC<ListRatingProps> = ({ product }) => {
  return (
    <>
      <div>
        <Heading titlle="Product review" />
        <div className="text-sm mt-2">
          {product.reviews &&
            product.reviews.map((review: any) => {
              return (
                <div key={review.id} className="max-w-300px">
                  <div className="gap-2 flex items-center">
                    <div>avatar</div>
                    <div className="font-semibold">{review?.user.name} </div>
                    <div className="font-light">
                      {moment(review.createDate).fromNow()}{" "}
                    </div>
                  </div>
                  <div className="mt-2">
                    <Rating value={review.rating} readOnly />{" "}
                    <div className="mt-2">{review.comment} </div>
                    <hr className="mt-4 mb-4" />
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default ListRating;
