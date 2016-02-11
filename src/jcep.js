import aggregation from './aggregation.js';
import Base from './base.js';
import AppendScript from './append_script.js';
import JsonP from './jsonp.js';
import Requester from './requester.js';
import Search from './search.js';

class Config extends aggregation(Base, AppendScript, JsonP, Requester, Search) {}

module.exports = Config;
