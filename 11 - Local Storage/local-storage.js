// check if local storage is supported by the browser
// function isLocalStorageSupported() {
// 	try {
// 		const testKey = "__test__";
// 		localStorage.setItem(testKey, testKey);
// 		localStorage.removeItem(testKey);
// 		return true;
// 	} catch (error) {
// 		return false;
// 	}
// }

// console.log(isLocalStorageSupported());

// JSON
// {
//   "name": "John Doe",
//   "age": 30,
//   "email": "john@example.com",
//   "interests": ["reading", "hiking", "coding"]
// }

// store data
function storeData(key, value) {
	localStorage.setItem(key, value);
	console.log(`Data stored successfully: ${key} - ${value}`);
}

storeData();

// retrieve data
function retrieveData(key) {
	const data = localStorage.getItem(key);
	console.log(`Retrieved data for key ${key}: `, data);
	return data;
}

console.log(retrieveData());

// remove data from local storage
function removeData(key) {
	localStorage.removeItem(key);
	console.log(`Data removed for key: ${key}`);
}

console.log(removeData());

// example usage:
storeData("username", "john_doe");
const username = retrieveData("username");
removeData("username");

// Example usage using JSON data
// check if local storage is supported
function isLocalStorageSupported() {
	return (typeof localStorage !== "undefined") & (localStorage !== null);
}

// function to store data in local storage
function storeData2(key, value) {
	if (!isLocalStorageSupported()) {
		console.error("Local storage is not supported in this browser");
		return;
	}
	const serializedValue = JSON.stringify(value);
	localStorage.setItem(key, serializedValue);
	console.log(`Data stored successfully: ${key} - ${serializedValue}`);
}

// retrieve data
function retrieveData2(key) {
	if (!isLocalStorageSupported()) {
		console.error("Local storage is not supported in this browser");
		return null;
	}

	const serializedValue = localStorage.getItem(key);
	if (serializedValue === null) {
		console.error(`No data found for key: ${key}`);
		return null;
	}

	const value = JSON.parse(serializedValue);
	console.log(`Retrieved data for key ${key}`, value);
	return value;
}

const userData = { name: "John", age: 30, email: "john@example.com" };
storeData2("user", userData);

const retrievedUser = retrieveData2("user");
console.log(retrievedUser);