import { Injectable } from '@angular/core';
import { Workbook } from 'exceljs/dist/exceljs.min.js'
import * as fs from 'file-saver';

@Injectable({
  providedIn: 'root'
})
export class CustomizedExcelService {

  reportTitle: string = "";
  reportHeader!: any[];
  reportData: any[] = [];

  constructor() { }

  setReportData(Data, Title, HeadingData) {
    this.reportHeader = HeadingData;
    this.reportTitle = Title;
    this.reportData = Data;
    this.finalizeReport();
  }

  finalizeReport() {
    let workbook = new Workbook();
    let worksheet = workbook.addWorksheet('Report');
    let titleRow = worksheet.addRow([this.reportTitle.replace(/_/g, " ")]);
    // Set font, size and style in title row.
    titleRow.font = { name: 'Calibri', family: 4, size: 12, bold: true };
    titleRow.alignment = {
      horizontal: 'left',
      vertical: 'middle'
    }

    // Blank Row
    worksheet.addRow([]);

    //Add Header Row
    let headerRow = worksheet.addRow(this.reportHeader);
    headerRow.height = 25;

    // Cell Style : Fill and Border
    headerRow.eachCell((cell, number) => {
      cell.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: '002f353a' },
        bgColor: { argb: '002f353a' }
      }
      cell.font = { name: 'Calibri', size: 12, color: { argb: '00ffffff' }, bold: true };
      cell.alignment = {
        horizontal: 'center',
        vertical: 'middle'
      };
      cell.border = { top: { style: 'thin', color: { argb: '002f353a' } }, left: { style: 'thin', color: { argb: '00b4c6e7' } }, bottom: { style: 'thick', color: { argb: '0020a8d8' } }, right: { style: 'thin', color: { argb: '00b4c6e7' } } }
    });

    // Add Data and Conditional Formatting
    this.reportData.forEach(d => {
      let row = worksheet.addRow(Object.values(d));
      row.eachCell((cell, index) => {
        cell.font = { name: 'Calibri', size: 10, bold: true };
        cell.alignment = {
          horizontal: 'center',
          vertical: 'middle'
        };
      });
      row.height = 20;
    }
    );

    worksheet.columns.forEach(function (column: any) {
      var dataMax = 0;
      column.eachCell({ includeEmpty: true }, function (cell) {
        var columnLength = (cell.value == undefined || cell.value == null) ? 0 : cell.value.toString().length;
        if (columnLength > dataMax) {
          dataMax = columnLength;
        }
      })
      if (dataMax > 50) {
        dataMax = 50;
      }
      console.log("DataMax : ", dataMax)
      column.width = dataMax < 10 ? dataMax + 7 : dataMax + 7;
    });

    workbook.xlsx.writeBuffer().then((data) => {
      let blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      fs.saveAs(blob, `${this.reportTitle}.xlsx`);
    });
  }

}
