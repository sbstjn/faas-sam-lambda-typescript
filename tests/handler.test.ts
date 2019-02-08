import { Context } from 'aws-lambda'

import { run } from '../src/handler'

describe('Handler', () => {
  let log: jest.Mock

  beforeAll(() => {
    process.env.ProjectID = 'example-test'
    log = jest.fn()

    console.log = log
  })

  it('should call callback', () => {
    const fnc = jest.fn()

    run({}, {} as Context, fnc)

    expect(fnc).toHaveBeenCalledWith(null, 'Done')
    expect(log).toHaveBeenCalledWith('example-test invoked')
  })

  it('should throw error', () => {
    const fnc = jest.fn()

    run({ should_fail: true }, {} as Context, fnc)

    expect(fnc).toHaveBeenCalledWith(new Error('Failed on purpose'))
    expect(log).toHaveBeenCalledWith('example-test invoked')
  })
})
