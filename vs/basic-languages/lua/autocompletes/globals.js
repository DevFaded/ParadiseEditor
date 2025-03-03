define(["require", "exports"], function (require, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	exports.autocompletes = {
		"Variable": {
			"game": {
				__children__: {},
				__using__: ['classes/DataModel'],
			},
			"Enum": {
				__children__: {},
				__using__: ['classes/Enums'],
			},
			"shared": {},
			"script": {
				__children__: {},
				__using__: ['classes/Instance'],
			},
			"_G": {},
			"_VERSION": {},
			"workspace": {
				__children__: {},
				__using__: ['classes/Workspace'],
			},
			"plugin": {},
			"task": {
				__children__: {},
				__using__: ['libraries/task']
			},

			// Krnl Stuff
			"Drawing": {
				__children__: {},
				__using__: ['libraries/Drawing']
			},
			"Kultum": {
				__children__: {},
				__using__: ['libraries/Kultum']
			}
		},
	};
});