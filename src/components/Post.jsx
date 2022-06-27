import {useState} from 'react';
import { format, formatDistanceToNow } from 'date-fns';
import { LineSegments } from 'phosphor-react';
import { Avatar } from './avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';


export function Post({author, publishedAt, content}){
 const [comments, setComments] = useState(['Maneiro']);

 const [newCommentText, setNewCommentText]= useState('');

  const publishedDataFormated = format(publishedAt, "dd LLL 'at' HH:mm");
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt);


  function handleCreateNewComment(){
    event.preventDefault();
    setComments([...comments, newCommentText]);
    setNewCommentText('');
}


  function handleNewCommentChange(){
    setNewCommentText(event.target.value )

  }

  function deleteComment(comment){
    const commentWithoutDeletedOne = comments.filter(e => e !== comment);
    setComments(commentWithoutDeletedOne);
  }


  const isNewCommentEmpty = newCommentText.length === 0;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl}  />

          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>  
            <span>{author.role}</span>  
          </div>
        </div>
        
        <time title={publishedDataFormated} dateTime={publishedAt.toISOString()}>
       { publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map(c => {
          if(c.type === 'paragraph'){
            return <p key={c.content}>{c.content}</p>
          } else if(c.type === 'link'){
            return <p key={c.content}><a href=''>{c.content}</a></p>
          }
        })}
      </div>


      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Feedback</strong>

        <textarea 
        name='comment'
        placeholder="Leave your comment"
        value={newCommentText}
        onChange={handleNewCommentChange}
        required
        />
        <footer>
           <button type="submit" disabled={isNewCommentEmpty}>Comment</button>
        </footer>
        
      </form>

      <div className={styles.commentList}>
        {comments.map(e => {
          return <Comment key={e} content={e} onDeleteComment={deleteComment}/>
        })}
       
       
      </div>
    </article>
  )
}