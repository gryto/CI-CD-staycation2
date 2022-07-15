import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import propTypes from "prop-types";

import Button from "elements/Button";
import { InputNumber, InputDate, InputText } from "elements/Form";
//import DetailsPage from "pages/DetailsPage";

class BookingForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        duration: 1,
        date: {
          startDate: new Date(),
          endDate: new Date(),
          key: "selection",
        },
      },
    };
  }

  updateData = (e) => {
    this.setState({
      ...this.state,
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value,
      },
    });
  };

  componentDidUpdate(prevProps, prevState) {
    const { data } = this.state;

    if (prevState.data.date !== data.date) {
      const startDate = new Date(data.date.startDate);
      const endDate = new Date(data.date.endDate);
      const countDuration = new Date(endDate - startDate).getDate();
      this.setState({
        data: {
          ...this.state.data,
          duration: countDuration,
        },
      });
    }

    if (prevState.data.duration !== data.duration) {
      const startDate = new Date(data.date.startDate);
      const endDate = new Date(
        startDate.setDate(startDate.getDate() + +data.duration - 1)
      );
      this.setState({
        ...this.state,
        data: {
          ...this.state.data,
          date: {
            ...this.state.data.date,
            endDate: endDate,
          },
        },
      });
    }
  }

  startBooking = () => {
    const { data } = this.state;
    this.props.startBooking({
      _id: this.props.itemDetails._id,
      duration: data.duration,
      date: {
        startDate: data.date.startDate,
        endDate: data.date.endDate,
      },
    });
    this.props.history.push("/checkout");
  };

  render() {
    const { data } = this.state;
    const { itemDetails } = this.props;

    return (

      
      <div className="card bordered" style={{ padding: "60px 60px" }}>
        <h4 className="mb-3" style={{marginLeft: "80px"}}>Mulai Booking</h4>
        <h5 className="h2 text-teal mb-4">
          Rp {itemDetails.price}{" "}
          <span className="text-gray-500 font-weight-light">
            per {itemDetails.unit}
          </span>
        </h5>
        
        

        <label htmlFor="duration">Lokasi</label>
        <InputText
          max={30}
          suffix={" night"}
          isSuffixPlural
          onChange={this.updateData}
          name="duration"
          value={data.duration}
        />
        <label htmlFor="duration">Berapa lama kamu akan menginap?</label>
        <InputNumber
          max={30}
          suffix={" night"}
          isSuffixPlural
          onChange={this.updateData}
          name="duration"
          value={data.duration}
        />

        <label htmlFor="date">Pilih tanggal</label>
        <InputDate onChange={this.updateData} name="date" value={data.date} />

        <h6
          className="text-gray-500 font-weight-light"
          style={{ marginBottom: 40 }}
        >
          Kamu akan membayar{" "}
          <span className="text-gray-900 font-weight-light">
            Rp {itemDetails.price * data.duration} IDR
          </span>{" "}
          per{" "}
          <span className="text-gray-900 font-weight-light">
            {data.duration} {itemDetails.unit}
          </span>
        </h6>

        <Button
          className="btn px-5 ml-5 mr-4 text-white"
          
          hasShadow
          isSecondary
          isBlock
          onClick={this.startBooking}
        >
          Lanjut booking
        </Button>
      </div>
    );
  }
}


BookingForm.propTypes = {
  itemDetails: propTypes.object,
  startBooking: propTypes.func,
};

export default withRouter(BookingForm);
