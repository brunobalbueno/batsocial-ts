import styles from "./Sidebar.module.css";
import { PencilLine } from "phosphor-react";
import { Avatar } from "../Avatar/Avatar";

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img
                className={styles.cover}
                src="https://images.comicbooktreasury.com/wp-content/uploads/2021/04/Batman-Beyond-Reading-Order-DC-1024x683.jpg"
                alt="Cover Image"
            />
            <div className={styles.profile}>
                <Avatar src="https://64.media.tumblr.com/dc148062c4ad776a0e659f96b77b8d17/7c4ff43645e4a687-65/s400x600/3ab62c1c476d25e76f81a23009970acdc83c9429.png" />

                <div className={styles.profileDescription}>
                    <strong className={styles.title}>Terry</strong>
                    <span className={styles.description}>Crime Fighter</span>
                </div>
            </div>
            <footer>
                <a href="">
                    <PencilLine size={20} />
                    Edit profile
                </a>
            </footer>
        </aside>
    );
}
