import React from 'react';
import * as axios from "axios";
import mockedTable from "./mockedTable";
import Adapter from 'enzyme-adapter-react-16';
import Form from './Form';

import {shallow, configure} from "enzyme";

configure({ adapter: new Adapter() });



jest.mock("axios");


describe('Form', () => {


    beforeAll(() => {
        axios.get.mockImplementation((url) => Promise.resolve(mockedTable[url]));
    });

    afterAll(() => {
        axios.get.restore();
    });

    it('test submit', (done) => {
        const wrapper = shallow(<Form />);

        console.log("before :");
        console.log(wrapper.state().clicked);
        console.log(wrapper.state().response);

        wrapper.find('button[type="button"]').simulate("click");
        wrapper.find('form').simulate('submit', { preventDefault() {} }); 
        //wrapper.update();
        
	console.log("after :");
        console.log(wrapper.state().clicked);
        console.log(wrapper.state());

        done();

    });


});
