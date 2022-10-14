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

class Approvals extends React.Component {
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

        this.setState({ pools: data.data.data.pools });
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
                {e.token0.symbol} / {e.token1.symbol} pool || Total Value Locked
                in USD: {e.totalValueLockedUSD}
                <br></br>
              </div>
            );
          })
        )}
      </div>
    );
  }
}

export default Approvals;
