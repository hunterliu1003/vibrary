import prompt from 'prompt'
import replace from 'replace-in-file'
import pack from '../package.json' assert {type: 'json'}

prompt.start()

;(async () => {
  const oldName = pack.name
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
    ignore: ['scripts/**/*', 'README.md'],
    from: new RegExp(`${oldName}`, 'g'),
    to: newName,
  })
})()
