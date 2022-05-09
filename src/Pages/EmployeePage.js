import { useState, useEffect, useContext } from 'react'
import EmployeeCard from '../Components/EmployeeCard'
import axios from 'axios'
import CategoriesContext from '../context'



const EmployeePage = () => {

    const [Employees, setTickets] = useState(null)
    const {categories, setCategories } = useContext(CategoriesContext)

    useEffect(async () => {
        const response = await axios.get('http://localhost:8000/employees')

        const dataObject = response.data.data

        const arrayOfKeys = Object.keys(dataObject)
        const arrayOfData = Object.keys(dataObject).map((key) => dataObject[key])
        const formattedArray = []
        arrayOfKeys.forEach((key, index) => {
          const formmatedData = { ...arrayOfData[index] }
          formmatedData['documentId'] = key
          formattedArray.push(formmatedData)
        })

       setTickets(formattedArray)
    }, [])

    useEffect(() => {
        setCategories([...new Set(Employees?.map(({ category }) =>  category))])
    } , [Employees])


    const colors = [
        'rgb(255,179,186)',
        'rgb(255,223,186)',
        'rgb(255,255,186)',
        'rgb(186,255,201)',
        'rgb(186,225,255)',
    ]

    const uniqueCategories = [
        ...new Set(Employees?.map(({ category }) => category))
    ]


  
    return (
        <div className="dashboard">
            <h1 className="dashboard-title"> Agents </h1>
            <div className="ticket-container">
                {Employees && uniqueCategories?.map((uniqueCategory, categoryIndex) => (
                    <div key={categoryIndex}>
                        <h3>{uniqueCategory}</h3>
                        {Employees.filter(ticket => ticket.category === uniqueCategory)
                            .map((filteredTicket, _index) => (
                                <EmployeeCard
                                    id={_index}
                                    color={colors[categoryIndex] || colors[0]}
                                    ticket={filteredTicket}
                                />
                            ))
                        }
                    </div>
                ))}
            </div>
        </div>
    )
}

export default EmployeePage