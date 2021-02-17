import React, { Component } from "react";

class PharmacyInput extends Component {
  render() {
    return (
      <div>
        {this.props.inputs.map((input, index) => {
          return (
            <div className="form-group row" key={index}>
              <label htmlFor={input.id} className="col-sm-2 col-form-label">
                {input.name}
              </label>
              <div className="col-sm-10">
                <input
                  className="form-control"
                  type="text"
                  defaultValue={input.value}
                  id={input.id}
                  required
                  onChange={input.onChange}
                  placeholder={input.placeholder}
                />
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default PharmacyInput;
