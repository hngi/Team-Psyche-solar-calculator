import React, { Component } from "react";
import { ThemeProvider } from 'styled-components';
import Logo from "../assets/images/solar-logo.png";
import DisplayTable from "../components/DisplayTable";
import AddItem from "../components/AddItem";
import AddItemModal from "../components/AddItemModal";
import CalcInfo from "../components/CalcInfo";
import { Stack, Cluster } from "../components/layouts";
import { H4 } from "../components/typography";
import { Light } from '../Theme';


class App extends Component {
  state = {
    data: [],
    showAdd: false,
  };

  generateQuickGuid() {
    return (
      Math.random()
        .toString(36)
        .substring(2, 15) +
      Math.random()
        .toString(36)
        .substring(2, 15)
    );
  }

  addItem = data => {
    const newData = { key: this.generateQuickGuid(), ...data };

    this.setState({ data: [...this.state.data, newData] });
  };

  delItem = (key) => { 
    this.setState({data: [...this.state.data.filter(
      item => item.key !== key
    )]})
  }

  toggle() {
    this.setState({ ...this.state, showAdd: !this.state.showAdd })
  }

  render() {
    return (
      <ThemeProvider theme={Light} className="App">
        <header>
          <div className="logo">
            <img src={Logo} alt="logo" />
          </div>
        </header>

        <main className="flex flex-col sm:flex-row p-5 lg:container justify-center  mx-auto">
          {/* bg-blue-500 sm:bg-orange-500 md:bg-red-500 lg:bg-purple-500 */}
          {(window.innerWidth > 667 || this.state.showAdd) && (
            <div className="order-2 sm:order-1 w-full md:w-2/5 lg:w-1/3 bg-white rounded-lg">
              <Cluster.Small>
                <Stack>
                  <H4>Add an appliance</H4>
                  <AddItem addItem={this.addItem} />
                  <AddItemModal addItem={this.addItem} />
                </Stack>
              </Cluster.Small>
            </div>
          )}
          <div className="relative pb-20 flex-1 order-1 mb-5 sm:ml-5 -mt-16 calc-info bg-white rounded-lg shadow">
            <Cluster.Small>
              <Stack>
                <CalcInfo data={this.state.data} />
                <section id="appliance-list">
                  <div className="calc-data">
                    <H4 className="ttu ma3">Appliance List</H4>
                  </div>

                  <DisplayTable
                    onItemDelete={this.delItem}
                    data={this.state.data}
                  />
                </section>
              </Stack>
              <button
                className="btn-add-circle sm:hidden"
                onClick={this.toggle.bind(this)}
              >
                +
              </button>
            </Cluster.Small>
          </div>
        </main>
      </ThemeProvider>
    );
  }
}

export default App;
