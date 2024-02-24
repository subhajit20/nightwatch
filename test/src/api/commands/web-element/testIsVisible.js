const assert = require('assert');
const MockServer  = require('../../../../lib/mockserver.js');
const CommandGlobals = require('../../../../lib/globals/commands.js');

describe('element().isVisible() command', function() {
  before(function (done) {
    CommandGlobals.beforeEach.call(this, done);
  });

  after(function(done) {
    CommandGlobals.afterEach.call(this, done);
  });

  it('test .element().isVisible()', function() {
    MockServer.addMock({
      url: '/wd/hub/session/1352110219202/element/0/visible',
      method: 'GET',
      response: JSON.stringify({
        value: true
      })
    });

    this.client.api.element('#search').isVisible(function (result) {
      this.assert.equal(result.value, true);
    });
  });

  it('async test .element().isVisible()', async function() {
    MockServer.addMock({
      url: '/wd/hub/session/1352110219202/element/0/visible',
      method: 'GET',
      response: JSON.stringify({
        value: true
      })
    });

    const resultPromise = this.client.api.element('#search').isVisible();
    const result = await resultPromise;
    assert.equal(result, null);
  });
});