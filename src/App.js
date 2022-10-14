import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListPools from "./pages/ListPools";
import SortPools from "./pages/SortPools";
import PoolTokens from "./pages/PoolTokens";
import Approvals from "./pages/Approvals";

// const SUBGRAPH_URL =
//   "https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v3";
// const TOKEN_IDS_QUERY = `
//   {
//     pools(first: 10) {
//       id
//       token0 {
//         id
//         name
//         symbol
//       }
//       token1 {
//         id
//         name
//         symbol
//       }
//       totalValueLockedUSD
//       totalValueLockedETH
//     }
//   }
// `;

// axios
//   .post(SUBGRAPH_URL, { query: TOKEN_IDS_QUERY })
//   .then(result => console.log(result.data.data.pools));

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/listPools" element={<ListPools />} />
          <Route path="/sortPools" element={<SortPools />} />
          <Route path="/poolTokens" element={<PoolTokens />} />
          <Route path="/approvals" element={<Approvals />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
