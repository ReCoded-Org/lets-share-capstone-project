import { appWithTranslation } from "next-i18next";
import { AuthProvider } from "context /AuthContext";

import "@/styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MyApp({ Component, pageProps }) {
    return (
        <AuthProvider>
            <Component {...pageProps} />
        </AuthProvider>
    );
}

export default appWithTranslation(MyApp);
