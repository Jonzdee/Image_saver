import ImageSearch from './ImageSearch'
import './ImageList.css'

function ImageList({ images }) {
  const renderImages = images.map((image) => {
    return <ImageSearch key={image.id} image={image} />
  })
  return <div className='image-list'>{renderImages}</div>
}
export default ImageList
