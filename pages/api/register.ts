import createHandler from '~/server/createHandler'

const handler = createHandler()

handler.post(async (req, res) => {
  const { email, password } = req.body
  // validate email with regex
})

export default handler
