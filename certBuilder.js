const fs = require('fs')
require('dotenv').config()

try {
	const data = fs.writeFileSync('dist/ca-certificate.cer', process.env.CA_CERT )
} catch (err) {
	console.error(err)
}
