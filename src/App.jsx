
import './App.css'
import Bookmarks from './components/Bookmarks/Bookmarks';
import Header from './components/Header/Header';
import Blogs from './components/blogs/Blogs';




function App() {
  

  return (
    <>
    <Header></Header>
    <div className='md:flex max-w-6xl mx-auto'>
      <Blogs></Blogs>
      <Bookmarks></Bookmarks>
    </div>
    
    </>
  )
}

export default App
