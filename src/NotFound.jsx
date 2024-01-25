import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useBlogContext } from './BlogContext';

const NotFound = () => {
  const navigate = useNavigate()
  const {changeUrl } = useBlogContext()
  const handleClique = () => {
    changeUrl('https://jsonplaceholder.typicode.com/posts')
    navigate("/");
  };

  return (
    <div>
      <div class="d-flex align-items-center justify-content-center vh-100">
          <h1 class="display-1 fw-bold text-white cursor-pointer" onClick={handleClique}>Cette page n'existe pas: cliquez pour retourner</h1>
      </div>
    </div>
  )
}

export default NotFound
