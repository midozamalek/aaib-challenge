const { json } = require('express');
const Response = require('../utils/jsonResponse')
const fs = require('fs').promises;
const ReportService = require('../Services/report.service')
class ReportController {

  static async GetTickets(req, res) {

    await ReportService.getReports()
      .then((data) => {

        //no data found
        if (data == null || data.length < 1) {
          return res.status(404).send(
            Response({ isSuccess: false, message: "No results were found" })
          );
        }
        const jsonData = JSON.parse(data);

        // get only non closed report
        jsonData.elements = FilterClosedReports(jsonData.elements,'Closed');

        //update size after filtering
        jsonData.size = jsonData.elements.length;

        res.status(200).send(Response({ isSuccess: true, data: jsonData }))
      })
      .catch((message) => {
        res.status(400).send(Response({ isSuccess: false, message }))
      })

  }



  static async UpdateTicket(req, res) {

    const id = req.params.id;
    //get the update data
    const reportData = req.body;

    await ReportService.getReports()
      .then(async function(data){

        const jsonData = JSON.parse(data);
        const reports = jsonData.elements;

        //find rport to be updated
        const findExist = reports.find(report => report.id === id);
        if (!findExist) {
          return res.status(409).send(Response({ isSuccess: false, message: 'report not exist' }));
        }

        //update state
        findExist.state = reportData.ticketState;

        //filter the report
        const updatedReports = reports.filter(report => report.id !== id)

        //push the updated data
        updatedReports.push(findExist)

        //update json data
        jsonData.elements = updatedReports;

        //finally save it
        await ReportService.saveReportData(jsonData);

        res.status(200).send(Response({ isSuccess: true, data:  FilterClosedReports(updatedReports,'Closed') }))
      })
      .catch((message) => {
        res.status(400).send(Response({ isSuccess: false, message }))
      })

  }




}

 function FilterClosedReports(reports,state)
  {
      return reports.filter(report => report.state !== state);
  }



module.exports = ReportController
