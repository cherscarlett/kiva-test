import { mount } from '@vue/test-utils'
import Progress from '@/components/Progress.vue'

describe('Progres', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Progress);

    expect(wrapper.vm).toBeTruthy();
  })

  test('calculates the right progress percentage', () => {
    const wrapper = mount(Progress, {
      propsData: {
        fundedAmount: '50',
        loanAmount: '100',
      }
    })
    expect(wrapper.find('[role="progressbar"]').attributes('aria-valuenow')).toEqual('50');
  })
})
