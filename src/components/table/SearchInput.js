import React, { Component } from "react";

class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      filteredData: [],
      searchKey: "",
      origData: [],
    };
  }
  async componentDidMount() {
    console.log("search");
    if (this.props.origData) {
      await Promise.all(this.props.origData).then((data) => {
        data.map((value) => {
          const newData = this.maker(value);
          this.setState({
            filteredData: [...this.state.filteredData, newData],
          });
          this.setState({
            origData: [...this.state.origData, newData],
          });
        });
      });
      this.props.renewData(this.state.filteredData);
      this.setState({
        origData: this.props.origData,
      });
    }
  }
  async componentDidUpdate(prevProps) {
    if (this.props.origData !== prevProps.origData) {
      await this.setState({ filteredData: [] });
      await Promise.all(this.props.origData).then((data) => {
        data.map((value) => {
          const newData = this.maker(value);
          this.setState({
            filteredData: [...this.state.filteredData, newData],
          });
          this.setState({
            origData: [...this.state.origData, newData],
          });
        });
      });
      this.props.renewData(this.state.filteredData);
      this.setState({
        origData: this.props.origData,
      });
    }
  }
  maker(data) {
    // for Table component <key> becouse api response give id
    let result = {};
    Object.keys(data).map((key) => {
      if (key === "id") {
        result["key"] = data.id;
      } else {
        result[key] = data[key];
      }
    });
    return result;
  }
  onChange = async (event) => {
    const key = event.target.value.toLowerCase();
    await this.setState({ filteredData: [] });
    await this.state.origData.map((value, index) => {
      this.filter(value, key);
    });
    this.props.renewData(this.state.filteredData);
    console.log(this.state.origData);
  };

  async filter(data, key) {
    let have = data.name.toLowerCase().indexOf(key);
    if (have !== -1) {
      const newData = this.maker(data);
      await this.setState({
        filteredData: [...this.state.filteredData, newData],
      });
    }
  }
  render() {
    return (
      <input
        className="form-control"
        placeholder="Grup ara"
        onChange={this.onChange}
      />
    );
  }
}
export default SearchInput;
