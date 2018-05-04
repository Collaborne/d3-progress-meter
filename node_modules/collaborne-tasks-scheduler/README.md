# tasks-scheduler [![Build Status](https://travis-ci.org/Collaborne/tasks-scheduler.svg?branch=master)](https://travis-ci.org/Collaborne/tasks-scheduler)

A time-based scheduler for tasks.

## Install
```bash
npm install --save collaborne-tasks-scheduler
```

## Usage
```javascript
const tasksPlanner = require('collaborne-tasks-scheduler');
const scheduleResponse = tasksPlanner.schedule({
	start: '2018-01-01',
	end: '2018-06-30',
	timeAllocation: 0.5,
	tasks
});
```