/* eslint-disable */
let Photo = null;
let info = {};
let skillsList = [];
let experience = [];
let profSummary = {};
let education = [];
let projects = [];

if (PERSON) {
  Photo = require(`../../person/${PERSON}/photo/image.jpeg`);
  info = require(`../../person/${PERSON}/info.js`).default;
  skillsList = require(`../../person/${PERSON}/skills.js`).default;
  experience = require(`../../person/${PERSON}/experience.js`).default;
  profSummary = require(`../../person/${PERSON}/profSummary.js`).default;
  education = require(`../../person/${PERSON}/education.js`).default;
  projects = require(`../../person/${PERSON}/projects.js`).default;
}

module.exports = {
  Photo,
  info,
  skillsList,
  experience,
  profSummary,
  education,
  projects
};
