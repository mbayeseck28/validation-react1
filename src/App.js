import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Header';
import { Route, Routes } from 'react-router-dom';
import Blog from './Blog';
import BlogProvider from './BlogContext';
import DetailBlog from './DetailBlog';
import NotFound from './NotFound';

function App() {
  return (
    <div className="App bg-dark text-light">
      <BlogProvider>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Blog />} />
            <Route path="/details/:id" element={<DetailBlog />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BlogProvider>
    </div>
  );
}

export default App;
