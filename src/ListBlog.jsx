import './App.css';
import { useBlogContext } from './BlogContext'
import { Link } from 'react-router-dom'
import Loading from './Loading';

const ListBlog = () => {
    const {data} = useBlogContext()
    if (!Array.isArray(data)) {
    
    return <Loading />;
      }
  return (
    <div className="row">
        {data.map((blog) => (
            <div className="col-sm-6 mb-0 mb-sm-4 ">
                <div className="card border-0 shadow">
                    <img src="https://picsum.photos/200/50" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <div>
                                <h5 className="card-title">{blog.title}</h5>
                                <Link className="btn btn-warning text-white" to={`/details/${blog.id}`}>Voir Plus</Link>
                            </div>
                        </div>
                </div>
            </div>
        ))}                
    </div>
  )
}

export default ListBlog
