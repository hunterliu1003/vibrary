import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import { TheComponent } from '@vue-final/the-component'

describe('tests', () => {
  it('should works', () => {
    const msg = 'Hello Vue 3 + Vite'
    const wrapper = mount(TheComponent, { props: { msg } })
    expect(wrapper.text()).toContain(msg)
  })
})
