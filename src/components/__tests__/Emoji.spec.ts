import { mount } from '@vue/test-utils'
import Emoji from '../Emoji.vue'

describe('Emoji Component', () => {
	test('should render 5 emojis', () => {
		const wrapper = mount(Emoji, {
			propsData: {
				count: 5
			}
		})
		expect(wrapper.html()).toMatchSnapshot()
	})
})
