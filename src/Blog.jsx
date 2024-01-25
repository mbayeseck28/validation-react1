import React from 'react'
import ListBlog from './ListBlog'
import { useBlogContext } from './BlogContext';
import Loading from './Loading';

const Blog = () => {
    const {isPending} = useBlogContext()
  return (
    <div className='mt-4'>
      { isPending &&
        <Loading />
      }
      <ListBlog />
    </div>
  )
}

export default Blog
