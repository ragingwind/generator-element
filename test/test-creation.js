/*global describe, beforeEach, it */
'use strict';
var path = require('path');
var helpers = require('yeoman-generator').test;

describe('element generator', function () {
    beforeEach(function (done) {
        helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
            if (err) {
                return done(err);
            }

            this.app = helpers.createGenerator('element:app', [
                '../../app'
            ]);

            done();
        }.bind(this));
    });

    it('creates expected files', function (done) {
        var expected = [
            // dotfiles
            '.bowerrc',
            '.editorconfig',
            '.gitignore',

            // element
            'index.html',
            'Gruntfile.js',
            'README.md',
            'src/my-element.html',

            // app
            'bower.json',
            'package.json'
        ];

        helpers.mockPrompt(this.app, {
            'elementName': 'my-element'
        });

        this.app.options['skip-install'] = true;

        this.app.run({}, function () {
            helpers.assertFile(expected);
            done();
        });
    });
});
