
  export default function handler(req, res) {
	console.log(req.headers);
	const header = req.headers['x-ms-client-principal'];
	const encoded = header && Buffer.from(header, 'base64');
	const decoded = encoded ? encoded.toString('ascii') : '{}';
  
	res.status(200).json({ headers: req.headers, clientPrincipal: JSON.parse(decoded) })
  }
	