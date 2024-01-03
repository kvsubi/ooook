import styles from "../styles/commands.module.css"
import commandsData from "../../../public/commands.json"

export default function Refund() {
    const commandsList = commandsData.map((command) => ({
        name: command.name,
        category: command.category,
        description: command.description,
        permission: command.permission,
    }));

    console.log(commandsList);
    return (
        <section className={styles["content"]}>
            <span className={styles["title"]}>Commands (Temp)</span>
            <div className={styles["commands"]}>
            {commandsList.map((command, index) => (
                    <div key={index} className={styles["command"]}>
                        <div className={styles["command-top-content"]}>
                            <span className={styles["command-title"]}>{command.name}</span>
                            <span className={styles["command-description"]}>{command.description}</span>
                        </div>
                        <hr />
                        <div className={styles["command-content"]}>
                            <span className={styles["command-section-title"]}>arguments</span>
                            <div className={styles["command-section"]}>
                                <span className={styles["command-argument"]}>none</span>
                            </div>
                            <span className={styles["command-section-title"]}>permissions</span>
                            <div className={styles["command-section"]}>
                                <span className={styles["command-section-element"]}>
                                    {command.permission ? command.permission : "none"}
                                </span>
                            </div>
                        </div>
                    </div>
            ))}
            </div>
        </section>
    )
}