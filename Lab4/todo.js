const mongoCollections = require("./mongoCollections");
const collect = mongoCollections.todoItems;
const collect2 = mongoCollections.todoItems;
const uuidd = require("uuid/v1");


let exportedMethods = {


    async getTask(id) {
        if (!id) throw "No ID provided";

        const taskcollection = await collect();
        const taskk = await taskcollection.findOne({ _id: id });
        if (taskk == null) throw `Now there is no task with that id: ${id}`;
        //if (taskk != null) throw `The Task with id: ${id} has been updated successfully`;

        return taskk;
    },


    async createTask(title, descripton) {
        if (!title || title == "") {
            throw "Title is empty"
        }
        if (!descripton || descripton == "") {
            throw "Description is empty";
        }
        const todocollection = await collect();
        const newtaskinfo = {
            _id: uuidd(),
            title: title,
            description: descripton,
            completed: false,
            completedAt: null
        }
        const insertinfo = await todocollection.insertOne(newtaskinfo);
        if (insertinfo.insertedCount == 0) {
            throw "Could not add the task";
        }
        //console.log(insertinfo);
        // console.log("========================================================================");
        const newtaskID = insertinfo.insertedId;
        const taskkk = await this.getTask(newtaskID);

        return taskkk;

    },

    async getAllTasks() {
        const alltask = await collect2();
        const collect1 = await alltask.find({}).toArray();
        return collect1;
        //var a;
    },

    async removeTask(id) {
        if (!id || id == 0) throw "Id is not provided";

        const rmtask = await collect2();
        //const rmtaskcheck = await rmtask.find({_id:id});
        //console.log(rmtaskcheck);
        const deletioninfo = await rmtask.removeOne({ _id: id });
        //console.log();

        if (deletioninfo.deletedCount === 0)
            throw `Could not deleted task with id: ${id} or did find the task`;
        else
            console.log(`Task with id: ${id} has been deleted`);
    },

    async completeTask(taskId) {
        if (!taskId || taskId == "")
            throw "Task id not provided to update";

        var date = new Date();

        const updatecollection = await collect2();

        const updatetask = await updatecollection.update(
            
                { _id: taskId },
            {
                 $set: {completed: true,
                    completedAt: date}
                    
                }
            
            
        )

if (updatetask.modifiedCount === 0) {
    throw "could not update task successfully";
}
return updatetask;
    }
    
}

module.exports = exportedMethods;
