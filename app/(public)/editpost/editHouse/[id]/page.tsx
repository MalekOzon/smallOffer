'use client';
import {  useGetHousePostId } from '@/app/lib/postServices/postQueries';
import { useParams } from 'next/navigation';
import React from 'react';

const EditHouse = () => {
  const params = useParams();

  console.log("Params: ", params);

  const id = params.id as string | undefined;

  const getPostDetail = useGetHousePostId(id);
  const { data } = getPostDetail;

  return (
    <div>
      <h1>Edit House Page</h1>

      <p>ID: {id}</p>

      {data ? (
        <div className=' my-10 bg-amber-200 flex items-center flex-col space-y-2.5'>
          <h2>Post Details</h2>
          <p><strong>Title:</strong> {data.title}</p>
          <p><strong>City:</strong> {data.city}</p>
          <p><strong>Category:</strong> {data.category}</p>
          <p><strong>Description:</strong> {data.description}</p>
          <p><strong>Detailed Location:</strong> {data.detailed_location}</p>
          <p><strong>Neighborhood:</strong> {data.hood}</p>
          <p><strong>Price:</strong> {data.price}</p>
          <p><strong>Price Type:</strong> {data.price_type}</p>
          <p><strong>Subcategory:</strong> {data.subcategory}</p>
          <p><strong>Rooms:</strong> {data.house?.room}</p>
          <p><strong>Real Estate Space:</strong> {data.house?.real_estate_space}</p>
          <p><strong>Offer Type:</strong> {data.house?.offer_type}</p>
          <p><strong>House Type:</strong> {data.house?.house_type}</p>
          <p><strong>General Characteristics:</strong> {data.house?.general_characteristics}</p>
          <p><strong>Furniture:</strong> {data.house?.furniture}</p>
        </div>
      ) : (
        <p>No data available for this post.</p>
      )}
    </div>
  );
};

export default EditHouse;