import styles from "../../styles/navbar.module.css"
import Image from "next/image"
import Loti from "../../../../public/loti-pfp.png"

const Navbar = () => {
    return (
        <div className={styles["navbar"]}>
            <div className={styles["navbar-left"]}>
                <a href="/">
                    <Image src={Loti} width="50" height="50" alt="logo" />
                    <span>Loti</span>
                </a>
            </div>
            <div className={styles["navbar-center"]}>
                <div className={styles["navbar-link"]}>
                    <span>Features</span>
                </div>
                <div className={styles["navbar-link"]}>
                    <span>Resources</span>
                </div>
                <a href="#pricing" className={styles["navbar-premium"]}>
                    <span>Premium</span>
                    <Image src="/stars.png" width="20" height="20" alt="stars" />
                </a>
            </div>
            <div className={styles["navbar-right"]}>
                <a href="#" className={styles["navbar-login"]}>
                    Login
                </a>
            </div>
        </div>
    )
}

export default Navbar
