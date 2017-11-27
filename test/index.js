require('chai').should()
const {describe, it} = require('mocha')
const depnames = require('..')

describe('depnames module', function () {
  this.timeout(5 * 1000) // bad wifi at the coffee shop

  it('is a function', () => {
    depnames.should.be.a('function')
  })

  it('returns an array of dependency names', async () => {
    const names = await depnames('vmd')
    names.should.be.an('array')
    names.should.include('electron')
    names.should.not.include('eslint')
  })

  it('lists devDependencies if dev option is present', async () => {
    const names = await depnames('vmd', {dev: true})
    names.should.be.an('array')
    names.should.not.include('electron')
    names.should.include('eslint')
  })
})
