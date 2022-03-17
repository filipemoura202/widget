import useStore from '../hooks/store'
import {
  setCurrentComponent,
  setFeedbackType,
  setCurrentPage
} from './index'

describe('Store', () => {
  const store = useStore()

  it('Should set current component name to Success', () => {
    setCurrentComponent('Success')
    expect(store.currentComponent).toBe('Success')
  })

  it('Should set Feedbak type to IDEA', () => {
    const store = useStore()
    setFeedbackType('IDEA')
    expect(store.feedbackType).toBe('IDEA')
  })

  it('Should set current page', () => {
    const store = useStore()
    setCurrentPage('https://google.com.br')
    expect(store.currentPage).toBe('https://google.com.br')
  })
})
