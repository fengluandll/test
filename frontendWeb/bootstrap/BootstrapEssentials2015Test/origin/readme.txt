
Readme
------------------------------------------------------------------

Contents of the code bundle
-----------------------------------------
The code bundle contains the following items:
1. Four HTML files
	1) index.html
	This is the main landing page as discussed in various chapters of the book.
	2) browse.html
	This is the product and category browser page as discussed in the book.
	3) contact.html
	This page contains the Contact Us form.
	4) 404.html
	This is the page that should appear when a user tries to navigate to an incorrect Url, means when the web server generates HTTP Error 404.
	
2. Four folders
	1) bs
	This folder contains all files and folders of Bootstrap. Bootstrap CSS, JS and Fonts files are stored here.
	2) css
	All custom CSS files are stored here. In our application we have used only one custom CSS file which is for Bootstrap TreeView control.
	3) img
	All images that are used in this demo application are stored in the folder.
	4) js
	Similar to the CSS folder, all custom and additional JavaScript files are maintained in this folder. In our application, we have JavaScripts for TreeView, WYSIWYG, Hotkeys and finally the main jQuery file. All these files are stored in this folder.
	

Deployment of this code bundle
-----------------------------------------
The best and easiest way to use this code bundle is to deploy this in a simple web server such as Apache.
Here are the steps (assuming you already have Apache web server downloaded and deployed):
1. Unzip the archive.
2. Copy all the files and folders as-it-is in the htdocs folder of Apache.
3. Start your server.
4. In your browser, navigate to http://localhost. The index page should come up, you will be able to then navigate to other pages using the menu. However, the Urls of each of the pages would be:
	1) index page: http://localhost or http://localhost/index.html 
	2) browse page: http://localhost/browse.html
	3) contact page: http://localhost/contact.html
	4) 404 page: http://localhost/404.html
5. In case you already have similar files in your Apache htdocs folder, or you do not want to deploy these files in the root folder itself, then you can copy the full bundle in a subfolder of htdocs.
For example, say we have created a subfolder under htdcs by name "app". So the corresponding Urls will be:
	1) index page: http://localhost/app or http://localhost/app/index.html 
	2) browse page: http://localhost/app/browse.html
	3) contact page: http://localhost/app/contact.html
	4) 404 page: http://localhost/app/404.html

