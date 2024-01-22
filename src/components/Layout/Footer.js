import classes from "./Footer.module.css";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={classes.footer}>
      <p>Shopify Storefront &copy; {currentYear}</p>
    </footer>
  );
}

export default Footer;
