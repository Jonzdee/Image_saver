import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState('')

  const handleFormSubmit = (event) => {
    event.preventDefault()

    onSubmit(term)
  }
  const handleChange = (event) => {
    setTerm(event.target.value)
  }
  return (
    <div className='container mt-5 d-flex  justify-content-center mb-5 '>
      <div className='row'>
        <div className='col-12 '>
          <form onSubmit={handleFormSubmit}>
            <label className='h2'>Enter Search Term</label>
            <input
              className='form-control '
              value={term}
              onChange={handleChange}
            />
          </form>
        </div>
      </div>
    </div>
  )
}
export default SearchBar
