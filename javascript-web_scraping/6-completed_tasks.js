#!/usr/bin/node

const request = require('request');

const url = process.argv[2];

request(url, (error, response, body) => {
	if (error) {
		console.error(error);
		return;
	}

	if (response.statusCode !== 200) {
		console.error(`Failed to fetch ${url}. Status code: ${response.statusCode}`);
		return;
	}

    const tasks = JSON.parse(body);
    const completedTasks = {};

    tasks.forEach(task => {
        if (task.completed) {
            if (completedTasks[task.userId]) {
                completedTasks[task.userId]++;
            } else {
                completedTasks[task.userId] = 1;
            }
        }
    });

    console.log(completedTasks);
});
