/* eslint-disable */
let skillsList = [];
let worksList = [];
let profSummary = {};
let education = [];

if (PERSON) {
  Photo = require(`../../person/${PERSON}/photo/image.jpeg`);
  skillsList = require(`../../person/${PERSON}/skills.js`).default;
  worksList = require(`../../person/${PERSON}/work-history.js`).default;
  profSummary = require(`../../person/${PERSON}/profSummary.js`).default;
  education = require(`../../person/${PERSON}/education.js`).default;
}

module.exports = {
  Photo,
  skillsList,
  worksList,
  profSummary,
  education
};
