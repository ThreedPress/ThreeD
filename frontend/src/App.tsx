import { FC } from "react";
import { Sidebar } from "./layout/Sidebar";
import FeedPage from "./feed/FeedPage";

const App: FC = () => {
  return (
    <div className="App" data-testid="app-root">
      <main className="flex">
        <Sidebar />
        <div className="flex-shrink">
          <FeedPage />
        </div>
      </main>
    </div>
  );
};

export default App;
