exports.success = (req, res, body, status) => {
  res.status(status||200).send({
    error: false,
    status: status || 200,
    body: body || {}
  })
}

exports.error = (req, res, body, status, error) => {
  console.error(`[Error]: ${error.message}`)
  res.status(status||200).send({
    error: body,
    status: status || 200,
    body: false
  })
}