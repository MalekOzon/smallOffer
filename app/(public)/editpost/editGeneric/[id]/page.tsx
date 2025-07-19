'use client';
import { useGetGenericPostId } from '@/app/lib/postServices/postQueries';
import { useParams } from 'next/navigation';
import React from 'react';

const EditGeneric = () => {
  const params = useParams();

  console.log("Params: ", params);

  const id = params.id as string | undefined;

  const getPostDetail = useGetGenericPostId(id);
  const { data } = getPostDetail;

  return (
    <div>
      <h1>Edit Generic Page</h1>

      <p>ID: {id}</p>

      {data ? (
        <div>
          <h2>Post Details</h2>
          <p>Title: {data.title}</p>
          <p>Content: {data.city}</p>
          <p>Content: {data.category}</p>
          <p>Content: {data.description}</p>
          <p>Content: {data.detailed_location}</p>
          <p>Content: {data.hood}</p>
          <p>Content: {data.price}</p>
          <p>Content: {data.price_type}</p>
          <p>Content: {data.subcategory}</p>
        </div>
      ) : (
        <p>No data available for this post.</p>
      )}
    </div>
  );
};

export default EditGeneric;