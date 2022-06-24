/**
 * @jest-environment jsdom
 */

const rewire = require('rewire');
var properties = rewire("../application/js/properties");
jest.spyOn(window, 'alert').mockImplementation(() => {});

const page = require('./draftPage');

test('adds 11th player to cause roster overload', () => {
    properties.__set__('rosterNumber', 10);
    expect(() => properties.rosterCheck(2)).toThrow("alert is not a function");
    window.alert.mockClear();
});


