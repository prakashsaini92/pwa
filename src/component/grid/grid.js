import React, { useState, useEffect } from "react";
import * as XLSX from "xlsx";
import dateFormat from 'dateformat';
import { data } from "./data";

function Grid() {
  const [items, setItems] = useState([]);
  const [list, setList] = useState([]);

  useEffect(() => {
    if(items.length !== 0) {
      (async () => {
        const result = await excelDataFormat(items);
        setList(result);
      })();
    }
  }, [items]);

  const readExcel = (file) => {
    const promise = new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file);

      fileReader.onload = (e) => {
        const bufferArray = e.target.result;

        const wb = XLSX.read(bufferArray, { type: "buffer", cellDates: true });

        const wsname = wb.SheetNames[0];

        const ws = wb.Sheets[wsname];

        const data = XLSX.utils.sheet_to_json(ws);

        resolve(data);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });

    promise.then((d) => {
      setItems(d);
    });
  };

  return (
    <div>
      <input
        type="file"
        onChange={(e) => {
          const file = e.target.files[0];
          readExcel(file);
        }}
      />

      <table className="table container">
        <thead>
          <tr>
           <th scope="col">No.</th>
            <th scope="col">Date</th>
            <th scope="col">Cr/dr</th>
            <th scope="col">Particulars</th>
            <th scope="col">VchType</th>
            <th scope="col">VchNo</th>
            <th scope="col">Debit</th>
            <th scope="col">Credit</th>
          </tr>
        </thead>
        <tbody>
          {list?.items?.map((item, index) => (
            <tr>
             <td>{index + 1}</td>
            <td>{item.date}</td>
            <td>{item.crdr}</td>
            <td>{item.particulars}</td>
            <td>{item.vchType}</td>
            <td>{item.vchNo}</td>
            <td>{item.debit}</td>
            <td>{item.credit}</td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Grid;

const excelDataFormat = async (args) => {
 


  return new Promise((resolve, reject) => {
    try {
      let companyName = Object.keys(args[0])[0];
      let clientName = Object.values(args[0])[0];
      let accountType = Object.values(args[1])[0];
      let headerType = Object.values(args[5]);
     
        let date = headerType[0].replace(" ", "").toLowerCase();
        let crdr = "Cr/Dr";
        let particulars =  headerType[1].replace(" ", "").toLowerCase();
        let vchType = headerType[2].replace(" ", "").toLowerCase();
        let vchNo = headerType[3].replace(" ", "").toLowerCase();
        let debit = headerType[4].replace(" ", "").toLowerCase();
        let credit = headerType[5].replace(" ", "").toLowerCase();

     
      const listData = args.slice(6, -3);
      let results = [];
      listData.forEach(element => {
          let value  = Object.values(element)[0]
          value = dateFormat(value, "dd/mm/yyyy");
          results.push({
          date: value,
          crdr: element.__EMPTY ? element.__EMPTY : null,
          particulars: element.__EMPTY_1 ? element.__EMPTY_1 : null,
          vchType: element.__EMPTY_2 ? element.__EMPTY_2 : null,
          vchNo: element.__EMPTY_3 ? element.__EMPTY_3 : null,
          debit: element.__EMPTY_4 ? element.__EMPTY_4 : null,
          credit: element.__EMPTY_5 ? element.__EMPTY_5 : null,
        })
      });
      let updateRecords = { 
         headerData : {companyName, clientName, accountType },
         items: results
        }
     resolve(updateRecords);
    }catch(err){
      reject(err)
    }
  });
};
