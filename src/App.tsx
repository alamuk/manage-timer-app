import Header from './components/Header.tsx';
import AddTimer from './components/AddTimer.tsx';
import Timer from './components/Timer.tsx';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <AddTimer />
        <Timer />
      </main>
    </>
  );
}
