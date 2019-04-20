import React from 'react';
import defaultPage from '../hocs/defaultPage'
const AddingCard = () => (
    <div>
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="form-group">

                        <div className="form-group">
                            <label for="exampleFormControlInput1">Name of gig</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Your@gig"/>
                        </div>
                        <br/>
                        <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Category
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" href="#">Designing</a>
                                <a className="dropdown-item" href="#">Coding</a>
                                <a className="dropdown-item" href="#">Marketing</a>
                            </div>
                        </div><br/>
                        <div className="form-group">
                            <label for="exampleFormControlInput1">Rate</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="$0.0"/>
                        </div>
                        <div className="form-group">
                            <label for="exampleFormControlTextarea1">Description</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
export default defaultPage(AddingCard)