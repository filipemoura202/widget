import { setup } from './bootstrap'

describe('Bootstrap Test', () => {
  it('Should handle enviroment function', () => {
    expect(setup({
      onProduction () {
        return 'Production'
      },
      onDevelopment () {
        return 'Development'
      }
    })).toBeUndefined()
  })
})
