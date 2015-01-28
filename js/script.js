// Task Manager Lite

	// No Tasks? let's create the first one! 
		function noTask(){
					$("#sortable-tasks").append( "<li class='task'><span class='number'>"+(1)+"</span><span contenteditable class='changeable tasktxt' type='1' id='"+(1)+"'>"+"New.."+"</span><span class='delete'>X</span></li>");
					// And create the Object	
				tasks = [ {"id":"1","name":"New..","date":"00000000","type":"1","sorting":"1"} ];	
    		var totalTasks = tasks.length;
				}

$(document).ready(function(){
		
		// Add Task Action
		
		$('#add').click(function addTask(){
			totalTasks = $('.task').length;
		// Append record to the object
		tasks.push({"id":"x","name":"New..","date":"00000000","type":"1","sorting":totalTasks+1});
		// make it appear on DOM	
				$("#sortable-tasks").append( "<li class='task'><span class='number'>"+(totalTasks+1)+"</span><span contenteditable class=' changeable tasktxt' type='1' id='"+(totalTasks+1)+"'>"+"New.."+"</span><span class='delete'>X</span></li>");
							// make the added task bar easily focussable
						$(".task").click(function(){
							$(this).children().eq(1).focus();
						});		
			});
				
		// Handle the 'tasks' object (JSON) 
		var totalTasks = tasks.length; // number of elements
			if (totalTasks == 0){noTask();} 

		 // Load all the tasks
		 for(var cn = 0; cn <= totalTasks-1;cn++) // creating the list
			 	{
$("#sortable-tasks").append( "<li class='task'><span class='number'>"+tasks[cn].sorting+"</span><span contenteditable class='changeable tasktxt' type='"+tasks[cn].type+"' id='"+tasks[cn].id+"'>"+tasks[cn].name+"</span><span class='delete'>X</span></li>");	
				}


			
			// re-Create JSON with new positions and tasks
					function updateTasks(){	
						var selTask = $(".task");
						var totTasks = $(".task").length;
						 for(var count = 0;count <= totTasks-1;count++){
							 // updating the object		
							tasks[count].sorting = $(selTask[count]).children().eq(0).html();
							tasks[count].id = $(selTask[count]).children().eq(0).html();
							tasks[count].name = $(selTask[count]).children().eq(1).html();
							tasks[count].type = $(selTask[count]).children().eq(1).attr("type");
							
						 }
					
					// Ajax Send to PHP serialize script
				    	$.ajax({
						  url: 'script/store.php',
						  data: {arr: JSON.stringify(tasks)},
						  type: 'POST',
						  success: function(data) {
							  $(".errorcont").html(data);
							}
						});
					
					} // END updateTasks function
					 



				
		// make the task bar easily focussable
		$(".task").click(function(){
			$(this).children().eq(1).focus();
		});		
		
				// make it sortable and handle the update event on DOM changed --- thanks to jQueryUI!	
				$("#sortable-tasks").sortable({
  					update: function( event, ui ) {
					  	
						// reset the numbers on DOM
							var taskSel = $(".number"); 
							var totalTasks = $(".number").length;
							 for(var count = 0;count <= totalTasks-1;count++){
								 //console.log($(taskSel[count]).html(count+1));
								 $(taskSel[count]).html(count+1);
								}
					}
				 });
				
				
			// Add Delete Action
		
		$('.delete').click(function (){
			var idtask = $(this).parent().children().eq(0).html();	
			console.log("fired the  " + idtask);
			// remove from DOM
			$(this).parent().remove();
			// remove from object
			tasks.splice(idtask-1,1);
						
						return tasks;
						
						});		
		
			
		// Realtime Store Text Changes (Next feature)
		
		var contents = $('.changeable').html();
		$('.changeable').blur(function() {
			if (contents!=$(this).html()){
		     console.log("text_changed!"); 	
        	contents = $(this).html();
   										 }
		});
			
			// SAVE ACTION
			$('#save').click(function (){
			// JUST TO ADD A BUTTON (NEXT VER. / DEBUG)
			});
			
			// KEY SHORTCUT
			
			$(document).keydown(function(event) {

				//19 for Mac Command+S
				if (!( String.fromCharCode(event.which).toLowerCase() == 's' && event.ctrlKey) && !(event.which == 19)) return true;
			
				updateTasks();			
			
				event.preventDefault();
				return false;
			});
			 
		}); // end documentReady 
		
