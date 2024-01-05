import styles from "../../styles/footer.module.css"
import Image from "next/image"
import Link from "next/link"
import Loti from "../../../../public/loti-pfp.png"

const Footer = () => {
    return (
        <div className={styles["footer"]}>
            <div className={styles["footer-content"]}>
                <div className={styles["footer-left"]}>
                    <Link href="/">
                        <Image src={Loti} width="50" height="50" alt="logo" />
                        <span>Loti</span>
                    </Link>
                    <div className={styles["footer-description"]}>
                        <span>
                            Loti is a versatile bot, offering features like moderation, social
                            commands, and much more, making it perfect for all your server needs.
                        </span>
                    </div>
                </div>
                <div className={styles["footer-right"]}>
                    <div className={styles["footer-option"]}>
                        <span className={"title"}>Website Pages</span>
                        <div className={styles["footer-links"]}>
                            <Link href="#">Membership</Link>
                            <Link href="#">Dashboard</Link>
                            <Link href="#">Docs</Link>
                            <Link href="#">Premium</Link>
                            <Link href="#">Commands</Link>
                        </div>
                    </div>
                    <div className={styles["footer-option"]}>
                        <span className={"title"}>Other Links</span>
                        <div className={styles["footer-links"]}>
                            <Link href="https://twitter.com/TryLoti">X (Formerly Twitter)</Link>
                            <Link href="https://discord.gg/invite/loti">Discord</Link>
                            <Link href="#">Top.gg</Link>
                        </div>
                    </div>
                    <div className={styles["footer-option"]}>
                        <span className={"title"}>Rules</span>
                        <div className={styles["footer-links"]}>
                            <Link href="terms">Terms Of Use</Link>
                            <Link href="privacy">Privacy Policy</Link>
                            <Link href="refund">Refund Policy</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles["footer-bottom"]}>
                <hr />
                <span>© 2023 All Rights Reserved.</span>
                <div className={styles["footer-links"]}></div>
            </div>
        </div>
    )
}

export default Footer
