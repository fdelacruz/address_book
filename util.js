var Util = {};

Util.getHomeDirectory = function() {
	if (process.platform === 'win32') {
		return process.env.USERPROFILE;
	} else {
		return process.env.HOME;
	}
};

module.exports = Util;
