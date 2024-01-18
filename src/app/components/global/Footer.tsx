import styles from "../../styles/footer.module.css"
import Image from "next/image"
import Link from "next/link"
import grief from "../../../../public/grief.png"

const Footer = () => {
    return (
        <div className={styles["footer"]}>
            <div className={styles["footer-content"]}>
                <div className={styles["footer-left"]}>
                    <Link href="/">
                        <Image src={grief} width="50" height="50" alt="logo" />
                        <span>Grief</span>
                    </Link>
                    <div className={styles["footer-description"]}>
                        <span>
                            Grief is a versatile bot, offering features like moderation, social
                            commands, and much more, making it perfect for all your server needs.
                        </span>
                    </div>
                </div>
                <div className={styles["footer-right"]}>
                    <div className={styles["footer-option"]}>
                        <span className={"title"}>Website Pages</span>
                        <div className={styles["footer-links"]}>
                            <Link href="https://embeds.grief.cloud">Embeds</Link>
                            <Link href="https://docs.grief.cloud">Docs</Link>
                            <Link href="#">Commands</Link>
                        </div>
                    </div>
                    <div className={styles["footer-option"]}>
                        <span className={"title"}>Other Links</span>
                        <div className={styles["footer-links"]}>
                            <Link href="https://twitter.com/evincement_"> Twitter</Link>
                            <Link href="https://discord.gg/invite/seer">Discord</Link>
                            <Link href="#">Top.gg</Link>
                        </div>
                    </div>
                    <div className={styles["footer-option"]}>
                        <span className={"title"}>Rules</span>
                        <div className={styles["footer-links"]}>
                            <Link href="terms">Terms Of Use</Link>
                            <Link href="privacy">Privacy Policy</Link>
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
