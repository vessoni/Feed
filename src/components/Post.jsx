import styles from './Post.module.css'

export function Post(){

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/vessoni.png" />

          <div className={styles.authorInfo}>
            <strong>Alexandre Vessoni</strong>  
            <span>Developer</span>  
          </div>
        </div>
        
        <time title='6 June 08:13' dateTime="2022-06-16 08:13:30">1h ago</time>
      </header>

      <div className={styles.content}>
          <p>
          Fala galeraa 👋</p>

          <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

          <p><a href=''>jane.design/doctorcare</a></p>

          <p>
            <a href=''>#novoprojeto</a>{' '}
            <a href=''>#nlw</a> {' '}
            <a href=''> #rocketseat</a>
          </p>
          

      </div>

    </article>
  )
}