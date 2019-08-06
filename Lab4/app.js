const todoItems = require("./todo");
const connection = require("./mongoConnection");

async function main(){
    const createdTask1 = await todoItems.createTask("Ponder Dinosaurs", "Has Anyone Really Been Far Even as Decided to Use Even Go Want to do Look More Like?").catch(err =>{
        console.log("No creation directory provided "+err);
    });
    console.log(createdTask1);


    const createdTask2 = await todoItems.createTask("Play Pokemon with Twitch TV", "Should we revive Helix?").catch(err =>{
        console.log("No such file or directory provided "+err);
    });
    console.log(createdTask2);

    const alltasks = await todoItems.getAllTasks().catch(err =>{
        console.log("ERROR");
    });
    console.log("These are all tasks:");
    //console.log(createdTask1._id);
    console.log(alltasks);



    // REMOVE FUNCTION=====================================================

    const removeTask = await todoItems.removeTask(createdTask1._id).catch(err =>{
        console.log("No suchfile or directory provided")
    });
    try{
        return await todoItems.getTask(createdTask1._id);
    }catch(error){
        console.log(error);
    }
    console.log("After deletion:")
    const alltaskss = await todoItems.getAllTasks();
    console.log(alltaskss);

    //Update function=========================================================
    const task = await todoItems.getTask(createdTask2._id);
    
    const finishedTask = await todoItems.completeTask(task._id).catch(err =>{
        console.log("No such file or directory provided");
    });
    console.log("After Updation tasks are:" );
    const alltasksss = await todoItems.getAllTasks();
    console.log(alltasksss);

    process.exit();
}

main().catch(error => {
    console.log(error);
});