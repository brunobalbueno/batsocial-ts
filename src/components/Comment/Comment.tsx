import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";
import { Avatar } from "../Avatar/Avatar";
import styles from "./Comment.module.css";

interface CommentProps {
    commentContent: string;
    onDeleteComment: (comment: string) => void;
}

export function Comment({ commentContent, onDeleteComment }: CommentProps) {
    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment() {
        onDeleteComment(commentContent);
    }

    function handleLikeComment() {
        setLikeCount((state) => state + 1);
    }

    return (
        <div className={styles.comment}>
            <Avatar
                hasBorder={false}
                src="https://i.pinimg.com/originals/fe/75/d4/fe75d45df195177ad05c0454016aa540.png"
            />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Bruce</strong>
                            <time
                                title="15 de outubro às 12:00h"
                                dateTime="2022-10-15 12:00"
                            >
                                Cerca de 1h atrás
                            </time>
                        </div>
                        <button
                            onClick={handleDeleteComment}
                            title="Delete comment"
                        >
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>{commentContent}</p>
                </div>
                <footer>
                    <button title="Congrats" onClick={handleLikeComment}>
                        <ThumbsUp />
                        Like <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}
