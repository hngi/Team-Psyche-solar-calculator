import React, { Component } from "react";
import { ThemeProvider } from 'styled-components';
import Logo from "../assets/svgs/logo.svg";
import DisplayTable from "../components/DisplayTable";
import AddItem from "../components/AddItem";
import AddItemModal from "../components/AddItemModal";
import CalcInfo from "../components/CalcInfo";
import { Stack, Tab, Outline, Cluster } from "../components/layouts";
import { H4 } from "../components/typography";
import { Light } from '../Theme';


class App extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    this.triggerModal();
  }

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

  triggerModal() {
    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");

    // Get the <span> element that closes the modal
    var close = document.getElementById("close");

    // When the user clicks the button, open the modal
    btn.onclick = function() {
      modal.style.display = "block";
    };

    // When the user clicks on <span> (x), close the modal
    close.onclick = function() {
      modal.style.display = "none";
    };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    };
  }

  delItem = (key) => { 
    this.setState({data: [...this.state.data.filter(
      item => item.key !== key
    )]})
  }

  render() {  

    return (
      <ThemeProvider theme={Light} className="App">
        <header>
          <div className="logo">
            <img src={Logo} alt="logo" />
          </div>
        </header>
        <main className="flex container justify-center py-5 mx-auto">
          <div className="md:w-1/3 bg-white rounded-lg">
            <Cluster.Small>
              <Stack>
                <H4>Add an appliance</H4>
                <AddItem addItem={this.addItem} />
                <AddItemModal addItem={this.addItem} />
              </Stack>
            </Cluster.Small>
          </div>

          <div className="flex-1 ml-5 -mt-16 calc-info bg-white rounded-lg shadow">
            <Cluster.Small>
              <Stack>
                <CalcInfo data={this.state.data} />
                <section id="appliance-list">
                  <div className="calc-data">
                    <H4 className="ttu ma3">Appliance List</H4>
                  </div>

                  <table>
                      <thead>
                        <tr>
                          <td>Name</td>
                          <td>Number</td>
                          <td>Time</td>
                          <td>Energy</td>
                        </tr>
                      </thead>
                      <tbody>
                        <DisplayTable delItem={this.delItem}  data={this.state.data} />
                      </tbody>
                    </table>
                </section>
              </Stack>

              <button id="myBtn" className="btn-add-circle">
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
