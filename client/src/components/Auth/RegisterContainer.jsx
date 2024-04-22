import { Component } from "react";
import { registerNewUser } from "../../reducers/AppReducer";
import Register from "./Register";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

class RegisterContainer extends Component {
    navigate = useNavigate();

    handleSubmit = (values) => {
        this.props.setNewUser(values);
        this.navigate('/login');
    };

    render() {
        return (
            <Register onSubmit={this.handleSubmit} />
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.user
})

const mapDispatchToProps = (dispatch) => {
    return {
        setNewUser: (user) => {
            dispatch(registerNewUser(user));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer);