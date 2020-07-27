import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch } from 'react-redux'
import { withRouter, RouteComponentProps } from 'react-router-dom';
import styled from 'styled-components';
import Comment from '../components/comment.component';
import Author from '../components/post-author-component'
import Modal from '../components/post-update-modal'
import { 
    requestPostDetail,
    requestPostDelete,
    requestLoadComment,
    requestLoadAuthor
     } from '../redux/actions/post-action'

interface PostType {
    userId: number,
    id: number;
    title: string;
    body: string
}
interface PostStateType {
    loading?: boolean,
    post?: PostType,
    error?: string
}
interface PostDeleteStateType {
    loading?: boolean,
    deleted?: boolean,
    error?: string
}

interface CommentType{
  postId: number,
  id: number,
  name:  string,
  email: string,
  body: string,
}
interface CommentStateType {
    loading?: boolean,
    comments?: CommentType[],
    error?: string
}

interface Geo {
  lat: string,
  lng: string
}
interface Address {
  street: string,
  suite: string,
  city: string,
  zipcode: string,
  geo: Geo
}

interface Company {
  name: string,
  catchPhrase: string,
  bs: string
}
interface UserType {
  id: number,
  name: string,
  username: string,
  email: string,
  address: Address,
  phone: string,
  website: string,
  company: Company
}

interface UserStateType {
  loadding?: string,
  author: UserType,
  error: string
}
const PostDetail: React.FC<RouteComponentProps<{}>> = ({ match, history }) => {

    const [open, setOpen] = useState<boolean>(false);
    const dispatch = useDispatch();

   const postAuthor: UserStateType = useSelector(state => state.postAuthor);
    const postDetail: PostStateType = useSelector(state => state.postDetail);
    const loadedComments: CommentStateType = useSelector(state => state.loadedComments);
    const postDelete: PostDeleteStateType = useSelector(state => state.postDelete);
  
    const onClickOpenModal = (e: React.MouseEvent<HTMLButtonElement>): void => {
     e.preventDefault();
     setOpen(true);
    };

    const authorHandleCLick = (e: React.MouseEvent<HTMLButtonElement>, userId: number): void => {
      e.preventDefault();
      dispatch(requestLoadAuthor(userId));
    };

     const deleteHandleCLick = (e: React.MouseEvent<HTMLButtonElement>, postId: number): void => {
          e.preventDefault();
          dispatch(requestPostDelete(postId));
        };

    const commentHandleCLick = (e: React.MouseEvent<HTMLButtonElement>, postId: number): void => {
        e.preventDefault();
        dispatch(requestLoadComment(postId));
        };

    useEffect(() =>{
      dispatch(requestPostDetail(match.params.id));
    }, [])
    
   postDelete.deleted &&  setTimeout(() =>  history.push("/"), 1000);

    return (
      <>
      {
          open ? <Modal {...postDetail.post} open={open} /> :
      <PostDetailWrapper>
        {postDetail.loading ? (
          <h2>...Loading</h2>
        ) : (
          postDetail.post && (
            <>
              <PostDetailData>
                <h4>{postDetail.post.title.toLocaleUpperCase()}</h4>
                <p>{postDetail.post.body}</p>
              </PostDetailData>
              <div style={{ margin: "2rem" }}>
                {postDelete.loading ? (
                  <span style={{ fontSize: "1.5rem" }}>..deleting post</span>
                ) : postDelete.error ? (
                  <span style={{ fontSize: "1rem", color: "red" }}>
                    Ops unable to delete this post
                  </span>
                ) : (
                  postDelete.deleted && (
                    <span style={{ fontSize: "2rem", color: "green" }}>
                      post deleted successfully
                    </span>
                  )
                )}
              </div>
              {
                  postAuthor.loadding ? <span style={{ fontSize: "1.5rem" }}>..Loading Author</span>:
                    postAuthor.error ? 
                    <span style={{ fontSize: "1rem", color: "red" }}>
                    Ops unable to load the Author
                    </span>: 
                      postAuthor.author && (<>
                        <h1 style={{textTransform: "uppercase"}}>Author information </h1>
                        <Author {...postAuthor.author} />
                        </>
                    ) 
              }
              <ButtonWrapper>
                <Button 
                  onClick={(event) =>
                      authorHandleCLick(event, postDetail.post.userId)
                    }
                  >
                    Author</Button>
                <Button
                  onClick={(event) =>
                    commentHandleCLick(event, postDetail.post.id)
                  }
                >
                  load comments
                </Button>
                <Button
                  onClick={(event) =>
                    deleteHandleCLick(event, postDetail.post.id)
                  }
                >
                  Delete Post
                </Button>
                  <Button
                     onClick={onClickOpenModal}>
                       Update Post
                   </Button>
              </ButtonWrapper>
              {loadedComments.loading ? (
                <span style={{ fontSize: "1.5rem" }}>...Loading Comments</span>
              ) : loadedComments.error ? (
                <span style={{ fontSize: "1rem", color: "red" }}>
                  Ops unable to delete this post
                </span>
              ) : (
                loadedComments.comments && (
                  <CommentListWrapper>
                    {
                      loadedComments.comments.map((comment: CommentType) => (
                        <Comment key={comment.id} {...comment} />
                      ))}
                  </CommentListWrapper>
                )
              )}
            </>
          )
        )}
      </PostDetailWrapper>
        }
      </>
    );
}

export default withRouter(PostDetail);


const PostDetailWrapper = styled.div`
width: 100%;
margin: 100px auto;
display: flex;
flex-direction: column;
align-items: center;
justify-conten: center;
padding: 8px;
`

const ButtonWrapper = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  & * {
      margin: 1rem
  }
`;
const Button = styled.button`
  height: 2rem;
  width: 20%;
  background-color: #0a6783;
  color: white;
  text-transform: uppercase;
  fon-size: 0.5rem;
  font-weight: bolder;
  border: none;
  cursor: pointer;
 text-align: center;
  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const PostDetailData = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-conten: center;
    padding: 1rem;
  j
`;

const CommentListWrapper = styled.div`
width:50%;
margin: 5rem auto;
`