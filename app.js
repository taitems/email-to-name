var emailToName = require('./email-to-name.js');
var testData = require('./test-data.js');

console.log('testData.length', testData.length);
console.log('typeof emailToName.process', typeof emailToName.process);

var companyNames = ['acloudguru', 'acg', 'cloudguru'];

for (var i = 0; i < testData.length; i++) {
	var $test = testData[i];
	var response = emailToName.process($test.input, companyNames, null);
	if (response === $test.output) {
		console.log('✅ Passed!')
	} else {
		console.log('❌ Error!');
	}
	console.log('Source:', $test.input);
	console.log('Expected:', $test.output);
	console.log('Received:', response);
	console.log('------');

}