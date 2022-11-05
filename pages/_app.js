import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import "flickity/css/flickity.css";
import '../public/css/global.css';
import "../public/css/imagehover.css";
import MainLayout from '../components/layouts/MainLayout';

function MyApp({ Component, pageProps }) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  )
}

export default MyApp
