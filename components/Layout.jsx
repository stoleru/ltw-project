import Header from "./partials/Header"
import Footer from "./partials/Footer"

function Layout({ children }) {
    return (
        <>
            <Header />
            <section>
                {children}
            </section>
            <Footer />
        </>
    )
}

export default Layout;