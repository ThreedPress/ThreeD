import { FC } from "react";
import { Sidebar } from "./layout/Sidebar/Sidebar";
import FeedPage from "./feed/FeedPage";
import { Searchbar } from "./layout/Searchbar/Searchbar";

const App: FC = () => {
  return (
    <div className="App" data-testid="app-root">
      <main className="flex">
        <Sidebar />
        <div className="flex-col flex-grow">
          <FeedPage />
        </div>
      </main>
    </div>
  );
};

export default App;
