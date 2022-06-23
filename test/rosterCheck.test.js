/**
 * @jest-environment jsdom
 */

const rewire = require('rewire');
var properties = rewire("../application/js/properties");
jest.spyOn(window, 'alert').mockImplementation(() => {});

const page = require('./draftPage');

test('adds 11th player to cause roster overload', () => {
    properties.__set__('rosterNumber', 12);
    //console.log('page stuff: ', page.window.document.getElementById("position"+2).innerHTML);
    expect(() => properties.rosterCheck(2)).toThrow("alert is not a function");
    window.alert.mockClear();
});


