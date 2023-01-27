import { filter } from "../reducers/filterReducer"
import { useDispatch } from "react-redux"
import { connect } from "react-redux"

const Filter = (props) => {

    const dispatch = useDispatch()

    const handleChange = (event) => {
        props.filter(event.target.value)
       // dispatch(filter(event.target.value))
    }

    return (
        <div>
           filter <input onChange={handleChange} />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        
    }
}

const mapDispatchToProps = {
    filter,
}

const ConnectedFilter = connect(mapStateToProps, mapDispatchToProps)(Filter)

export default ConnectedFilter