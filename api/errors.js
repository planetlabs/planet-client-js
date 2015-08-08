/**
 * Includes specific Error types generated by API requests.
 * @module errors
 */

/**
 * An error based on a server response.
 * @param {string} message Error message.
 * @param {XMLHttpRequest} response The response.
 * @param {string} body Any parsed response body.
 * @constructor
 */
function ResponseError(message, response, body) {
  this.message = message;
  this.response = response;
  this.body = body;
  this.stack = (new Error()).stack;
}
ResponseError.prototype = new Error();
ResponseError.prototype.name = 'ResponseError';

/**
 * The request was bad (400).
 * @param {string} message Error message.
 * @param {XMLHttpRequest} response The response.
 * @param {Object} body Any parsed response body (as JSON).
 * @extends {ResponseError}
 * @constructor
 */
function BadRequest(message, response, body) {
  ResponseError.apply(this, arguments);
}

BadRequest.prototype = new ResponseError();
BadRequest.prototype.name = 'BadRequest';

/**
 * The request requires user authentication (401).
 * @param {string} message Error message.
 * @param {XMLHttpRequest} response The response.
 * @param {Object} body Any parsed response body (as JSON).
 * @extends {ResponseError}
 * @constructor
 */
function Unauthorized(message, response, body) {
  ResponseError.apply(this, arguments);
}

Unauthorized.prototype = new ResponseError();
Unauthorized.prototype.name = 'Unauthorized';

/**
 * The client is forbidden from making the request (403).
 * @param {string} message Error message.
 * @param {XMLHttpRequest} response The response.
 * @param {Object} body Any parsed response body (as JSON).
 * @extends {ResponseError}
 * @constructor
 */
function Forbidden(message, response, body) {
  ResponseError.apply(this, arguments);
}

Forbidden.prototype = new ResponseError();
Forbidden.prototype.name = 'Forbidden';

/**
 * The API returns an unexpected response.
 * @param {string} message Error message.
 * @param {XMLHttpRequest} response The response.
 * @param {string} body Any parsed response body.
 * @extends {ResponseError}
 * @constructor
 */
function UnexpectedResponse(message, response, body) {
  ResponseError.apply(this, arguments);
}

UnexpectedResponse.prototype = new ResponseError();
UnexpectedResponse.prototype.name = 'UnexpectedResponse';

/**
 * An error generated when the request is aborted.
 * @param {string} message Error message.
 * @constructor
 */
function AbortedRequest(message) {
  this.message = message;
  this.stack = (new Error()).stack;
}
AbortedRequest.prototype = new Error();
AbortedRequest.prototype.name = 'AbortedRequest';

exports.ResponseError = ResponseError;
exports.BadRequest = BadRequest;
exports.Unauthorized = Unauthorized;
exports.Forbidden = Forbidden;
exports.UnexpectedResponse = UnexpectedResponse;
exports.AbortedRequest = AbortedRequest;
