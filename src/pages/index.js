import Head from "next/head";

import Pokemon from "../components/pokemon/";

import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Pokédex</h1>

        <div className={styles.pokemon}>
          <ul>
            <li>
              <Pokemon
                image='https://via.placeholder.com/150'
                name='Pikachu'
                content='This is a yellow pokemon'
              />
            </li>
            <li>
              <Pokemon
                image='https://via.placeholder.com/150'
                name='Pikachu'
                content='This is a yellow pokemon'
              />
            </li>
            <li>
              <Pokemon
                image='https://via.placeholder.com/150'
                name='Pikachu'
                content='This is a yellow pokemon'
              />
            </li>
            <li>
              <Pokemon
                image='https://via.placeholder.com/150'
                name='Pikachu'
                content='This is a yellow pokemon'
              />
            </li>
            <li>
              <Pokemon
                image='https://via.placeholder.com/150'
                name='Pikachu'
                content='This is a yellow pokemon'
              />
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
