
const initialState = {
    comments: [
    {id: 1, name: 'name' ,text: 'text', date: 'today'} 
]
};

const comments = ( state = initialState, action ) => {
switch(action.type){
    case 'ADD_COMMENT':
        return {
            ...state,
            comments: [
                ...state.comments,
                {
                    id: action.id,
                    name: action.comment.name,
                    text: action.comment.text,
                    date: action.comment.date
                }
            ]
        }
    case 'REMOVE_COMMENT' :
        let newComments = state.comments.filter(comment => action.id !== comment.id );

        return {
            ...state,
            comments: newComments
        }
                default:
                    return state;
                    
      }
}
export default comments;