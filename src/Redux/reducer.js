// import { ADD_DATA, ERROR, LOADING } from "./action.type";

// const initialdata = {
//     loading:false,
//     error:false,
//     data:[]
// }

// export const reducer = (state=initialdata,action)=>{
//     const { type, payload } = action;
//     const { data } = state

//     switch(type){
//         case LOADING :
//             return {
//                 ...state,
//                 loading:true,
//                 error:false
//             }
//         case ERROR :
//             return {
//                 ...state,
//                 loading:false,
//                 error:true
//             }
//         case ADD_DATA :
//             return{
//                 ...state,
//                 loading:false,
//                 error:false,
//                 data :[...data,...payload]
//             }
//         default : return state
//     }
// }