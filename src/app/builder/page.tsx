import styles from "../styles/builder.module.css"

export default function Builder() {
    return (
        <section className={styles["content"]}>
            <div className={styles["sidebar-left"]}>
                <div className={styles["sidebar-top"]}>
                    <div className={styles["sidebar-top-container"]}>
                        <img src="banner.webp" alt="Banner" />
                        <div className={styles["sidebar-top-title"]}>
                            <span>Loti</span>
                        </div>
                    </div>
                </div>
                <div className={styles["sidebar-content"]}>
                    <h4>create-an-embed</h4>
                </div>
            </div>
            <div className={styles["main-content"]}>
                <div className={styles["main-top"]}>
                    <h4>create-an-embed</h4>
                </div>
                <div className={styles["messages"]}>
                    <div className={styles["message"]}>
                        <div className={styles["message-user"]}>
                            <img src="/loti-pfp.png" />
                            <span className={styles["user"]}>Loti</span>
                            <span className={styles["tag"]}>Bot</span>
                        </div>

                        <div className={styles["message-content"]}>
                            I'n so quirky hahahaasdddddddddd
                            <div className={styles["embed"]}>
                                <div className={styles["embed-main"]}>
                                    <div className={styles["embed-author"]}>
                                        <img src="/loti-pfp.png" />
                                        <span>This is author bs</span>
                                    </div>
                                    <span className={styles["embed-title"]}>This is the title</span>
                                    <span className={styles["embed-description"]}>This is a description</span>
                                    <div className={styles["fields-inline"]}>
                                        <div className={styles["field"]}>
                                            <span className={styles["field-name"]}>Title</span>
                                            <span className={styles["field-description"]}>Value</span>
                                        </div>
                                        <div className={styles["field"]}>
                                            <span className={styles["field-name"]}>Title</span>
                                            <span className={styles["field-description"]}>Value</span>
                                        </div>
                                        <div className={styles["field"]}>
                                            <span className={styles["field-name"]}>Title</span>
                                            <span className={styles["field-description"]}>Value</span>
                                        </div>
                                        <div className={styles["field"]}>
                                            <span className={styles["field-name"]}>Title</span>
                                            <span className={styles["field-description"]}>Value</span>
                                        </div>
                                    </div>
                                    <img src="https://i.imgur.com/7kX3Ez8.png" className={styles["embed-image"]} />
                                </div>
                                <img src="https://i.pinimg.com/736x/f5/22/be/f522bec617497a43cabb94accdd2367b.jpg" className={styles["embed-thumbnail-i"]} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
