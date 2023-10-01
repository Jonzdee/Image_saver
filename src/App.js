import { useState } from 'react'
import SearchBar from './component/SearchBar'
import searchImages from './api'
import ImageList from './component/ImageList'
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  const [images, setImages] = useState([])

  const handleSubmit = async (term) => {
    const result = await searchImages(term)

    setImages(result)
  }
  return (
    <div className=''>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  )
}
export default App
