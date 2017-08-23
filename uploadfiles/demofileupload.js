/*
@Author:Parv Jain
There is a very good module for working with file uploads, called "Formidable".

The Formidable module can be downloaded and installed using NPM

npm install formidable
*/


/*

Step1 Create a upload form
Create a Node.js file that writes an HTML form, with an upload field


Step 2: Parse the Uploaded File
Include the Formidable module to be able to parse the uploaded file once it reaches the server.

When the file is uploaded and parsed, it gets placed on a temporary folder on your computer.

Step 3: Save the File
When a file is successfully uploaded to the server, it is placed on a temporary folder.

The path to this directory can be found in the "files" object, passed as the second argument in the parse() method's callback function.

To move the file to the folder of your choice, use the File System module, and rename the file

*/

var http = require('http');
var formidable = require('formidable');
var fs = require('fs');

http.createServer(function (req, res) {
  if (req.url == '/fileupload') {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      var oldpath = files.filetoupload.path;
      var newpath = '/home/parv/pros/NodeJSW3S/uploadfiles/uploads/' + files.filetoupload.name;
      fs.rename(oldpath, newpath, function (err) {
        if (err) throw err;
        res.write('File uploaded and moved!');
        res.end();
      });
    });
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
  }
}).listen(3000);