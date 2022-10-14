import React from "react";
import axios from "axios";

const SUBGRAPH_URL =
  "https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v3";
const TOKEN_IDS_QUERY = `
  {
    pools(first: 10) {
      id
      token0 {
        id
        name
        symbol
      }
      token1 {
        id
        name
        symbol
      }
      totalValueLockedUSD
      totalValueLockedETH
    }
  }
`;

class PoolTokens extends React.Component {
  state = {
    pools: []
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axios
      .post(SUBGRAPH_URL, { query: TOKEN_IDS_QUERY })
      .then(data => {
        console.log(data.data.data.pools);

        // POOL TOKENS
        var poolArray = [];
        data.data.data.pools.forEach(ele => {
          console.log(ele.token0, ele.token1);
          poolArray.push([ele.token0, ele.token1]);
        });
        console.log(poolArray);

        this.setState({ pools: poolArray });
      })
      .catch(err => {
        console.log(err);
        return null;
      });
  };

  render() {
    return (
      <div className="App">
        {this.state.pools.length === 0 ? (
          <div>Loading...</div>
        ) : (
          this.state.pools.map((e, i) => {
            return (
              <div key={i}>
                {e[0].symbol} / {e[1].symbol} pool || Tokens: {e[0].name} (
                {e[0].symbol}), {e[1].name} ({e[1].symbol})<br></br>
              </div>
            );
          })
        )}
      </div>
    );
  }
}

export default PoolTokens;
