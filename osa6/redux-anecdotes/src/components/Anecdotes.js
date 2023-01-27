
import { useDispatch, useSelector } from "react-redux"
import { vote } from "../reducers/anecdoteReducer"
import { notification } from "../reducers/notificationReducer"
import { connect } from "react-redux"


const Anecdote = ({ anecdote, handleClick }) => {
    return (
    <div>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes} votes 
            <button onClick={handleClick}>vote</button>
            <p></p>
          </div>
    </div>
    )
}

const Anecdotes = (props) => {
    const dispatch = useDispatch()

   /* const anecdotesToShow = () => {
        return props.anecdotes.slice().sort((a, b) => b.votes - a.votes).filter(n => n.content.includes(props.filter))
    }

    const anecdotes = useSelector(({ anecdotes, filter }) => {
        
    })*/

return (
    <div>
    <div>
    {props.anecdotes.map(anecdote =>
        <Anecdote 
        key={anecdote.id}
        anecdote={anecdote}
        handleClick = {() => {
            props.vote(anecdote.id)
            props.notification(anecdote)
            //dispatch(vote(anecdote.id))
           // dispatch(notification(anecdote))
        }
    }
       />
      )} 
      </div></div>
    )
}

const mapStateToProps = (state) => {
    return {
        anecdotes: state.anecdotes.slice().sort((a, b) => b.votes - a.votes).filter(n => n.content.includes(state.filter))
    }
}

const mapDispatchToProps = {
    vote,
    notification,
}

const ConnectedAnecdotes = connect(mapStateToProps, mapDispatchToProps)(Anecdotes)
export default ConnectedAnecdotes

//export default Anecdotes