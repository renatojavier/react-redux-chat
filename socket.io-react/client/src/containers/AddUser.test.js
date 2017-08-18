import { AddUser } from './AddUser.jsx';
import {expect} from 'chai';

describe('AddUser test suite', () => {
    it('Should have property loadHistory', () => {
        expect( new AddUser ).to.have.property('loadHistory');
    });
});