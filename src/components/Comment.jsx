import {useState} from 'react';
import styles from './Comment.module.css';
import { Trash, ThumbsUp } from 'phosphor-react';
import { Avatar } from './avatar';

export function Comment({content, onDeleteComment}) {

  const [likeCount, setLikeCount ] = useState(0);

  function handleDeleteComment(){
    onDeleteComment(content);
  }

  function handleLikeCount(){
    setLikeCount(likeCount + 1);
  }
  
  return(
    <div className={styles.comment}>
      {/* <img src="https://github.com/vessoni.png" alt="" /> */}
      <Avatar hasBorder={false} src="https://github.com/vessoni.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
            <header>
              <div className={styles.authorAndTime}>
                <strong>Alexandre Vessoni</strong>
                <time title='6 June 08:13' dateTime="2022-06-16 08:13:30">1h ago</time>
              </div>

              <button onClick={handleDeleteComment} title="delete Comment">
                <Trash size={24} />
              </button>
            </header>

            <p>{content}</p>
        </div>
        <footer>
        <button onClick={handleLikeCount}>
           <ThumbsUp />

           Like <span>{likeCount}</span>
        </button>

        </footer>
      </div>
    </div>
  )
}