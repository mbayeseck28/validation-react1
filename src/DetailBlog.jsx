import React from 'react'
import { useBlogContext } from './BlogContext'
import { useNavigate, useParams } from 'react-router-dom';

const Carte = ({tab}) => {
  return(
    <div className="card mt-5">
        <div className="card-header d-flex justify-content-around">
          <div>
            id: {tab.id}
          </div>
          <div>
            userId: {tab.userId}
          </div>
        </div>
        <div className="card-body">
            <h5 className="card-title">{tab.title}</h5>
            <p className="card-text">{tab.body}</p>
        </div>
    </div>
  )
}

const DetailBlog = () => {
const { id } = useParams();
const { data, isPending, changeUrl } = useBlogContext()
const navigate = useNavigate()

changeUrl('https://jsonplaceholder.typicode.com/posts/' + id)

const handleClique = () => {
  changeUrl('https://jsonplaceholder.typicode.com/posts')
  navigate("/");
};

  return (
    <div className='my-5 text-light'>
      <button className='btn btn-primary px-3 py-2 rounded text-light text-decoration-none' onClick={handleClique}>Retour</button>
      {isPending ? <div>Loading...</div> : <Carte tab={data} />}
    </div>
  )
}

export default DetailBlog
