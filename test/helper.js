'use strict'

// This file contains code that we reuse
// between our tests.
import Fastify from 'fastify'
import appService from '../server/app.js'


// automatically build and tear down our instance
async function build(t) {
  // you can set all the options supported by the fastify CLI command
  //const argv = [AppPath]
  process.env.NODE_ENV = 'production'
  const app = Fastify({ logger: false })
  app.register(appService)
  // close the app after we are done
  t.after(() => {
    app.close()
  })

  return app
}

export default build
