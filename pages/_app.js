import AdminLayout from "../components/AdminLayout";
import MainLayout from "../components/MainLayout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  if (Component.getLayout) {
    return (
      <AdminLayout>
        <Component {...pageProps} />
      </AdminLayout>
    );
  } else {
    return (
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    );
  }
}

export default MyApp;
