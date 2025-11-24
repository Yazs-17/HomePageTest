let eventEmitter = {
	events: {},
	on: function (event, listener) {
		if (!this.events[event]) {
			this.events[event] = []
		}
		this.events[event].push(listener);
	},
	emit: function (event, ...args) {
		if (!this.events[event]) {
			return;
		}
		this.events[event].forEach((listener) => listener(...args));
	},
	off: function (event, listener) {
		if (!this.events[event]) {
			return;
		}
		this.events[event] = this.events[event].filter(l => l != listener)
	}
};

function user1 (message) {
	console.log('User1 received message:', message);
}
function user2 (message) {
	console.log('User2 received message:', message);
}

eventEmitter.on('article', user1);
eventEmitter.on('article', user2);

eventEmitter.emit('article', 'JS Book')

eventEmitter.off('article', user1);

eventEmitter.emit('article', 'only user2')