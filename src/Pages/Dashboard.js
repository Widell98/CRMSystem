import TicketCard from '../Components/TicketCard'


const Dashboard = () => {

    const tickets = [
        {
            category: 'Q1 2022',
            color: 'red',
            title: 'Apple',
            owner: 'Erk',
            avatar: 'https://www.google.se/search?q=mark+zuckerberg+round+icon&hl=sv&tbm=isch&sxsrf=APq-WBt_3ovrE7kvqrNYU0_WZmmFWtzbxQ%3A1650619555199&source=hp&biw=913&bih=951&ei=o3RiYq24CJWRxc8Prs2niAw&iflsig=AHkkrS4AAAAAYmKCs4ZdHbYG2lQKDhAJuu3LVBFZyE2d&oq=&gs_lcp=CgNpbWcQARgEMgoIIxDvAxDqAhAnMgoIIxDvAxDqAhAnMgoIIxDvAxDqAhAnMgoIIxDvAxDqAhAnMgoIIxDvAxDqAhAnMgoIIxDvAxDqAhAnMgoIIxDvAxDqAhAnMgoIIxDvAxDqAhAnMgoIIxDvAxDqAhAnMgoIIxDvAxDqAhAnUABYAGCDFGgBcAB4AIABAIgBAJIBAJgBAKoBC2d3cy13aXotaW1nsAEK&sclient=img#imgrc=SGDVGxucjJoLfM',
            status: 'done',
            priority: 5,
            progress: 40,
            description: 'Make a video',
            timestamp: '2022-02-11TO7:36:17+0808'

        },
        {
            category: 'David',
            color: 'red',
            title: 'Apple',
            owner: 'Erk',
            avatar: 'https://www.google.se/search?q=mark+zuckerberg+round+icon&hl=sv&tbm=isch&sxsrf=APq-WBt_3ovrE7kvqrNYU0_WZmmFWtzbxQ%3A1650619555199&source=hp&biw=913&bih=951&ei=o3RiYq24CJWRxc8Prs2niAw&iflsig=AHkkrS4AAAAAYmKCs4ZdHbYG2lQKDhAJuu3LVBFZyE2d&oq=&gs_lcp=CgNpbWcQARgEMgoIIxDvAxDqAhAnMgoIIxDvAxDqAhAnMgoIIxDvAxDqAhAnMgoIIxDvAxDqAhAnMgoIIxDvAxDqAhAnMgoIIxDvAxDqAhAnMgoIIxDvAxDqAhAnMgoIIxDvAxDqAhAnMgoIIxDvAxDqAhAnMgoIIxDvAxDqAhAnUABYAGCDFGgBcAB4AIABAIgBAJIBAJgBAKoBC2d3cy13aXotaW1nsAEK&sclient=img#imgrc=SGDVGxucjJoLfM',
            status: 'done',
            priority: 5,
            progress: 40,
            description: 'Make a video',
            timestamp: '2022-02-11TO7:36:17+0808'

        },
        {
            category: 'David',
            color: 'red',
            title: 'Apple',
            owner: 'Erk',
            avatar: 'https://www.google.se/search?q=mark+zuckerberg+round+icon&hl=sv&tbm=isch&sxsrf=APq-WBt_3ovrE7kvqrNYU0_WZmmFWtzbxQ%3A1650619555199&source=hp&biw=913&bih=951&ei=o3RiYq24CJWRxc8Prs2niAw&iflsig=AHkkrS4AAAAAYmKCs4ZdHbYG2lQKDhAJuu3LVBFZyE2d&oq=&gs_lcp=CgNpbWcQARgEMgoIIxDvAxDqAhAnMgoIIxDvAxDqAhAnMgoIIxDvAxDqAhAnMgoIIxDvAxDqAhAnMgoIIxDvAxDqAhAnMgoIIxDvAxDqAhAnMgoIIxDvAxDqAhAnMgoIIxDvAxDqAhAnMgoIIxDvAxDqAhAnMgoIIxDvAxDqAhAnUABYAGCDFGgBcAB4AIABAIgBAJIBAJgBAKoBC2d3cy13aXotaW1nsAEK&sclient=img#imgrc=SGDVGxucjJoLfM',
            status: 'done',
            priority: 5,
            progress: 40,
            description: 'Make a video',
            timestamp: '2022-02-11TO7:36:17+0808'

        },
        {
            category: 'Erik',
            color: 'red',
            title: 'Apple',
            owner: 'Erk',
            avatar: 'https://www.google.se/search?q=mark+zuckerberg+round+icon&hl=sv&tbm=isch&sxsrf=APq-WBt_3ovrE7kvqrNYU0_WZmmFWtzbxQ%3A1650619555199&source=hp&biw=913&bih=951&ei=o3RiYq24CJWRxc8Prs2niAw&iflsig=AHkkrS4AAAAAYmKCs4ZdHbYG2lQKDhAJuu3LVBFZyE2d&oq=&gs_lcp=CgNpbWcQARgEMgoIIxDvAxDqAhAnMgoIIxDvAxDqAhAnMgoIIxDvAxDqAhAnMgoIIxDvAxDqAhAnMgoIIxDvAxDqAhAnMgoIIxDvAxDqAhAnMgoIIxDvAxDqAhAnMgoIIxDvAxDqAhAnMgoIIxDvAxDqAhAnMgoIIxDvAxDqAhAnUABYAGCDFGgBcAB4AIABAIgBAJIBAJgBAKoBC2d3cy13aXotaW1nsAEK&sclient=img#imgrc=SGDVGxucjJoLfM',
            status: 'done',
            priority: 5,
            progress: 40,
            description: 'Make a video',
            timestamp: '2022-02-11TO7:36:17+0808'

        },
        {
            category: 'Erik',
            color: 'red',
            title: 'Apple',
            owner: 'Erk',
            avatar: 'https://www.google.se/search?q=mark+zuckerberg+round+icon&hl=sv&tbm=isch&sxsrf=APq-WBt_3ovrE7kvqrNYU0_WZmmFWtzbxQ%3A1650619555199&source=hp&biw=913&bih=951&ei=o3RiYq24CJWRxc8Prs2niAw&iflsig=AHkkrS4AAAAAYmKCs4ZdHbYG2lQKDhAJuu3LVBFZyE2d&oq=&gs_lcp=CgNpbWcQARgEMgoIIxDvAxDqAhAnMgoIIxDvAxDqAhAnMgoIIxDvAxDqAhAnMgoIIxDvAxDqAhAnMgoIIxDvAxDqAhAnMgoIIxDvAxDqAhAnMgoIIxDvAxDqAhAnMgoIIxDvAxDqAhAnMgoIIxDvAxDqAhAnMgoIIxDvAxDqAhAnUABYAGCDFGgBcAB4AIABAIgBAJIBAJgBAKoBC2d3cy13aXotaW1nsAEK&sclient=img#imgrc=SGDVGxucjJoLfM',
            status: 'done',
            priority: 5,
            progress: 40,
            description: 'Make a video',
            timestamp: '2022-02-11TO7:36:17+0808'

        },

     
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
                                color={filteredTicket.color}
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