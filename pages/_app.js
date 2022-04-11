import AdminLayout from "../components/AdminLayout";
import MainLayout from "../components/MainLayout";
import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";

function App({ Component, pageProps: { session, ...pageProps } }) {
  if (Component.getLayout) {
    return (
      <SessionProvider session={session}>
        <AdminLayout>
          <Component {...pageProps} />
        </AdminLayout>
      </SessionProvider>
    );
  } else {
    return (
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    );
  }
}

export default App;
