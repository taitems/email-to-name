module.exports = [{
	input: 'TAIT.BROWN@GMAIL.COM',
	output: 'Tait Brown'
}, {
	input: 'tait.brown@gmail.com',
	output: 'Tait Brown'
}, {
	input: 'tait_brown@gmail.com',
	output: 'Tait Brown'
}, {
	input: 'tait.o\'connor@gmail.com',
	output: 'Tait O\'Connor'
}, {
	input: 'tait...brown@gmail.com',
	output: 'Tait Brown'
}, {
	input: 'tait.brown.267@gmail.com',
	output: 'Tait Brown'
}, {
	input: 'tait.brown.@gmail.com',
	output: 'Tait Brown'
}, {
	input: 'tait.brown267@gmail.com',
	output: 'Tait Brown'
}, {
	input: 'tait.brown+test@gmail.com',
	output: 'Tait Brown'
}, {
	input: 'acloudguru@taitbrown.com',
	output: 'Taitbrown'
}, {
	input: 'acg@taitbrown.com',
	output: 'Taitbrown'
}, {
	input: 'email@taitbrown.com',
	output: 'Taitbrown'
}, {
	input: 'hello@taitbrown.com',
	output: 'Taitbrown'
}, {
	input: 'me@taitbrown.com',
	output: 'Taitbrown'
}, {
	input: 'john.mckim@gmail.com',
	output: 'John McKim'
}, {
	// A mid string "Mc" should not be cased
	input: 'john.amckim@gmail.com',
	output: 'John Amckim'
}];