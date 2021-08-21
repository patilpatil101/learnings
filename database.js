/***********************************************************************************************************/
/************** This documentation is written by Rohit Patil (7888226600) *********************************/
/***********************************************************************************************************/

/**
 * MongoDB
 */

 // Create a mongo schema using command line
// replication in mongodb


/**
 * Why MongoDB?
 *
 *  1. Schema less
 *  2. Structure of a single object is clear
 *  3. No complex joins
 *
 */
/***********************************************************************************************************/

/**
 * MongoDB Datatype
 *   1. String
 *   2. Boolean
 *   3. Integer
 *   4. Object  => This datatype is used for embedded documents.
 *   5. Array
 *   6. Timestamp
 *   7. Date
 */
/***********************************************************************************************************/
/***********************************************************************************************************/


/**
 * Cluster
 *
 *  Where we can deploy our database.
 *      1. Create Cluster -> free 512 MB MO Cluster
 *      2. Create Network Access -> allow from anywhere
 *      3. Create Database Access -> create users in it who will access this db and set passwords and access.
 */


/***********************************************************************************************************/
/***********************************************************************************************************/


/**
 * And | Or | Aggregate commands
 * db.collection.find({$and: [{name: 'rohit'}, {name: 'harshal'}]})
 * db.collection.find({$or: [{name: 'rohit'}, {name: 'harshal'}]})
 * db.collection.aggregate([{$group : {_id : "$by_user", num_tutorial : {$sum : 1}}}])
 *  for Aggregation
 *          1. $group
 *          2. $match
 *          3. $sort
 */
/***********************************************************************************************************/

/**
 * How to get backup of our mongoDB database or collection
 *
 *  To get specific collection backup         => mongodump --collection COLLECTION --db DB_NAME
 *  To get specific db backup                 => mongodump --dbpath DB_PATH --out BACKUP_DIRECTORY
 *  To get all dbs of specific mongo instance => mongodump --host HOST_NAME --port PORT_NUMBER
 */
/***********************************************************************************************************/

/**
 * How to restore backup data
 *
 *    1. mongorestore  => This command restores all of the data from the backup directory.
 */
/***********************************************************************************************************/

/**
 * CAP Theorem
 *   C: Consistency
 *   A: Availability
 *   P: Partition Tolarance
 */
/***********************************************************************************************************/

/**
 * How to get Status of db
 *
 * db.stats()
 *       It gives
 *         1. DB Name
 *         2. Number of Collections & Documents in DB.
 */
/***********************************************************************************************************/

/**
 * What is indexing in MongoDB ?
 *  Answer: Indexes support the efficient execution of queries in MongoDB
 *  db.collection_name.createIndex({student_name: 1})
 */
/***********************************************************************************************************/

/**
 * MYSQL = MongoDB
 *
 *    1. Table  == Collection
 *    2. Row    == Document
 *    3. Column == Field
 *    4. Join   == Embedded Documents
 *    5. Primary Key == MongoDB default id
 */
/***********************************************************************************************************/

/**
 * MongoDB Primary Key means MongoDB default id
 *
 * 12 Bytes id
 *
 *  2 bytes for process id of MongoDB server
 *  3 bytes for machine id
 *  3 bytes are simple incremental VALUE
 *  4 bytes for the current timestamp
 *
 */
/***********************************************************************************************************/

/**
 * MongoDB Sharding?
 * Defination:
 *        Sharding is a method for distributing data across multiple machines
 *        Shards are used to store data
 *        Connect to the mongos from the mongo shell and use the sh. shardCollection() method
 *
 *        sh.addShard("<replica_set>/<hostname><:port>")
 */
/***********************************************************************************************************/

/**
 * MongoDB Replication?
 * Defination:
 *        Replication provides redundancy and increases data availability with multiple copies of data on different database servers.
 *        Replication protects a database from the loss of a single server.
 *        Replication also allows you to recover from hardware failure and service interruptions.
 *
 * Why?
 *        To keep your data safe
 *        High (24*7) availability of data
 *        Disaster recovery
 *
 * How to create?
 *    mongod --port 27017 --dbpath "D:\set up\mongodb\data" --replSet rs0
 *    rs.initiate() => To initiate a new replica set
 *    rs.conf() =>     To check the replica set configuration, issue the command
 *    rs.status() =>   To check the status of replica set issue the command
 */
/***********************************************************************************************************/

/**
 * MongoDB Aggregation?
 * Defination:
 *        Aggregation basically groups the data from multiple documents
 *        & operates in many ways on those grouped data in order to return one combined result
 * e.g:
 *    db.orders.aggregate([ { $match: { status: "A" } }, { $group: { _id: "$cust_id", total: { $sum: "$amount" } } }])
 */
/***********************************************************************************************************/

/**
 * MongoDB Projection?
 * Defination:
 *        Projection means selecting only the necessary data rather than selecting whole of the data of a document.
 *        If a document has 5 fields and you need to show only 3, then select only 3 fields from them
 *        .find() 2nd parameter is {projection parameter}
 *        db.collection.find(query, projection)
 * e.g:
 *    db.mycol.find({},{"title":1,_id:0})
 */
/***********************************************************************************************************/

/**
 * MongoDB Update?
 *    db.COLLECTION_NAME.update(SELECTION_CRITERIA, UPDATED_DATA)
 * e.g:
 *   db.mycol.update({'title':'MongoDB Overview'},{$set:{'title':'New MongoDB Tutorial'}})
 */
/***********************************************************************************************************/

/**
 * MongoDB how to restrict a record?
 *      db.COLLECTION_NAME.find().limit(NUMBER)
 * e.g:
 *   db.mycol.find({},{"title":1,_id:0}).limit(2)
 */

/***********************************************************************************************************/
/**
 * VIMP
 * Question: How to make query faster?
 *
 * lean() -> tells Mongoose to skip full Mongoose document and just give you the POJO. This makes queries faster and less memory intensive
 *
 * lean() will not works with Aggregation because mongoose doesn't hydrate the result of an aggregation.
 */
/***********************************************************************************************************/

/**
 * what is exec() -> callback where will use then and catch for getting success and response from query
 */

/***********************************************************************************************************/


/************ $unwind ****** $unwind ********** $unwind ********** $unwind *********** $unwind ******************/
/************ $unwind ****** $unwind ********** $unwind ********** $unwind *********** $unwind ******************/
/************ $unwind ****** $unwind ********** $unwind ********** $unwind *********** $unwind ******************/




/******** How to write queries using profiler ****** How to write queries using profiler ********** How to write queries using profiler ****************/
/******** How to write queries using profiler ****** How to write queries using profiler ********** How to write queries using profiler ****************/
/******** How to write queries using profiler ****** How to write queries using profiler ********** How to write queries using profiler ****************/
