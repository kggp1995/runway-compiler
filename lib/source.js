/*
 * Copyright (c) 2015-2016, Salesforce.com, Inc.
 * All rights reserved.
 * Licensed under the MIT license.
 * For full license text, see LICENSE.md file in the repo root or
 * https://opensource.org/licenses/MIT
 */

'use strict';

// Describes a character range of an input.
// Most nodes in the AST have one of these hanging off of them named 'source'.
// This can be used to provide meaningful error messages, tying back an
// expression to its location in the original source file.
class Source {
  constructor(startchar, endchar) {
    this.input = null;
    this.startchar = startchar;
    this.endchar = endchar;
  }

  setInput(input) {
    this.input = input;
  }

  toString() {
    if (this.input === null) {
      return `chars ${this.startchar.offset}-${this.endchar.offset}`;
    } else {
      return `${this.input.filename}: ` +
        `line ${this.startchar.line}, col ${this.startchar.column} to ` +
        `line ${this.endchar.line}, col ${this.endchar.column}`;
    }
  }
}

module.exports = Source;
