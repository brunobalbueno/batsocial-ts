import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import { Comment } from "../Comment/Comment";
import { Avatar } from "../Avatar/Avatar";
import styles from "./Post.module.css";
import { format, formatDistanceToNow } from "date-fns";

interface Author {
    name: string;
    role: string;
    avatarUrl: string;
}

export interface PostContent {
    commentType: "paragraph" | "link" | "tag";
    content: string;
}

export interface PostProps {
    author: Author;
    content: PostContent[];
    publishedAt: Date;
}

export function Post({ author, content, publishedAt }: PostProps) {
    const publishedDateFormatted = format(
        publishedAt,
        "d 'of' LLLL 'at' HH:mm'h'"
    );

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        addSuffix: true,
    });

    const [comments, setComments] = useState(["Teste"]);

    const [newComment, setNewComment] = useState("");

    function handleCreateNewComment(event: FormEvent) {
        event.preventDefault();

        setComments([...comments, newComment]);

        setNewComment("");
    }

    var handleNewCommentChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        event.target.setCustomValidity("");
        setNewComment(event.target.value);
    };

    var handleNewCommentInvalid = (
        event: InvalidEvent<HTMLTextAreaElement>
    ) => {
        event.target.setCustomValidity("Favor preencher este campo.");
    };

    var deleteComment = (commentToDelete: string) => {
        setComments(comments.filter((comment) => comment !== commentToDelete));
    };

    var isNewCommentEmpty = newComment.length === 0;

    return (
        <article className={styles.post}>
            <header className={styles.postHeader}>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.profileDescription}>
                        <strong className={styles.title}>{author.name}</strong>
                        <span className={styles.description}>
                            {author.role}
                        </span>
                    </div>
                </div>
                <time
                    title={publishedDateFormatted}
                    dateTime={publishedAt.toISOString()}
                >
                    {publishedDateRelativeToNow}
                </time>
            </header>
            <div className={styles.content}>
                {content.map((line) => {
                    if (line.commentType === "paragraph")
                        return <p key={line.content}>{line.content}</p>;
                    else if (line.commentType === "link")
                        return (
                            <p key={line.content}>
                                <a href={line.content} target="_blank">
                                    {line.content}
                                </a>
                            </p>
                        );
                    else if (line.commentType === "tag")
                        return (
                            <p key={line.content}>
                                <a href="">{line.content}</a>
                            </p>
                        );
                })}
            </div>

            <form
                onSubmit={handleCreateNewComment}
                className={styles.commentForm}
            >
                <strong>Leave your feedback</strong>
                <textarea
                    name="comment"
                    placeholder="Enter your comment..."
                    value={newComment}
                    onChange={handleNewCommentChange}
                    onInvalid={handleNewCommentInvalid}
                    required
                />
                <footer>
                    <button type="submit" disabled={isNewCommentEmpty}>
                        Publish
                    </button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map((comment) => (
                    <Comment
                        key={comment}
                        commentContent={comment}
                        onDeleteComment={deleteComment}
                    />
                ))}
            </div>
        </article>
    );
}
