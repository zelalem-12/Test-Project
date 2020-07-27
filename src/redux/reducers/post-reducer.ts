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
interface CommentType{
  postID: number,
  id: number,
  name:  string,
  emial: string,
  body: string,
}

interface CommentStateType {
  loading: boolean,
  comments?: CommentType[],
  error?: string
}

interface Geo{
  lat: string,
  lng: string
}
interface Address{
  street: string,
  suite: string,
  city: string,
  zipcode: string,
  geo: Geo
}

interface Company{
  name: string,
  catchPhrase: string,
  bs: string
}
interface UserType{
  id: number,
  name: string,
  username: string,
  email: string,
  address: Address,
  phone: string,
  website: string,
  company: Company
}
interface AuthorStateType{
  loading?: boolean,
  author?: UserType,
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

const loadComments = (state: CommentStateType = { comments: [], loading: false }, action): CommentStateType => {
  switch (action.type) {
    case POSTCONSTANT.LOAD_COMMENT_REQUEST:
      return {
        ...state,
        loading: true
      };
    case POSTCONSTANT.LOAD_COMMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        comments: action.payload
      };
    case POSTCONSTANT.LOAD_COMMENT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};


const loadAuthor = (state: AuthorStateType = { loading: false }, action): AuthorStateType => {
  switch (action.type) {
    case POSTCONSTANT.LOAD_AUTHOR_REQUEST:
      return {
        ...state,
        loading: true
      };
    case POSTCONSTANT.LOAD_AUTHOR_SUCCESS:
      return {
        ...state,
        loading: false,
        author: action.payload
      };
    case POSTCONSTANT.LOAD_AUTHOR_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};


const updatePost = (state: PostStateType = { loading: false }, action): PostStateType => {
  switch (action.type) {
    case POSTCONSTANT.POST_UPDATE_REQUEST:
      return {
        ...state,
        loading: true
      };
    case POSTCONSTANT.POST_UPDATE_SUCCESS:
      return {
        ...state,
        loading: false,
        post: action.payload
      };
    case POSTCONSTANT.POST_UPDATE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};


 export {
   listPosts,
   postDetail,
   addPost,
   deletePost,
   loadComments,
   loadAuthor,
   updatePost
 };  