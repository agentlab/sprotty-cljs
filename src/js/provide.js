
Object.defineProperty(exports, "__esModule", { value: true });
var sparql_jsld_client = require("@agentlab/sparql-jsld-client");

const prefixes = {
	sh: 'http://www.w3.org/ns/shacl#',
	xsd: 'http://www.w3.org/2001/XMLSchema#',
	jsld: 'http://agentlab.ru/jsld_test#',
	dcterms: 'http://purl.org/dc/terms/',
	rm: 'http://cpgu.kbpm.ru/ns/rm/rdf#',
	rdfs: 'http://www.w3.org/2000/01/rdf-schema#'
};

function createProvider() {
	const provider = new sparql_jsld_client.ObjectProviderImpl();
	provider.setQueryPrefixes({
		sh: 'http://www.w3.org/ns/shacl#',
		xsd: 'http://www.w3.org/2001/XMLSchema#',
		jsld: 'http://agentlab.ru/jsld_test#',
		dcterms: 'http://purl.org/dc/terms/',
		rm: 'http://cpgu.kbpm.ru/ns/rm/rdf#',
		rdfs: 'http://www.w3.org/2000/01/rdf-schema#'
	});

	const client = provider.getClient();
	client.setServerUrl('https://expert.agentlab.ru/rdf4j-server');
	const repositoryID = "jsld_test";
	client.setRepositoryId(repositoryID);

	return provider;
};

function getObj(provider, schema, callback) {
	provider.selectObjects(schema, {
	}).then((data) => callback(data));
};

exports.getObj = getObj;
exports.createProvider = createProvider;