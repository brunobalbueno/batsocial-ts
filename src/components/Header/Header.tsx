import BeyondLogo from "../../assets/ignite-beyond.svg";
import styles from "./Header.module.css";

export function Header() {
    return (
        <header className={styles.header}>
            <img src={BeyondLogo} alt="Beyond Logo" />
        </header>
    );
}
