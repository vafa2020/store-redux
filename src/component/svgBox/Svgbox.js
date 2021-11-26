import classes from "./Svgbox.module.scss";
const Svgbox = ({ src, title, paragraph }) => {
  return (
    <div className={classes.Svgbox}>
      <img src={src} alt="practical" />
      <h5>{title}</h5>
      <p>{paragraph}</p>
    </div>
  );
};

export default Svgbox;
