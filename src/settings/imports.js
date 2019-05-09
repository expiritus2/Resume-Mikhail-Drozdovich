/* eslint-disable */
let Photo = null;
let info = {};
let skillsList = [];
let worksList = [];
let profSummary = {};
let education = [];

if (PERSON) {
  Photo = require(`../../person/${PERSON}/photo/image.jpeg`);
  info = require(`../../person/${PERSON}/info.js`).default;
  skillsList = require(`../../person/${PERSON}/skills.js`).default;
  worksList = require(`../../person/${PERSON}/work-history.js`).default;
  profSummary = require(`../../person/${PERSON}/profSummary.js`).default;
  education = require(`../../person/${PERSON}/education.js`).default;
}

module.exports = {
  Photo,
  info,
  skillsList,
  worksList,
  profSummary,
  education
};
