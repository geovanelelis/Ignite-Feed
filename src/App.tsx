import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post, PostType } from "./components/Post";
import styles from "./App.module.css";
import "./global.css";

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl:
        "https://yt3.googleusercontent.com/0hOoV_YaOEb0IEM2NFQRc5zYKClAR8VEe8v7wMcYY5MyaWITDaMQIiSt4y6al1l-hmrNZ_s_UOM=s176-c-k-c0x00ffffff-no-rj-mo",
      role: "Artista",
      name: "Rei do Kuduairo",
    },
    content: [
      { type: "paragraph", content: "Ai minha voaida" },
      {
        type: "paragraph",
        content:
          "Osmi é o seguainte, dependuainte de qualquer situacion na voaida, soraiya 🚀",
      },
      { type: "link", content: "reidokuduro.site/embuaiscadomaskeiko" },
    ],
    publishedAt: new Date("2023-06-01 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://pbs.twimg.com/media/EcbqlovXYAIxXmJ.jpg",
      role: "Gamer",
      name: "Alanzoka",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content: "Stream acabou de começar, já entra aí!! 👇",
      },
      { type: "link", content: "twitch.tv/alanzoka" },
    ],
    publishedAt: new Date("2023-06-03 18:29:15"),
  },
];

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return <Post key={post.id} post={post} />;
          })}
        </main>
      </div>
    </div>
  );
}
