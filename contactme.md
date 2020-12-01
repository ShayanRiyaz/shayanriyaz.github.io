---
layout: contactme
permalink: /contactme/
title: Lets get in touch
tags: [Jekyll, theme, responsive, photography, template]
modified: 11-30-2020
comments: false
---
<html>
<head>
<style>
textarea {
  border-radius: 25px;
  padding: 20px; 
  width: 450px;
  height: 150px;  
}
input {
  border-radius: 15px;
  padding: 10px; 
}
select {
  border-radius: 15px;
  padding: 10px; 
}
button {
  border-radius: 15px;
  padding: 10px; 
}
</style>
</head>
<body>
  <div class="col-md-6 offset-md-3 mt-5">
        <a target="_blank" href="https://getform.io?ref=codepenHTML">
        </a>
        <br>
        <form accept-charset="UTF-8" action="https://getform.io/f/bd36283d-2e3d-4f3a-a116-be0fdf906898" method="POST"  target="_blank">
          <div class="form-group">
            <label for="exampleInputName">Full Name</label>
            <input type="text" name="fullname" class="form-control" id="exampleInputName" placeholder="Enter your name and surname" required="required">
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1" required="required">Email address</label>
            <input type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
          </div>
          <div class="form-group">
            <label for="exampleFormControlSelect1">Topics of Interest</label>
            <select class="form-control" id="exampleFormControlSelect1" name="platform" required="required">
              <option>Career</option>
              <option>Social Good</option>
              <option>Education</option>
              <option>Programming</option>
              <option>Projects</option>
              <option>Other</option>
            </select>
          </div>
        <hr>
        <div class="form-group mt-3" style="test-align:center">
        <label for="exampleInputName">Message</label>
        <textarea type="text" name="message" class="form-control" cols="40" rows="10" id="rcorners3" placeholder="You can enter your message here" required="required"></textarea>
        </div>
        <hr>
          <div class="form-group mt-3">
            <label class="mr-2">Any Attachments?</label>
            <input type="file" name="file">
          </div>
        <hr>
        <div style="test-align:center">
        <button type="submit" class="btn btn-primary">Submit</button>
        </div>
        </form>
        </div> 
    </body>
    </html>