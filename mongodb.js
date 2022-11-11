import { MongoClient, ObjectId } from "mongodb";
import {uri} from "./credentials.js"
const Client = new MongoClient(uri)
const db = Client.db("sample_supplies")
const suppliesCollections = db.collection("supplies")
const newTools = {
    toolName: 'Hammer',
    weight: 124,
}

const results = await suppliesCollections.insertOne(newTools)
console.log("Results of Insert", results)
