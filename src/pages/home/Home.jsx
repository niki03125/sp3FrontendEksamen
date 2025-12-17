import styles from './Home.module.css';


function Home(){
    return(
        
        <div className={styles.homeContainer}>

          <section className={styles.heroSection}>

            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>Velkommen til en verden af musik </h1>
            <p className={styles.heroText}>
            Dyk ned i en ubegrænset samling af rytmer og melodier. Uanset om du er til de nyeste hits, 
            tidløse klassikere eller undergrundens skjulte perler, har vi lyden til dit øjeblik.
            <br/>
            <br />
            Tjek det ud i toppen af siden!
            </p>
          
            </div> 

          <div className={styles.imageContainer}>
            <img src="/homepage.png" alt="homepage" className={styles.imgimg} />
          </div>

          </section>
        </div>
        
    );

}
export default Home;