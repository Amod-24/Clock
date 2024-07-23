import styles from "./Digital.module.css";
import SingliTile from "./SingleTile";
export default function DigitalClock({hours,minutes,seconds}){
    const h = new Date().getHours();
    function glowTile(x){
        let glowingTiles;
        switch(x){
            case 0:
                glowingTiles = [1,2,3,5,6,7];
                break;
            case 1:
                glowingTiles = [3,6];
                break;
            case 2:
                glowingTiles = [1,3,4,5,7];
                break;
            case 3:
                glowingTiles = [1,3,4,6,7];
                break;
            case 4:
                glowingTiles = [2,3,4,6];
                break;
            case 5:
                glowingTiles = [1,2,4,6,7];
                break;
            case 6:
                glowingTiles = [1,2,4,5,6,7];
                break;
            case 7:
                glowingTiles = [1,3,6];
                break;
            case 8:
                glowingTiles = [1,2,3,4,5,6,7];
                break;
            case 9:
                glowingTiles = [1,2,3,4,6,7];
                break;
            default:
                glowingTiles = []
        }
        return glowingTiles;
    }
    return (
        <div className={styles.digital}>
            <div className={styles.digi}>
                <div className={styles.timeBox}>
                    <SingliTile tiles={glowTile(parseInt(hours/10))}/>
                    {hours % 10 === 1 && hours !== 11 && <SingliTile tiles={[2,5]}/>}
                    {(hours === 11 || hours % 10 !== 1) && <SingliTile tiles={glowTile(hours%10)}/>}
                </div>
                <div className={styles.dot}></div>
                <div className={styles.timeBox}>
                    <SingliTile tiles={glowTile(parseInt(minutes/10))}/>
                    {minutes % 10 === 1 && minutes !== 11 && <SingliTile tiles={[2,5]}/>}
                    {(minutes === 11 || minutes % 10 !== 1) && <SingliTile tiles={glowTile(minutes%10)}/>}
                </div>
                <div className={styles.dot}></div>
                <div className={styles.timeBox}>
                    <SingliTile tiles={glowTile(parseInt(seconds/10))}/>
                    {seconds % 10 === 1 && seconds !== 11 && <SingliTile tiles={[2,5]}/>}
                    {(seconds === 11 || seconds % 10 !== 1) && <SingliTile tiles={glowTile(seconds%10)}/>}
                </div>
            </div>
            <div className={styles.ampm}>
                <div className={styles.ap}>
                    <div className={styles.verticle} style={{
                        rotate:"90deg",
                        left:"62.5%",
                        top:"10%"
                    }}></div>
                    <div style={{
                        display:"flex",
                        justifyContent:"center",
                        position:"relative",
                        top:".5%"
                    }}>
                        <div className={styles.verticle} style={{
                            left:"-1%",
                        }}></div>
                        <div className={styles.verticle} style={{
                            left:"31%"
                        }}></div>
                    </div>
                    <div className={styles.verticle} style={{
                        rotate:"90deg",
                        left:"62.5%",
                        top:"-9%"
                    }}></div>
                    <div style={{
                        display:"flex",
                        justifyContent:"center",
                        position:"relative",
                        top:"-18.5%"
                    }}>
                        <div className={styles.verticle} style={{
                            left:"-1%",
                        }}></div>
                        <div className={styles.verticle} style={{
                            left:"31%",
                            opacity:h > 12 ? "10%" : "100%"
                        }}></div>
                    </div>
                </div>
                <div className={styles.m}>
                    <div style={{
                        display:"flex",
                        justifyContent:"center",
                        margin:"4%",
                    }}>
                        <div className={styles.verticle} style={{
                            left:"-32.5%",
                            top:"9%"
                        }}></div>
                        <div className={styles.verticle} style={{
                            rotate:"-45deg",
                            top:"-9%",
                            left:"-21%"
                        }}></div>
                        <div className={styles.verticle} style={{
                            rotate:"45deg",
                            top:"-9%",
                            left:"1.5%"
                        }}></div>
                        <div className={styles.verticle} style={{
                            left:"13%",
                            top:"9%"
                        }}></div>
                    </div>
                    <div style={{
                        display:"flex",
                        justifyContent:"center",
                        margin:"4%"
                    }}>
                        <div className={styles.verticle} style={{
                            left:"-38%",
                            top:"6%"
                        }}></div>
                        <div className={styles.verticle} style={{
                            left:"18.5%",
                            top:"6%"
                        }}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}