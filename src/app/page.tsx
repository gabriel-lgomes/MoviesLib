import Banner from "../../components/banner";
import Header from "../../components/header";

export default function Home() {
  return (
    <main className="bg-black h-screen font-primary">
      <header>
        <Header />
        <Banner />
      </header>
    </main>
  );
}
