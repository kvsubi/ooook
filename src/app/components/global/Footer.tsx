import styles from "../../styles/footer.module.css"
import Image from "next/image"
import Loti from "../../../../public/loti-pfp.png"

const Footer = () => {
    return (
        <div className={styles["footer"]}>
            <div className={styles["footer-content"]}>
                <div className={styles["footer-left"]}>
                    <a href="/">
                        <Image src={Loti} width="50" height="50" alt="logo" />
                        <span>Loti</span>
                    </a>
                    <div className={styles["footer-description"]}>
                        <span>
                            A very customizable multipurpose bot for welcome image, In-depth logs,
                            Social commands, Moderation and many more ...
                        </span>
                    </div>
                </div>
                <div className={styles["footer-right"]}>
                    <div className={styles["footer-option"]}>
                        <span className={"title"}>Website Pages</span>
                        <div className={styles["footer-links"]}>
                            <a href="#">Membership</a>
                            <a href="#">Dashboard</a>
                            <a href="#">Docs</a>
                            <a href="#">Premium</a>
                            <a href="#">Commands</a>
                        </div>
                    </div>
                    <div className={styles["footer-option"]}>
                        <span className={"title"}>Other Links</span>
                        <div className={styles["footer-links"]}>
                            <a href="https://twitter.com/TryLoti">X (Formerly Twitter)</a>
                            <a href="https://discord.gg/invite/loti">Discord</a>
                            <a href="#">Top.gg</a>
                        </div>
                    </div>
                    <div className={styles["footer-option"]}>
                        <span className={"title"}>Rules</span>
                        <div className={styles["footer-links"]}>
                            <a href="terms">Terms Of Use</a>
                            <a href="privacy">Privacy Policy</a>
                            <a href="refund">Refund Policy</a>
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
