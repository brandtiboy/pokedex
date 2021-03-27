import styles from "./Pokemon.module.scss";

const Pokemon = ({ image, name, content }, pokemons) => {
  return (
    <>
      <img href='#' src={image}></img>
      <div>
        <h2>
          <a>{name}</a>
        </h2>
        <p>{content}</p>
      </div>
    </>
  );
};

export default Pokemon;
