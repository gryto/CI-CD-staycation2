import React, { Component } from "react";
import { connect } from "react-redux";

import Header from "parts/Header";
import Hero from "parts/Hero";
import MostPicked from "parts/MostPicked";
import Category from "parts/Category";
import Testimony from "parts/Testimony";
import Footer from "parts/Footer";


import { fetchPage } from "store/actions/page";
class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.refMostPicked = React.createRef();
    }

    componentDidMount () {
        window.title = "Staycation | Home";
        window.scrollTo(0, 0);

        if (!this.props.page.landingPage)
        this.props.fetchPage(`/landing-page`, "landingPage");
    }
    render() {
        const { page } = this.props;

        if (!page.hasOwnProperty("landingPage")) return null;

        return (
        <>
            <Header {...this.props}></Header>
            <Hero refMostPicked={this.refMostPicked} data={page.landingPage.hero} />


            <section className="container">
                <div className="row">
                    <div className="col-7 pr-5">

                    </div>
                    <div className="col-5">
                    </div>
                </div>
            </section>
        
            <MostPicked
                refMostPicked={this.refMostPicked}
                data={page.landingPage.mostPicked}
            />
            <Category data={page.landingPage.category} />
            <Testimony data={page.landingPage.testimonial} />
            <Footer />
        </>
        );
    }
}

const mapStateToProps = (state) => ({
    page: state.page,
  });

export default connect(mapStateToProps, { fetchPage })(LandingPage);
