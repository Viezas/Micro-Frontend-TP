import Header from '../../sharedComponent/src/Header';

const App = () => (
  <div>
    <Header>
      <div class="flex items-center justify-between gap-2">
        <button class="rounded border px-4 py-1 hover:bg-sky-500">Sign in</button>
        <span>/</span>
        <button class="rounded border px-4 py-1 hover:bg-sky-500">Sign up</button>
      </div>
    </Header>
    <h1>Basic Host-Remote</h1>
    <h2>Remote</h2>
  </div>
);

export default App;
