var EventManager = function() {
  this.initialize()
};
EventManager.prototype = {
	constructor : EventManager,
	initialize : function() {
		this.listeners = {}
	},
	addListener : function(b, a) {
		if (!this.listeners[b]) {
			this.listeners[b] = []
		}
		if (a instanceof Function) {
			this.listeners[b].push(a)
		}
		return this
	},
	dispatchEvent : function(c, d) {
		if (this.listeners[c]) {
			for ( var b = 0, a = this.listeners[c].length; b < a; b++) {
				this.listeners[c][b].call(window, d)
			}
		}
	},
	removeListener : function(d, c) {
		if (this.listeners[d]) {
			for ( var b = 0, a = this.listeners[d].length; b < a; b++) {
				if (this.listeners[d][b] === c) {
					this.listeners[d].slice(b, 1);
					break
				}
			}
		}
	},
	removeListeners : function(d) {
		if (this.listeners[d]) {
			this.listeners[d] = null;
		}
	}
};
