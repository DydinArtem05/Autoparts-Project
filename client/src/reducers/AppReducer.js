const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const REGISTER_NEW_USER = "REGISTER_NEW_USER";

const initialState = {
    products:[
        {id:1, name:"Generator", description:"Lorem ipsum dolow sit amet", price:"120$", image:''},
        {id:2, name:"Belt", description:"Lorem ipsum dolow sit amet", price:"190$", image:''},
        {id:3, name:"Igla", description:"Lorem ipsum dolow sit amet", price:"120$", image:''},
        {id:4, name:"Pyla", description:"Lorem ipsum dolow sit amet", price:"120$", image:''},
        {id:5, name:"Generator", description:"Lorem ipsum dolow sit amet", price:"120$", image:''},
        {id:6, name:"Belt", description:"Lorem ipsum dolow sit amet", price:"190$", image:''},
        {id:7, name:"Igla", description:"Lorem ipsum dolow sit amet", price:"120$", image:''},
        {id:8, name:"Pyla", description:"Lorem ipsum dolow sit amet", price:"120$", image:''},
        {id:9, name:"Generator2", description:"Lorem ipsum dolow sit amet", price:"120$", image:''},
        {id:10, name:"Belt2", description:"Lorem ipsum dolow sit amet", price:"190$", image:''},
        {id:11, name:"Igla2", description:"Lorem ipsum dolow sit amet", price:"120$", image:''},
        {id:12, name:"Pyla2", description:"Lorem ipsum dolow sit amet", price:"120$", image:''},
        {id:13, name:"Generator2", description:"Lorem ipsum dolow sit amet", price:"120$", image:''},
        {id:14, name:"Belt2", description:"Lorem ipsum dolow sit amet", price:"190$", image:''},
        {id:15, name:"Igla2", description:"Lorem ipsum dolow sit amet", price:"120$", image:''},
        {id:16, name:"Pyla2", description:"Lorem ipsum dolow sit amet", price:"120$", image:''},
        {id:17, name:"Generator3", description:"Lorem ipsum dolow sit amet", price:"120$", image:''},
        {id:18, name:"Belt3", description:"Lorem ipsum dolow sit amet", price:"190$", image:''},
        {id:19, name:"Igla3", description:"Lorem ipsum dolow sit amet", price:"120$", image:''},
        {id:20, name:"Pyla3", description:"Lorem ipsum dolow sit amet", price:"120$", image:''},
        {id:21, name:"Generator3", description:"Lorem ipsum dolow sit amet", price:"120$", image:''},
        {id:22, name:"Belt3", description:"Lorem ipsum dolow sit amet", price:"190$", image:''},
        {id:23, name:"Igla3", description:"Lorem ipsum dolow sit amet", price:"120$", image:''},
        {id:24, name:"Pyla3", description:"Lorem ipsum dolow sit amet", price:"120$", image:''},
        {id:25, name:"Generator4", description:"Lorem ipsum dolow sit amet", price:"120$", image:''},
        {id:26, name:"Belt4", description:"Lorem ipsum dolow sit amet", price:"190$", image:''},
        {id:27, name:"Igla4", description:"Lorem ipsum dolow sit amet", price:"120$", image:''},
        {id:28, name:"Igla4", description:"Lorem ipsum dolow sit amet", price:"120$", image:''},
        {id:29, name:"Pyla4", description:"Lorem ipsum dolow sit amet", price:"120$", image:''},
        {id:30, name:"Generator4", description:"Lorem ipsum dolow sit amet", price:"120$", image:''},
        {id:31, name:"Belt4", description:"Lorem ipsum dolow sit amet", price:"190$", image:''},
        {id:32, name:"Igla4", description:"Lorem ipsum dolow sit amet", price:"120$", image:''},
        {id:33, name:"Pyla5", description:"Lorem ipsum dolow sit amet", price:"120$", image:''},
        {id:34, name:"Generator5", description:"Lorem ipsum dolow sit amet", price:"120$", image:''},
        {id:35, name:"Belt5", description:"Lorem ipsum dolow sit amet", price:"190$", image:''},
        {id:36, name:"Igla5", description:"Lorem ipsum dolow sit amet", price:"120$", image:''},
        {id:37, name:"Pyla5", description:"Lorem ipsum dolow sit amet", price:"120$", image:''},
        {id:38, name:"Generator5", description:"Lorem ipsum dolow sit amet", price:"120$", image:''},
        {id:39, name:"Belt5", description:"Lorem ipsum dolow sit amet", price:"190$", image:''},
        {id:40, name:"Igla5", description:"Lorem ipsum dolow sit amet", price:"120$", image:''},
        {id:41, name:"Generator6", description:"Lorem ipsum dolow sit amet", price:"120$", image:''},
        {id:42, name:"Belt6", description:"Lorem ipsum dolow sit amet", price:"190$", image:''},
        {id:43, name:"Igla6", description:"Lorem ipsum dolow sit amet", price:"120$", image:''},
    ],
    productsPageAmount:8,
    currentPage: 1,
    showPages: 5,
    user:[
    ]
}

const AppReducer = (state = initialState, action) =>{
    switch (action.type) {
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage 
            }
        case REGISTER_NEW_USER:
            return{
                ...state,
                user: action.newUser
            }
        default :
            return state
    }
}

export const setCurrentPageAC = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const registerNewUser = (newUser) => ({ type: REGISTER_NEW_USER, newUser })

export default AppReducer;