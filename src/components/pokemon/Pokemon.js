import styles from "./Pokemon.module.scss";

const Pokemon = ({ image, name, content }) => {
  return (
    <>
      <img href='#' src={image}></img>
      <div>
        <h2>{name}</h2>
        <p>{content}</p>
      </div>
    </>
  );
};

export default Pokemon;
