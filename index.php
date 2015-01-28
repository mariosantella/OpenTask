<?php require_once 'lib/medoo.php'; $taskdb = new medoo('res/task.sqlite'); ?>
<!doctype html>
<html class="no-js" lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Task Manager</title>
    <link rel="stylesheet" href="css/foundation-icons.css">
    <link rel="stylesheet" href="css/foundation.css">
	<link rel="stylesheet" href="css/style.css" />
	<link rel="stylesheet" href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.16/themes/base/jquery-ui.css" />
    <link rel="stylesheet" href="http://static.jquery.com/ui/css/demo-docs-theme/ui.theme.css" />
    <script src="https://code.jquery.com/jquery-1.6.4.min.js"></script>
	<script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.16/jquery-ui.min.js"></script>
    <script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.16/i18n/jquery-ui-i18n.min.js"></script>

	<script src="js/foundation.min.js"></script>
    <script>
			var tasks = [ <?php
			$datas = $taskdb->select("tasks", "*");
			
				foreach($datas as $data)
					{	
					$output = json_encode($data);
					echo $output.",";
					}
			
			?> 
			];
			$(document).foundation();
    </script>
	<script src="js/script.js"></script>
  
  </head>
  <body>
    
    <div class="row">
      
      <div class="large-8 columns">
        <h1>Task Manager</h1>
      </div> 
      
      <div class="large-4 columns"> 
      	<button id="add" class="button">ADD TASK</button>
       <div class="saveTip">CTRL+S TO SAVE</div>
      </div>
      
      </div>
    </div>
    
    <div class="row">
      <div class="large-12 columns">
      
      
            <div class="demo">
                <ul id="sortable-tasks">
                 
                </ul>
            </div>

	 </div>
    </div>
<h3>
LOG
</h3>
<div class="errorcont"></div>   
  </body>
</html>

