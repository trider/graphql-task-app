
const mongoose = require('mongoose');
const MONGODB = 'mongodb+srv://atlasadmin:123@instatecluster0-rugg4.gcp.mongodb.net/?retryWrites=true&SSL=true&ssl_cert_reqs=CERT_NONE';
const PORT = '27018';



const mongo = mongoose.connect(MONGODB, {
	useUnifiedTopology: true,
	useNewUrlParser: true
}).then(() => {
	console.log('MongoDB is connected ...');
	return server.listen({
		port: PORT
	});
}).then(res => {
	console.log('Server running at ', res.url);
});

module.exports = mongo;

