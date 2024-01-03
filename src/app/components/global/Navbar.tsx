import styles from "../../styles/navbar.module.css"
import Image from "next/image"
import Link from "next/link"
import Loti from "../../../../public/loti-pfp.png"

const Navbar = () => {
    return (
        <div className={styles["navbar"]}>
            <div className={styles["navbar-left"]}>
                <Link href="/">
                    <Image src={Loti} width="50" height="50" alt="logo" />
                    <span>Loti</span>
                </Link>
            </div>
            <div className={styles["navbar-center"]}>
                <div className={styles["navbar-link"]}>
                    <Link href="/commands">Commands</Link>
                </div>
                <div className={styles["navbar-link"]}>
                    <Link href="/resources">Resources</Link>
                </div>
                <Link href="/pricing" className={styles["navbar-premium"]}>
                    <span>Premium</span>
                    <Image src="/stars.png" width="20" height="20" alt="stars" />
                </Link>
            </div>
            <div className={styles["navbar-right"]}>
                <Link href="/login" className={styles["navbar-login"]}>
                    Login
                </Link>
            </div>
        </div>
    )
}

export default Navbar
