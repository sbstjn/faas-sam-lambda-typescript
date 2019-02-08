import { Callback, Handler } from 'aws-lambda'

export const run: Handler = (event: any, _, callback: Callback) => {
  console.log(`${process.env.ProjectID} invoked`)

  if (!!event.should_fail) {
    callback(new Error('Failed on purpose'))
  } else {
    callback(null, 'Done')
  }
}
