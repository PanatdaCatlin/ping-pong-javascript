import {pingPong} from './../src/ping-pong.js';

describe('ping', function() {

  it('should test that all multiples of 3 return ping', function() {
    var output = new pingPong(3)
    expect(output).toEqual([1,2,'ping'])
  });
});

describe('pong', function() {

  it('should test that all multiples of 5 return pong', function() {
    var output = new pingPong(5)
    expect(output).toEqual([1,2,'ping',4,"pong"])
  });
});

describe('ping-pong', function() {

  it('should test that all multiples of 3 and 5 return ping-pong', function() {
    var output = new pingPong(15)
    expect(output).toEqual([1,2,'ping',4,"pong","ping", 7,8,"ping","pong",11,"ping",13,14,"ping-pong"])
  });
});
