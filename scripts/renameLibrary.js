const prompt = require('prompt')
const replace = require('replace-in-file')

prompt.start()

;(async () => {
  const oldName = require('../packages/lib/package.json').name
  const { newName } = await prompt.get({
    properties: {
      newName: {
        pattern: /^(@[a-z0-9-~][a-z0-9-._~]*\/)?[a-z0-9-~][a-z0-9-._~]*$/,
        description: '\nEnter the library name you want (e.g: my-library-name)',
        message: 'Invalid name /^(@[a-z0-9-~][a-z0-9-._~]*\/)?[a-z0-9-~][a-z0-9-._~]*$/',
        required: true,
      },
    },
  })

  replace({
    files: '**/*',
    from: new RegExp(`${oldName}`, 'g'),
    to: newName,
  })
})()
