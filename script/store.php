<?php require_once '../lib/medoo.php'; $taskdb = new medoo('../res/task.sqlite'); 

$tasks = $_POST['arr'];


// Use medoo to delete and RESTORE all data (fastest way)

	$taskdb->delete("tasks", "");
	
	$ptasks = json_decode($tasks);
	
		foreach ($ptasks as $ptask){
			$taskdb->insert("tasks",  [
				"name" => $ptask->name,
				"date" => $ptask->date,
				"type" => $ptask->type,
				"sorting" => $ptask->sorting,
				"id" => $ptask->id
			]);
			
			}
	
	
echo "DONE!"
	
			

	
?>