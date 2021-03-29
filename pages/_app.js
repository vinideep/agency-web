import "tailwindcss/tailwind.css";
import "./styles/style.global.css"


const MyApp = ({ Component, pageProps }) => {
  return (
      <Component {...pageProps} />
  );
};
export default MyApp;
