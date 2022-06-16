import styles from './Comment.module.css';
import { Trash, ThumbsUp } from 'phosphor-react';

export function Comment() {
  return(
    <div className={styles.comment}>
      <img src="https://github.com/vessoni.png" alt="" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
            <header>
              <div className={styles.authorAndTime}>
                <strong>Alexandre Vessoni</strong>
                <time title='6 June 08:13' dateTime="2022-06-16 08:13:30">1h ago</time>
              </div>

              <button title="delete Comment">
                <Trash size={24} />
              </button>
            </header>

            <p>Very good, Congrats</p>
        </div>
        <footer>
        <button>
           <ThumbsUp />

           Like <span>33</span>
        </button>

        </footer>
      </div>
    </div>
  )
}