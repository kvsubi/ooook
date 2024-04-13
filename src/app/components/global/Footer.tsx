import styles from "../../styles/footer.module.css"
import Image from "next/image"
import Link from "next/link"
import coco from "../../../../public/coco.png"

const Footer = () => {
    return (
        <div className={styles["footer"]}>
            <div className={styles["footer-content"]}>
                <div className={styles["footer-left"]}>
                    <Link href="/">
                        <Image src={coco} width="50" height="50" alt="logo" />
                        <span>coco</span>
                    </Link>
                    <div className={styles["footer-description"]}>
                        <span>
                        Coco is not just your ordinary bot; it's your gateway to a plethora of functionalities, seamlessly integrated into your Discord server. With Coco by your side, your server experiences a whole new level of engagement and utility.
                        </span>
                    </div>
                </div>
                <div className={styles["footer-right"]}>
                    <div className={styles["footer-option"]}>
                        <span className={"title"}>Website Pages</span>
                        <div className={styles["footer-links"]}>
                            <Link href="https://embeds.hellcat.lol">Embeds</Link>
                            <Link href="https://docs.hellcat.lol">Docs</Link>
                            <Link href="#">Commands</Link>
                        </div>
                    </div>
                    <div className={styles["footer-option"]}>
                        <span className={"title"}>Other Links</span>
                        <div className={styles["footer-links"]}>
                            <Link href="https://twitter.com/vlx9000"> Twitter</Link>
                            <Link href="https://discord.gg/invite/kaga">Discord</Link>
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
