import React, { useState } from "react";

import Search from "./components/Search";
import List from "./components/List";

import { User, Search_Response } from "./types/users";


function App() {
  // const [searchResponse, setSearchResponse] = useState<Search_Response>({
  //   isFirst: true,
  //   isLoading: false,
  //   isError: false,
  //   users: []
  // });

  return (
    <div className="container">
      <Search />
      <List />
    </div>
  );
}

export default App;
