import React from "react";
import { render } from "react-dom";
import { makeData, getSum } from "./Utils";
import { Add, Delete } from "./general";
// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: makeData()
    };
    this.renderEditable = this.renderEditable.bind(this);
  }
  renderEditable(cellInfo) {
    return (
      <div
        style={{ backgroundColor: "#fafafa" }}
        contentEditable
        suppressContentEditableWarning
        onBlur={e => {
          const data = [...this.state.data];
          data[cellInfo.index][cellInfo.column.id] = e.target.innerHTML;
          this.setState({ data });
        }}
        dangerouslySetInnerHTML={{
          __html: this.state.data[cellInfo.index][cellInfo.column.id]
        }}
      />
    );
  }
  renderNewItem = () => {
    const items = this.state.data;
    items.push({ description: "New Item", amount: 0.0 });
    return this.setState({
      data: items
    });
  };
  removeNewItem = cellInfo => {
    const items = this.state.data;
    items.splice(cellInfo.index, 1);
    return this.setState({
      data: items
    });
  };
  render() {
    const { data } = this.state;
    return (
      <div className="content">
        <ReactTable
          data={data}
          columns={[
            {
              Header: "Description",
              accessor: "description",
              Cell: this.renderEditable,
              minWidth: 200,
              Footer: (
                <span>
                  <strong>TOTAL</strong>
                </span>
              )
            },
            {
              Header: "Amount",
              accessor: "amount",
              Cell: this.renderEditable,
              maxWidth: 100,
              Footer: (
                <span>
                  <strong>
                    {data
                      .map(a => a.amount)
                      .reduce(getSum, 0)
                      .toFixed(2)}
                  </strong>
                </span>
              )
            },
            {
              Header: "Action",
              maxWidth: 100,
              Cell: row => (
                <div className="row">
                  <Add onClick={() => this.renderNewItem()} />
                  <Delete onClick={() => this.removeNewItem(row)} />
                </div>
              )
            }
          ]}
          showPaginationBottom={false}
          className="-striped -highlight"
        />
        <br />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
