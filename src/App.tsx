import Header from './components/Header.tsx';
import AddTimer from './components/AddTimer.tsx';

import TimersContextProvider from './components/store/TimersContext.tsx';
import Timers from './components/Timers.tsx';

export default function App() {
  return (
    <TimersContextProvider>
      <Header />
      <main>
        <AddTimer />
        <Timers />
      </main>
    </TimersContextProvider>
  );
}
