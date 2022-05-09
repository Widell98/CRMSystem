import axios from 'axios'
import { useState, useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import CategoriesContext from '../context'

    const AdminPage = ({ editMode} ) => {

        const [formData, setFormData] = useState({
            status: 'not started',
            timestamp: new Date().toISOString()
          })
          const { categories, setCategories } = useContext(CategoriesContext)
          const navigate = useNavigate()
          let { id } = useParams()
        
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
              const response = await axios.put(`http://localhost:8000/employees/${id}`, {
                data: formData,
              })
              const success = response.status === 200
              if (success) {
                navigate('/employees') // navigerar tillbaks till homepage om det är lyckat
              }
            }
        
            if (!editMode) {
              const response = await axios.post('http://localhost:8000/employees', {
                formData,
              })
              const success = response.status === 200
              if (success) {
                navigate('/employees') // navigerar tillbaks till homepage om det är lyckat
              }
            }
          }
        
          const fetchData = async () => {
            const response = await axios.get(`http://localhost:8000/employees/${id}`)
            console.log('AAAAAA', response)
            setFormData(response.data.data)
          }
        
          useEffect(() => {
            if (editMode) {
              fetchData()
            }
          }, [])


          return (
            <div className="ticket">
              <h1>{editMode ? 'Update Your Information' : 'Add agent'}</h1>
              <div className="ticket-container">
                <form onSubmit={handleSubmit}>
                  <section>
                    <label htmlFor="Name">Name</label>
                    <input
                      id="Name"
                      name="Name"
                      type="text"
                      onChange={handleChange}
                      required={true}
                      value={formData.Name}
                    />
        
                    <label htmlFor="Role">Role</label>
                    <input
                      id="Role"
                      name="Role"
                      type="text"
                      onChange={handleChange}
                      value={formData.Role}
                    />
         <label htmlFor="Age">Age</label>
                    <input
                      id="Age"
                      name="Age"
                      type="text"
                      onChange={handleChange}
                      value={formData.location}
                    />
                    <label className="Email-label" htmlFor="Email">Email</label>
                    <input
                      id="Email"
                      name="Email"
                      type="text"
                      onChange={handleChange}
                      required={true}
                      value={formData.Email}
                    />
        
                    {editMode && (
                      <>
                        <input
                          type="range"
                          id="progress"
                          name="progress"
                          value={formData.progress}
                          min="0"
                          max="100"
                          onChange={handleChange}
                        />
                        <label htmlFor="progress">Progress</label>
        
                        <label>Status</label>
                        <select
                          name="status"
                          value={formData.status}
                          onChange={handleChange}
                        >
                          <option selected={formData.status == 'done'} value="done">
                            Done
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
    
    export default AdminPage