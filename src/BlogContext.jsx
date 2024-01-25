import { createContext, useContext, useEffect, useState } from "react"

const Context = createContext()

const BlogProvider = ({children}) => {
    const [data, setData] = useState([]);
    const [url, setUrl] = useState('https://jsonplaceholder.typicode.com/posts/');
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        const abortCont = new AbortController();
    
        setTimeout(() => {
          fetch(url, { signal: abortCont.signal })
          .then(res => {
            if (!res.ok) { // error coming back from server
              throw Error('could not fetch the data for that resource');
            } 
            return res.json();
          })
          .then(data => {
            setIsPending(false);
            setData(data);
            setError(null);
            // console.log(data);
          })
          .catch(err => {
            if (err.name === 'AbortError') {
              console.log('fetch aborted')
            } else {
              // auto catches network / connection error
              setIsPending(false);
              setError(err.message);
            }
          })
        }, 1000);
    
        // abort the fetch
        return () => abortCont.abort();
      }, [url])

    const changeUrl = (newUrl) => {
        setUrl(newUrl)
    }

  const contextValue = {
    data,
    isPending,
    error,
    changeUrl
  }

  return <Context.Provider value={contextValue}>{children}</Context.Provider>
}

export const useBlogContext = () => useContext(Context)

export default BlogProvider