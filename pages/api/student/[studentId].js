import Student from "../../../models/studentModel";

export default async function StudentIdividual(req,res){

    const {studentId} = req.query

    if(req.method === "GET"){

        const student = await Student.find({
            regNo : studentId
        })

        if(student){
            res.json(student)
        }

    }
}