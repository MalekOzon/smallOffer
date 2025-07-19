'use client'
import { useGetCarPostId } from '@/app/lib/postServices/postQueries';
import { useParams } from 'next/navigation';
import React from 'react'

const EditCar = () => {
  const params = useParams();

  console.log("Params: ", params);

  const id = params.id as string | undefined;

  const getPostDetail = useGetCarPostId(id);
  const { data } = getPostDetail;

console.log("da= " ,data)

  return (
    <div>
      <h1>Edit Car Page</h1>

      <p>ID: {id}</p>

      {data ? (
        <div className='h-screen my-12 bg-red-300'>
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
          <p>Content: {data.car.color}</p>
          <p>Content: {data.car.fuel_type}</p>
          <p>Content: {data.car.gearbox}</p>
          <p>Content: {data.car.status}</p>
          <p>Content: {data.car.number_of_doors}</p>
          <p>Content: {data.car.mileage}</p>
          <p>Content: {data.car.internal_materials}</p>
          <p>Content: {data.car.external_features}</p>
          <p>Content: {data.car.internal_features}</p>
        </div>
      ) : (
        <p>No data available for this post.</p>
      )}
    </div>
  );
};

export default EditCar
  