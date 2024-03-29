import { useState, useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import CategoriesContext from '../context'

const TicketPage = ({ editMode }) => {
  
  const [formData, setFormData] = useState({
    status: 'not started',
    progress: 0,
    timestamp: new Date().toISOString(),
  })
  const { categories, setCategories } = useContext(CategoriesContext)
  const navigate = useNavigate();
  let { id } = useParams();

  const refreshPage = () => {
    navigate(0);
}
  
refreshPage();
  const handleChange = (e) => {
    const value = e.target.value
    const name = e.target.name
    
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (editMode) {
      const response = await axios.put(`http://localhost:8000/clients/${id}`, {
        data: formData,
      })
      const success = response.status === 200
      if (success) {
        navigate('/dashboard') // navigerar tillbaks till homepage om det är lyckat
      }
    }
    
    if (!editMode) {
      const response = await axios.post('http://localhost:8000/clients', {
        formData,
      })
      const success = response.status === 200
      if (success) {
        navigate('/dashboard') // navigerar tillbaks till homepage om det är lyckat
      }
    }
  }
  
  const fetchData = async () => {
    const response = await axios.get(`http://localhost:8000/clients/${id}`)
    console.log('AAAAAA', response)
    setFormData(response.data.data)
  }
  
  useEffect(() => {
    if (editMode) {
      fetchData()
    }
  }, [])
  
  console.log('EDITcategories', categories)
  console.log('formData', formData.status)
  console.log('formData.status', formData.status === 'stuck')
  
  

  return (
    <div className="ticket">
      <h1>{editMode ? 'Update case' : 'New case'}</h1>
      <div className="ticket-container">
        <form onSubmit={handleSubmit}>
          <section>
            <label htmlFor="title">Company</label>
            <input
              id="title"
              name="title"
              type="text"
              onChange={handleChange}
              required={true}
              value={formData.title}
              />

            <label htmlFor="location">Location</label>
            <input
              id="location"
              name="location"
              type="text"
              onChange={handleChange}
              value={formData.location}
            />

            <label className="description-label" htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              type="text"
              onChange={handleChange}
              required={true}
              value={formData.description}
            />
 
            {/* <label>Employee</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
            >
              {categories?.map((category, _index) => (
                <option value={category}>{category}</option>
              ))}
            </select> */}

            <label htmlFor="new-category">Add agent</label>
            <input
              id="new-category"
              name="category"
              type="text"
              onChange={handleChange}
              value={formData.category}
            />
            
{/* 
            <label>Priority</label>
            <div className="multiple-input-container">
              <input
                id="priority-1"
                name="priority"
                type="radio"
                onChange={handleChange}
                value={1}
                checked={formData.priority == 1}
              />
              <label htmlFor="priority-1">1</label>
              <input
                id="priority-2"
                name="priority"
                type="radio"
                onChange={handleChange}
                value={2}
                checked={formData.priority == 2}
              />
              <label htmlFor="priority-2">2</label>
              <input
                id="priority-3"
                name="priority"
                type="radio"
                onChange={handleChange}
                value={3}
                checked={formData.priority == 3}
              />
              <label htmlFor="priority-3">3</label>
              <input
                id="priority-4"
                name="priority"
                type="radio"
                onChange={handleChange}
                value={4}
                checked={formData.priority == 4}
              />
              <label htmlFor="priority-4">4</label>
              <input
                id="priority-5"
                name="priority"
                type="radio"
                onChange={handleChange}
                value={5}
                checked={formData.priority == 5}
              />
              <label htmlFor="priority-5">5</label>
            </div> */}

            {editMode && (
              <>
                  {/* <label htmlFor="progress">Progress</label>
                <input
                  type="range"
                  id="progress"
                  name="progress"
                  value={formData.progress}
                  min="0"
                  max="100"
                  onChange={handleChange}
                /> */}

                <label>Status</label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                >
                  <option selected={formData.status == 'done'} value="done">
                    Finished
                  </option>
                  <option
                    selected={formData.status == 'working on it'}
                    value="working on it"
                  >
                    Working on it
                  </option>
                  <option selected={formData.status == 'stuck'} value="stuck">
                    Stuck
                  </option>
                  <option
                    selected={formData.status == 'not started'}
                    value="not started"
                  >
                    Not Started
                  </option>
                </select>
              </>
            )}

            <input type="submit" />
          </section>

          <section>
            <label htmlFor="Compensation"> Compensation </label>
            <input
              id="Compensation"
              name="Compensation"
              type="text"
              onChange={handleChange}
              required={true}
              value={formData.Compensation}
            />

            <label htmlFor="Telephone"> Telephone </label>
            <input
              id="Telephone"
              name="Telephone"
              type="text"
              onChange={handleChange}
              required={true}
              value={formData.Telephone}
            />

            <label htmlFor="avatar">Logo</label>
            <input
              id="avatar"
              name="avatar"
              type="url"
              onChange={handleChange}
            />

            <div className="img-preview">
              {formData.avatar && (
                <img src={formData.avatar} alt="image preview" />
              )}
            </div>
          </section>
        </form>
      </div>
    </div>
  )
}
export default TicketPage