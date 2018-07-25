const emailToName = require('./email-to-name.js');

const companyNames = ['acloudguru', 'acg'];

const data = [{
	input: 'TAIT.BROWN@GMAIL.COM',
	output: 'Tait Brown',
	title: 'Handle uppercase'
}, {
	input: 'tait.brown@gmail.com',
	output: 'Tait Brown',
	title: 'Handle happy path'
}, {
	input: 'tait_brown@gmail.com',
	output: 'Tait Brown',
	title: 'Handle underscores'
}, {
	input: 'tait.o\'connor@gmail.com',
	output: 'Tait O\'Connor',
	title: 'Handle O\'Connor case'
}, {
	input: 'tait...brown@gmail.com',
	output: 'Tait Brown',
	title: 'Handle excessive dots'
}, {
	input: 'tait.brown267@gmail.com',
	output: 'Tait Brown',
	title: 'Handle digits'
}, {
	input: 'tait.brown.267@gmail.com',
	output: 'Tait Brown',
	title: 'Handle digits preceded by dot'
}, {
	input: 'tait.brown.@gmail.com',
	output: 'Tait Brown',
	title: 'Handle trailing dot'
}, {
	input: 'tait.brown+test@gmail.com',
	output: 'Tait Brown',
	title: 'Handle gmail specific +test modifiers'
}, {
	input: 'acloudguru@taitbrown.com',
	output: 'Taitbrown',
	title: 'Handle company name @ personal domain'
}, {
	input: 'acg@taitbrown.com',
	output: 'Taitbrown',
	title: 'Handle array of company names'
}, {
	input: 'email@taitbrown.com',
	output: 'Taitbrown',
	title: 'Handle common identifier (email) at personal domain'
}, {
	input: 'hello@taitbrown.com',
	output: 'Taitbrown',
	title: 'Handle common identifier (hello) at personal domain'
}, {
	input: 'me@taitbrown.com',
	output: 'Taitbrown',
	title: 'Handle common identifier (me) at personal domain'
}, {
	input: 'john.mckim@gmail.com',
	output: 'John McKim',
	title: 'Handle "Mc" Case'
}, {
	// A mid string "Mc" should not be cased
	input: 'john.amckim@gmail.com',
	output: 'John Amckim',
	title: 'Ignore mid sentence "mc" pattern'
}];

data.forEach((item) => {
	test(item.title, () => {
		expect(emailToName.process(item.input, companyNames)).toBe(item.output);	
	})
})