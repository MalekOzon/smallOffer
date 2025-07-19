'use client'

import { useGetOutdoorSpacePostId } from '@/app/lib/postServices/postQueries';
import { useParams } from 'next/navigation';
import React from 'react'

const Page = () => {
  const params = useParams();

  console.log("Params: ", params);

  const id = params.id as string | undefined;

  const getPostDetail = useGetOutdoorSpacePostId(id);
  const { data } = getPostDetail;

  return (
    <div>
      <h1>Edit Mobile Page</h1>

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
          <p><strong>Rooms:</strong> {data.outdoorspace?.area}</p>

        </div>
      ) : (
        <p>No data available for this post.</p>
      )}
    </div>
  );
};
export default Page
