import React from 'react';
import {useParams} from 'react-router-dom';

export default function Product() {
  const {id} = useParams();
  return (
    <div>
            Single products {id}
    </div>
  );
}
