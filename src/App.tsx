import { Header } from "./components/Header/Header";
import { Post } from "./components/Post/Post";
import { Sidebar } from "./components/Sidebar/Sidebar";

import styles from "./App.module.css";
import "./global.css";

const posts = [
    {
        id: 1,
        author: {
            avatarUrl:
                "https://i.pinimg.com/originals/fe/75/d4/fe75d45df195177ad05c0454016aa540.png",
            name: "Bruce Wayne",
            role: "Entrepreneur",
        },
        content: [
            { commentType: "paragraph", content: "Good afternoon everyone" },
            {
                commentType: "paragraph",
                content:
                    "Wayne Enterprises just discovered a new way of energizing cars. You can see the full statement at:",
            },
            {
                commentType: "link",
                content: "https://batman.fandom.com/wiki/Wayne_Enterprises",
            },
        ],
        publishedAt: new Date("2022-05-19 18:00:00"),
    },
    {
        id: 2,
        author: {
            avatarUrl:
                "https://64.media.tumblr.com/dc148062c4ad776a0e659f96b77b8d17/7c4ff43645e4a687-65/s400x600/3ab62c1c476d25e76f81a23009970acdc83c9429.png",
            name: "Terry McGinnis",
            role: "Crime Fighter",
        },
        content: [
        ],
        publishedAt: new Date("2022-05-19 18:20:00"),
    },
];

export function App() {
    return (
        <>
            <Header />
            <div className={styles.wrapper}>
                <Sidebar />
                <main>
                    {posts.map((post) => (
                        <Post
                            key={post.id}
                            author={post.author}
                            content={post.content}
                            publishedAt={post.publishedAt}
                        />
                    ))}
                </main>
            </div>
        </>
    );
}
