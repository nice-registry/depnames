require('chai').should()
const {describe, it} = require('mocha')
const nixt = require('nixt')

describe('depnames CLI', function () {
  it('displays usage if no args are present', (done) => {
    nixt()
    .run(`node cli.js`)
    .stdout(/Usage:/)
    .end(done)
  })

  it('displays runtime deps by default', (done) => {
    nixt()
    .run(`node cli.js vmd`)
    .stdout(/electron/)
    .end(done)
  })

  it('displays dev deps with when --dev flag is present', (done) => {
    nixt()
    .run(`node cli.js vmd --dev`)
    .stdout(/eslint/)
    .end(done)
  })
})
