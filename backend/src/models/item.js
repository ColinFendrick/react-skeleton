const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
	firstName: {
		type: String,
		trim: true,
		required: true
	},
	lastName: {
		type: String,
		trim: true,
		required: true
	},
	participation: {
		type: Number,
		default: 0,
		validate(value) {
			if (value < 1) {
				throw new Error('Age must be positive number greater than 0');
			}
		}
	}
}, {
	timestamps: true
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
