import Head from "next/head";

import Pokemon from "../components/pokemon/";

import styles from "../styles/Home.module.scss";

export default function Home({ pokemons }) {
  console.log("pokemon", pokemons);

  return (
    <div className={styles.container}>
      <Head>
        <title>Pokédex</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Pokédex</h1>

        <div className={styles.pokemon}>
          <ul>
            {pokemons.map((pokemon) => {
              const { image, name, content } = pokemon;

              return (
                <li>
                  <Pokemon image={image} name={name} content={content} />
                </li>
              );
            })}
          </ul>
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
  const { results } = await response.json();

  console.log("json", results);

  const pokemons = results.map((pokemon) => {
    return {
      id: pokemon.url,
      name: pokemon.name,
    };
  });

  return {
    props: {
      pokemons,
    },
  };
}
