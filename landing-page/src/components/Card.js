import photo from './images/illustration-flowing-conversation.svg'
import {StyledCard} from './styles/Card.styled'

export default function Card({item: {id, title, body, image} }) {
return (
    <StyledCard>
        <div>
            <h2>{title}</h2>
            <p>{body}</p>
        </div>
        <div>
             <img src={photo} />  
        </div>
    </StyledCard>
)
}