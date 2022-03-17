import Playground from './index.vue'
import { shallowMount } from '@vue/test-utils'

describe('<Playground />', () => {
  it('Should render component corretcly', () => {
    const wrapper = shallowMount(Playground)
    expect(wrapper).toMatchSnapshot()
  })
})
