import * as POSTCONSTANT from '../constants/post-constant';

interface PostType {
  userId: number,
  id: number,
  title: string
}

interface PostListStateType {
  loading?: boolean,
  posts?: PostType[],
  error?: string
}

interface PostStateType {
  loading?: boolean,
  post?: PostType,
  error?: string
}


const listPosts = (state: PostListStateType = { posts: [] }, action): PostListStateType => {
  switch (action.type) {
    case POSTCONSTANT.POST_LIST_REQUEST:
      return { 
          ...state,
          loading: true 
      };
    case POSTCONSTANT.POST_LIST_SUCCESS:
      return { 
          ...state,
          loading: false, 
          posts: action.payload
       };
    case POSTCONSTANT.POST_LIST_FAIL:
      return { 
          loading: false, 
          error: action.payload 
      };
    default:
      return state;
  }
};


const postDetail = (state: PostStateType = {}, action): PostStateType => {
    switch(action.type){
        case POSTCONSTANT.POST_DETAILS_REQUEST:
            return {
              ...state,
              loading: true
            };
        case POSTCONSTANT.POST_DETAILS_SUCCESS:
            return {
              ...state,
               loading: false,
              post: action.payload,
              };
        case POSTCONSTANT.POST_DETAILS_FAIL:
            return {
              ...state,
               loading: false, 
               error: action.payload
              };
        default:
           return state;
    }
};



const addPost = (state: PostStateType = {}, action): PostStateType => {
      switch (action.type) {
        case POSTCONSTANT.POST_ADD_REQUEST:
          return {
            ...state,
            loading: true
          };
        case POSTCONSTANT.POST_ADD_SUCCESS:
          return {
            ...state,
            loading: false,
            post: action.payload,
          };
        case POSTCONSTANT.POST_ADD_FAIL:
          return {
            ...state,
            loading: false,
            error: action.payload
          };
        default:
          return state;
      }
};


const deletePost = (state = { deleted: false }, action) => {
  switch (action.type) {
    case POSTCONSTANT.POST_DELETE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case POSTCONSTANT.POST_DELETE_SUCCESS:
      return {
        ...state,
        loading: false,
        deleted: true,
      };
    case POSTCONSTANT.POST_DELETE_FAIL:
      return {
        ...state,
        loading: false,
        deleted: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

 export {
   listPosts,
   postDetail,
   addPost,
   deletePost
 };  