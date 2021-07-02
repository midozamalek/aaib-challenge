const fs = require('fs').promises;
var path = require('path');
const filePathWithServices = path.join(__dirname, 'data','reports.json');
const filePath = filePathWithServices.replace('\\Services','');

class ReportService
{

static saveReportData(data) {
    const stringifyData = JSON.stringify(data)
    return fs.writeFile(filePath, stringifyData)
  }

 static getReports() {
    return fs.readFile(filePath);
  }

}

module.exports = ReportService
