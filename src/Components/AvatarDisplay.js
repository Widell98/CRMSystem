import blankAvatar from '../images/blankAvatar.png'

const AvatarDisplay = ({ticket}) => {
    return(
        <div className="avatar-conatiner">
           <div className="img-container">
            <img src={ticket.avatar ? ticket.avatar : blankAvatar} alt={'photo of' + ticket.owner}/>
           </div>
        </div>
    )
}

export default AvatarDisplay