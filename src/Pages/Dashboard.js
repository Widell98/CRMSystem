import TicketCard from '../Components/TicketCard'


const Dashboard = () => {

    const tickets = [

        {
            category: 'David',
            staff: 'Nilsson',
            color: 'red',
            title: 'Burger King',
            owner: 'bkKungen',
            avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Burger_King_2020.svg/250px-Burger_King_2020.svg.png',
            status: 'working on it',
            priority: 5,
            progress: 50,
            description: 'great nuggets',
            timestamp: '2022-02-11TO7:36:17+0808'

        },
        {
            category: 'David',
            staff: 'Lontan',
            color: 'red',
            title: 'McDonalds',
            owner: 'Mckungen',
            avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/800px-McDonald%27s_Golden_Arches.svg.png',
            status: 'done',
            priority: 2,
            progress: 20,
            description: 'great burgers',
            timestamp: '2022-02-11TO7:36:17+0808'

        },
        {
            category: 'Erik',
            color: 'black',
            title: 'Apple',
            owner: 'Erk',
            avatar: 'https://pbs.twimg.com/profile_images/1283958620359516160/p7zz5dxZ.jpg',
            status: 'stuck',
            priority: 3,
            progress: 40,
            description: 'best phones',
            timestamp: '2022-02-11TO7:36:17+0808'

        },
        {
            category: 'Erik',
            color: 'red',
            title: 'Coca-cola',
            owner: 'Coke',
            avatar: 'https://www.designbust.com/download/553/png/coca_cola_logo_icon512.png',
            status: 'done',
            priority: 5,
            progress: 40,
            description: 'greatest drink ever',
            timestamp: '2022-02-11TO7:36:17+0808'

        },

     
    ]

 
    const colors = [
        'rgb(255,179,186)',
        'rgb(255,223,186)',
        'rgb(255,255,186)',
        'rgb(186,255,201)',
        'rgb(186,225,255)',
      ]

    const uniqueCateogires = [
        ...new Set (tickets?.map(({ category }) => category))
    ]

    console.log(uniqueCateogires)

    return(
        <div className="dashboard">
            <h1> My projects</h1>
            <div className="ticket-container">
                {tickets && uniqueCateogires?.map((uniqueCategory, categoryIndex) => (
                    <div Key = {categoryIndex}>
                        <h3>{uniqueCategory}</h3>                       

                        {tickets.filter(ticket => ticket.category === uniqueCategory)
                            .map((filteredTicket, _index) => (
                                <TicketCard
                                id={_index}                               
                                color={colors[categoryIndex] || colors[0]}
                                ticket = {filteredTicket}
                                />
                            ))
                        }
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Dashboard