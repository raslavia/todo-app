

export const addComment = (comment) => ({
        type: 'ADD_COMMENT',
        id:  Math.random().toString(34).slice(2),
        comment
})


export const removeComment = (id) => ({
      type: 'REMOVE_COMMENT',
      id
  })