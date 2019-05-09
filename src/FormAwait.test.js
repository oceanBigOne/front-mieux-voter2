import React from 'react';
import * as axios from "axios";
import mockedTable from "./mockedTable";
import Adapter from 'enzyme-adapter-react-16';
import FormAwait from './FormAwait';

import {shallow, configure} from "enzyme";

configure({ adapter: new Adapter() });



jest.mock("axios");


describe('FormAwait', () => {


    beforeAll(() => {
       axios.get.mockImplementation((url) => Promise.resolve(mockedTable[url]));
    });

    afterAll(() => {
        axios.get.restore();
    });

    it('test submit', async (done) => {
        const wrapper = shallow(<FormAwait />);
        const mockedEvent= { preventDefault(){} }

        //Before :
        console.log(wrapper.state());

        wrapper.find('button[type="button"]').simulate("click");
        await wrapper.find('form').simulate('submit', mockedEvent);

        //After :
        console.log(wrapper.state());

        done();

    });


});
