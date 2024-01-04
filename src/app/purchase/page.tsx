import Link from "next/link"
import styles from "../styles/pricing.module.css"

export default function Refund() {
    return (
        <section className={styles["content"]}>
            <div className={styles["top-section"]}>
                <span className={styles["section-title"]}>Loti Premium</span>
                <span className={styles["section-description"]}>
                    Loti Premium provides powerful features for antinuke protection, efficient
                    moderation, and more.
                </span>
            </div>

            <div className={styles["options"]}>
                <Link href="#">
                    <div className={`${styles["option"]}`}>
                        <div className={styles["option-content"]}>
                            <span className={styles["option-title"]}>Get Monthly</span>
                            <span className={styles["option-description"]}>
                                If you don't want to spend as much
                            </span>
                            <div className={styles["option-pricing"]}>
                                <span className={styles["option-price"]}>5$</span>
                                <span className={styles["option-duration"]}>/Monthly</span>
                            </div>
                            <span className={styles["option-information"]}>
                                You're entitled to a single transfer, if you wish to transfer again
                                after having already transferred you must repurchase the license.
                            </span>
                        </div>
                        <div className={styles["option-get"]}>
                            <div className={styles["button"]}>
                                <span>Get Monthly</span>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link href="#">
                    <div className={`${styles["option"]} ${styles["bright"]}`}>
                        <div className={styles["most-popular"]}>Most Popular</div>
                        <div className={styles["option-content"]}>
                            <span className={styles["option-title"]}>Get Lifetime</span>
                            <span className={styles["option-description"]}>
                                One time payment...
                            </span>
                            <div className={styles["option-pricing"]}>
                                <span className={styles["option-price"]}>10$</span>
                                <span className={styles["option-duration"]}>/Lifetime</span>
                            </div>
                            <span className={styles["option-information"]}>
                                You're entitled to a single transfer, if you wish to transfer again
                                after having already transferred you must repurchase the license.
                            </span>
                        </div>
                        <div className={styles["option-get"]}>
                            <div className={styles["button-lifetime"]}>
                                <span>Get Lifetime</span>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </section>
    )
}
