import * as POSTCONSTANT from '../constants/post-constant';


const listPosts = (state = { posts: [] }, action) => {
  switch (action.type) {
    case POSTCONSTANT.POST_LIST_REQUEST:
      return { loading: true };
    case POSTCONSTANT.POST_LIST_SUCCESS:
      return { loading: false, posts: action.payload };
    case POSTCONSTANT.POST_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};


const postDetail = (state = { product: { } }, action) => {
    switch(action.type){
        case POSTCONSTANT.POST_DETAILS_REQUEST:
            return {loading: true};
        case POSTCONSTANT.POST_DETAILS_SUCCESS:
            return { loading: false, product: action.payload};
        case POSTCONSTANT.POST_DETAILS_FAIL:
            return { loading: false, error: action.payload };
        default: return state;
    }
};




const addPost = ( state = {post: {}}, action) => {
        switch(action.type){
            case POSTCONSTANT.POST_ADD_REQUEST:
                return { loading: true };
            case POSTCONSTANT.POST_ADD_SUCCESS:
                return { loading: false, success: true, post: action.payload };
             case POSTCONSTANT.POST_ADD_FAIL:
                 return { loading: false, error: action.payload };
             default: return state;
        }
};

const deletePost = (state = { post: {} }, action) => {
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
        post: action.payload,
      };
    case POSTCONSTANT.POST_DELETE_FAIL:
      return {
        ...state,
        loading: false,
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