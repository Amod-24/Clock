import styles from "./SingleTIle.module.css";
export default function SingliTile({tiles}){
    function visibilityTiles(x){
        return(
            {
                opacity:tiles.includes(x) ? "100%" : "10%"
            }
        )
    }
    function stylesForTiles(){
        return(
            {
                width:"68%",
                height:"6.5vmin",
                display:"flex",
                justifyContent:"space-between",
                alignItems:"center",
                
            }
        )
    }
    return(
        <div className={styles.container} style={{
            height:"25vmin",
            width:"13vmin",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            flexDirection:"column",
            

        }}>
            <div className={styles.tileHorizontal} style={visibilityTiles(1)}></div>
            <div style={stylesForTiles()}>
                <div className={styles.tileVerticle} style={visibilityTiles(2)}></div>
                <div className={styles.tileVerticle} style={visibilityTiles(3)}></div>
            </div>
            <div className={styles.tileHorizontal} style={visibilityTiles(4)}></div>
            <div style={stylesForTiles()}>
                <div className={styles.tileVerticle} style={visibilityTiles(5)}></div>
                <div className={styles.tileVerticle} style={visibilityTiles(6)}></div>
            </div>
            <div className={styles.tileHorizontal} style={visibilityTiles(7)}></div>
            
        </div>
    )
}