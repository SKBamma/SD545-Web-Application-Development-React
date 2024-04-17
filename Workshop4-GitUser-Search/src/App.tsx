import { useState } from "react";
import Body from "./components/Body";
import Search from "./components/Search";

import { User, Search_Response } from "./types/users";

function App() {
  const [searchResponse, setSearchResponse] = useState<Search_Response>({
    isFirst: true,
    isLoading: false,
    isError: false,
    users: []
  });

  return (
    <div className="container">
      <Search onSetSearchResponse={setSearchResponse} />
      <Body {...searchResponse} />
    </div>
  );
}

export default App;
