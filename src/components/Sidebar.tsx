import { PencilLine } from "phosphor-react";

import styles from "./Sidebar.module.css";
import { Avatar } from "./Avatar";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
      />

      <div className={styles.profile}>
        <Avatar src="https://github.com/geovanelelis.png" />
        <strong>Geovane Silva</strong>
        <span>Desenvolvedor Web</span>
      </div>

      <footer>
        <a href="a">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
