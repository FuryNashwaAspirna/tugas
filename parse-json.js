const parseJson = require('parse-json');
 
const json = '{\n\t"foo": true,\n}';
 
 
JSON.parse(json);
/*
undefined:3
}
^
SyntaxError: Unexpected token }
*/
 
 
parseJson(json);
/*
JSONError: Unexpected token } in JSON at position 16 while parsing near '{      "foo": true,}'
 
  1 | {
  2 |   "foo": true,
> 3 | }
    | ^
*/
 
 
parseJson(json, 'foo.json');
/*
JSONError: Unexpected token } in JSON at position 16 while parsing near '{      "foo": true,}' in foo.json
 
  1 | {
  2 |   "foo": true,
> 3 | }
    | ^
*/
 
 
// You can also add the filename at a later point
try {
    parseJson(json);
} catch (error) {
    error.fileName = 'foo.json';
    throw error;
}
/*
JSONError: Unexpected token } in JSON at position 16 while parsing near '{      "foo": true,}' in foo.json
 
  1 | {
  2 |   "foo": true,
> 3 | }
    | ^
*/