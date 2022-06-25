/**
 * @jest-environment jsdom
 */

const rewire = require('rewire');
const { rosterCheck } = require('../application/js/properties');
var properties = rewire("../application/js/properties");
jest.spyOn(window, 'alert').mockImplementation(() => {});

const page = require('./draftPage');

test('adds 11th player to cause roster overload', () => {
    properties.__set__('rosterNumber', 10);
    expect(() => properties.rosterCheck(2)).toThrow("alert is not a function");
    expect(page.window.document.getElementById("numOfPlayers").innerHTML).toEqual("(0/10)");
    window.alert.mockClear();
});


