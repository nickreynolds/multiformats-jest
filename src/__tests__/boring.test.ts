import test from "../test.js"

describe('thingy', () => {
  it('should do thing', () => {

    const t = test()
    expect(t).toEqual("ok")
  })
});