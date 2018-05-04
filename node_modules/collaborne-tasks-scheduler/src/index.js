/* eslint-disable max-statements*/

const moment = require('moment-business-days');

function businessAddWithBlocked(startMoment, daysToAdd, blockedPeriods) {
	// Function businessAdd() fails on non-integers
	// NB. Round up to express the next available business day
	const taskEnd = moment(startMoment.businessAdd(Math.round(daysToAdd))._d);

	// Check if task ends within one of the blocked periods provided
	const blockPeriod = blockedPeriods.find(block => taskEnd.isSame(block.start) || taskEnd.isAfter(block.start));
	if (blockPeriod) {
		// Move the deadline by the number of blocked days
		// NB. Add one to round up to the next available business day
		return moment(taskEnd.businessAdd(blockPeriod.nrBlockDays + 1)._d);
	}

	return taskEnd;
}

/**
 * Calculates the end date for the scheduled task.
 *
 * @param {Moment} start - The starting date in date string format.
 * @param {number} timeAllocation - The time allocation percentage.
 * @param {number} nrNormDays - Number of normalized days required to complete all tasks.
 * @param {BlockedPeriod[]} blockedPeriods - Array of blocked periods.
 * @return {Object} the end date in date string format.
 */
function calcEnd(start, timeAllocation, nrNormDays, blockedPeriods) {
	const daysToAdd = nrNormDays / timeAllocation;
	return businessAddWithBlocked(start, daysToAdd, blockedPeriods);
}

/**
 * Checks if a provided string is a valid date
 *
 * @param {string} date - The date to parse.
 * @return {boolean} true if the input date is valid
 */
function isValidDate(date) {
	const timestamp = Date.parse(date);
	return !isNaN(timestamp);
}

function sumNrNormDays(tasks) {
	return tasks.reduce((acc, task) => acc + task.nrNormDays, 0);
}

function calcDeadlines(tasks, start, blockedPeriods, timeAllocation) {
	const startMoment = moment(start);
	let lastTaskNormDays = 0;
	return tasks.map(task => {
		lastTaskNormDays += task.nrNormDays;
		const realDays = lastTaskNormDays / timeAllocation;
		const taskDeadline = businessAddWithBlocked(startMoment, realDays, blockedPeriods);
		return {
			deadline: taskDeadline.format('YYYY-MM-DD'),
			id: task.id,
		};
	});
}

/**
 * Task to be scheduled.
 *
 * @typedef Task
 * @property {string} id ID of the task
 * @property {number} nrNormDays Number of normalized days required to complete the task (assuming 100% time allocation).
 */

/**
 * Closed interval of time not available for tasks scheduling.
 * Eg. blocked period ['2018-03-07', '2018-03-08'] shifts scheduling of 2 days
 *
 * @typedef BlockedPeriod
 * @property {string} start String representing the start date of the period in ISO format (eg. '2018-03-19').
 * @property {string} end String representing the end date of the period in ISO format (eg. '2018-03-19').
 */

/**
 * The computed scheduling.
 *
 * @typedef SchedulingResult
 * @property {Object[]} deadlines List of deadline objects
 * @property {string} start String representing the start date in ISO format (eg. '2018-03-19').
 * @property {string} end String representing the end date in ISO format (eg. '2018-03-19').
 * @property {number} nrNormDays Number of normalized days required to complete all tasks (e.g. if time allocation would be 100%)
 * @property {number} timeAllocation The time allocation in percentage (0..1)
 * @property {number} nrRealDays Number of business days required to complete all tasks (considering time allocation.
 */

/**
 * Calculates the scheduling of a set of tasks.
 *
 * @param {Object} params - Input parameters for scheduling calculation.
 * @param {Task[]} params.tasks - An array of tasks.
 * @param {string} params.start - A string representing the starting date in ISO format (eg. '2018-03-19').
 * @param {string} [params.end] - A string representing the end date in ISO format (eg. '2018-03-19').
 * @param {number} [params.timeAllocation] - The time allocation percentage.
 * @param {BlockedPeriod[]} [params.blockedPeriods] - Array of blocked periods.
 * @return {SchedulingResult} an object describing the planning calculated
 */
function schedule(params) {
	// Input validation
	if (!isValidDate(params.start)) {
		throw new Error(`Invalid start date (${params.start}). Must be in format YYYY-MM-DD.`);
	}
	if (params.end && !isValidDate(params.end)) {
		throw new Error(`Invalid end date (${params.end}). Must be in format YYYY-MM-DD.`);
	}
	if (Boolean(params.end) && Boolean(params.timeAllocation)) {
		throw new Error('Only provide end date or time allocation percentage');
	}

	const startDate = moment(params.start);

	const nrNormDays = sumNrNormDays(params.tasks);

	const blockedPeriods = (params.blockedPeriods || []).map(period => ({
		nrBlockDays: moment(period.start).businessDiff(moment(period.end)),
		start: period.start,
	}));

	let endDate;
	if (params.end) {
		// End date is given -> calculate time allocation
		endDate = moment(params.end);
	} else {
		// Time allocation is given -> calculate end date
		endDate = calcEnd(startDate, params.timeAllocation, nrNormDays, blockedPeriods);
	}

	const nrRealDays = startDate.businessDiff(moment(endDate));

	let timeAllocation;
	if (params.end) {
		// End date is given -> calculate time allocation
		timeAllocation = nrNormDays / nrRealDays;
	} else {
		timeAllocation = params.timeAllocation;
	}

	const deadlines = calcDeadlines(params.tasks, startDate, blockedPeriods, timeAllocation);
	const deadlineById = deadlines.reduce((acc, task) => Object.assign(acc, {
		[task.id]: task.deadline,
	}), {});

	return {
		deadlines: deadlineById,
		end: endDate.format('YYYY-MM-DD'),
		nrNormDays,
		nrRealDays,
		start: startDate.format('YYYY-MM-DD'),
		timeAllocation,
	};
}

module.exports = {
	schedule
};
