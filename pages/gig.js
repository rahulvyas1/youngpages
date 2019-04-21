import React from 'react';
import defaultPage from '../hocs/defaultPage'
import PropTypes from "prop-types";
import securePage from "../hocs/securePage";

const AddingCard = ({loggedUser}) => (
    <div>
        <div className="container add">
            <button className="btn btn-primary" type="button" data-toggle="modal" data-target="#myModal">Launch modal
            </button>
        </div>
        <div className="modal fade" id="myModal">
            <div className=" modal-dialog ">
                <button type="button" className="close" data-dismiss="#myModal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <div className="modal-content">
                    <div className="modal-body">
                        <div className="row">
                            <div className="col">
                                <div className="form-group">
                                    <div className="form-group">
                                        <label for="exampleFormControlInput1">Name of gig</label>
                                        <input type="text" className="form-control" id="exampleFormControlInput1"
                                               placeholder="Your@gig"/>
                                    </div>
                                    <br/>
                                    <label for="exampleFormControlInput1">Select Field</label>
                                    <div className="input-group mb-3">

                                        <select className="custom-select" id="inputGroupSelect02">
                                            <option selected>Choose...</option>
                                            <option value="1">Coding </option>
                                            <option value="2">Designing</option>
                                            <option value="3">Marketing</option>
                                        </select>
                                    </div>
                                    <br/>
                                    <div className="form-group">
                                        <label for="exampleFormControlInput1">Rate</label>
                                        <input type="text" className="form-control" id="exampleFormControlInput1"
                                               placeholder="$0.0"/>
                                    </div>
                                    <div className="form-group">
                                        <label for="exampleFormControlTextarea1">Description</label>
                                        <textarea className="form-control" id="exampleFormControlTextarea1"
                                                  placeholder="Describe your Gig" rows="3"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">Add Gig</button>
                </div>
            </div>
        </div>
        <div className="container-fluid p-5">
            <div className="row">
                <div className="col">
                    Previous Gigs
                </div>
            </div>
        </div>
    </div>
)
AddingCard.propTypes = {
    loggedUser: PropTypes.object.isRequired
}
export default securePage(AddingCard)