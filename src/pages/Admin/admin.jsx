import styles from "./admin.module.css";
function Admin(){
    return(
        <>
        <h1 className= {styles.title}>Music Dashboard - Collection Summary</h1>

        <div className={styles.gridTable}>
            {/*header */}
            <div className={styles.gridHeader}> Catagory</div>
            <div className={styles.gridHeader}> Count</div>
            
            {/*rows */}
            <div className={styles.gridCell}>Songs</div>
            <div className={styles.gridCell}></div>

            <div className={styles.gridCell}>Albums</div>
            <div className={styles.gridCell}></div>

            <div className={styles.gridCell}>Artists</div>
            <div className={styles.gridCell}></div>
        </div>
        </>
    )

}
export default Admin;