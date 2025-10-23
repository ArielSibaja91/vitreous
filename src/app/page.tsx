import HomeHeader from "./_home/HomeHeader";
import DisplaySection from "./_home/DisplaySection";

export default function Home() {
  return (
    <main className='relative flex flex-col items-center justify-center'>
      <HomeHeader />
      <DisplaySection />
    </main>
  );
}
