import NavBar from "./components/NavBar";
import Footer from "../components/footer";
import Content from "./views/Content";

export default function Index() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-1 pb-2 gap-16 sm:p-8 font-[family-name:var(--font-geist-sans)]">
      <NavBar/>
      <Content />
      <Footer />
    </div>
  );
}
