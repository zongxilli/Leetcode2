const fs = require('fs');

const arrangeInAlphaOrder = async (filePath) => {
	let story;
	let sortedOutputArray = [];

	// Read file
	try {
		const data = fs.readFileSync(filePath, 'utf8');
		story = data;

	} catch (err) {
		console.error(err);
	}

	// Separate each paragraph
	for (let eachParagraph of story.split(
		'\n\n------------------------------------------------\n\n'
	)) {
		// Separate each line into an array
		let lineArray = eachParagraph.split('\n');

		// Sort it in alphabetical order by only focusing on every char
		lineArray.sort((a, b) =>
			a
				.replace(/[^\w\s]|_/g, '')
				.localeCompare(b.replace(/[^\w\s]|_/g, ''))
		);

		// Push the sorted paragraph into the output array
		sortedOutputArray.push(lineArray.join('\n'));
	}

	// This is the sorted story in alphabetical order;
	let sortedFile = sortedOutputArray.join(
		'\n\n------------------------------------------------\n\n'
	);

	// Generate an SortedShortStory.txt in your folder => so you can check my work
	fs.writeFileSync('./Documents/Codings/SortedShortStory.txt', sortedFile);

	// console.log(sortedFile);
};

// Make sure to put your txt file in the right place also put the right file path as a parameter  
arrangeInAlphaOrder('./Documents/Codings/ShortStory.txt');
