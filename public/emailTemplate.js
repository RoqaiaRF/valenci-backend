const template = (info) => {
  let emailTemplate = 

  `<!DOCTYPE html>
  <html>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
      <title>Email Template</title>
      <style>
        p strong {
          text-decoration: underline;
          color: rgb(60, 60, 60);
        }
        body {
          direction: rtl;
          background-color: #f6f6f6;
          font-family: sans-serif;
          /* -webkit-font-smoothing: antialiased; */
          padding-inline: 7%;
        }
        table {
          width: 100%;
        }
        td {
          border: 1px dashed gray;
          padding: 5px;
          border-radius: 3px 0px 0px 3px;
          border-bottom: none;
          color: gray;
        }
        .key {
          border-radius: 0px 3px 3px 0px;
          font-weight: bold;
          border-left: none;
          color: black;
        }
        .last td {
          border-bottom: 1px dashed gray;
        }
        .footer {
          clear: both;
          margin-top: 10px;
          text-align: center;
          width: 100%;
        }
        .footer td,
        .footer p,
        .footer span,
        .footer a {
          color: #999999;
          font-size: 12px;
          text-align: center;
        }
        .btn {
          box-sizing: border-box;
          width: 100%;
        }
        .btn > tbody > tr > td {
          padding-bottom: 15px;
        }
        .btn table {
          width: auto;
        }
        .btn table td {
          background-color: #ffffff;
          border-radius: 5px;
          border: none;
          text-align: center;
        }
        .content-block {
          border: none;
        }
        .btn a {
          background-color: #ffffff;
          border: solid 1px #3498db;
          border-radius: 5px;
          box-sizing: border-box;
          color: #3498db;
          cursor: pointer;
          display: inline-block;
          font-size: 14px;
          font-weight: bold;
          margin: 0;
          padding: 12px 25px;
          text-decoration: none;
          text-transform: capitalize;
        }
  
        .btn-primary table td {
          background-color: #3498db;
        }
  
        .btn-primary a {
          background-color: #3498db;
          border-color: #3498db;
          color: #ffffff;
        }
        .powered-by a {
          text-decoration: none;
        }
  
        hr {
          border: 0;
          border-bottom: 1px solid #f6f6f6;
          margin: 20px 0;
        }
      </style>
    </head>
    <body>
      <p><strong> ?????????????? ???????????? </strong></p>
  
      <table
        role="presentation"
        border="0"
        cellpadding="0"
        cellspacing="0"
        class="body"
      >
        <tbody>
          <tr>
            <td class="key">??????????</td>
            <td> ${
              info.first_name +
              " " +
              info.second_name +
              " " +
              info.third_name +
              " " +
              info.last_name
            }</td>
          </tr>
          <tr>
            <td class="key">?????????? ????????????</td>
            <td> ${info.national_id}</td>
          </tr>
          <tr>
          <td class="key">?????? ?????????????? </td>
          <td> ${info.number_doc}</td>
        </tr>
          <tr>
            <td class="key">?????? ??????????????</td>
            <td>  ${info.type_doc}</td>
          </tr>
          <tr class="last">
            <td class="key">??????????</td>
            <td> ${info.gender}</td>
          </tr>
          <tr class="last">
          <td class="key">?????? ???????????? </td>
          <td>  ${info.phone}</td>
          </tr>
          <tr class="last">
          <td class="key">????????????????</td>
          <td> ${info.province}</td>
          </tr>
          <tr class="last">
          <td class="key"> ?????? ?????????????? </td>
          <td> ${info.region}</td>
          </tr>
          <tr class="last">
            <td class="key">?????? ???????????? </td>
            <td> ${info.street}</td>
          </tr>

          <tr class="last">
            <td class="key">???????? ???????? </td>
            <td> ${info.landmark}</td>
          </tr>

          <tr class="last">
            <td class="key">?????? ???????????? </td>
            <td> ${info.house_number}</td>
          </tr>

          <tr class="last">
            <td class="key">?????? ???????????? </td>
            <td> ${info.store_name}</td>
          </tr>


          <tr class="last">
            <td class="key">?????? ???????????? </td>
            <td> ${info.employee_name}</td>
          </tr>


          <tr class="last">
            <td class="key">?????? ?????????? :</td>
            <td> ${info.employer}</td>
          </tr>


          <tr class="last">
            <td class="key">??????????????</td>
            <td> ${info.job}</td>
          </tr>


          <tr class="last">
            <td class="key"> ?????? ???????? ?????????? </td>
            <td> ${info.phone_work}</td>
          </tr>

          <tr class="last">
            <td class="key">???????? ?????????? ???????????? </td>
            <td> ${info.monthly_income_rate}</td>
          </tr>

          <tr class="last">
            <td class="key">???????? ?????? ?????? </td>
            <td> ${info.other_source_of_income}</td>
          </tr>

          <tr class="last">
            <td class="key">???????? ?????????? ?????????? </td>
            <td> ${info.other_income_value}</td>
          </tr>


        
          <tr class="last">
          <td class="key">???????? ?????????????? </td>
          <td> ${info.is_daman}</td>
        </tr>


        <tr class="last">
        <td class="key"> ?????? ?????????????? </td>
        <td> ${info.vehicle_type}</td>
       </tr>


      <tr class="last">
        <td class="key">???????? ?????????????? </td>
        <td> ${info.vehicle_situation}</td>
       </tr>


    <tr class="last">
      <td class="key">???????????? ???????????? </td>
      <td> ${info.first_payment}</td>
     </tr>


        <tr class="last">
        <td class="key">???????? ?????????????? </td>
        <td> ${info.installment_period}</td>
      </tr>


      <tr class="last">
      <td class="key">?????????? ????????????</td>
      <td>  ${
        info.first_name_kafeel +
        " " +
        info.second_name_kafeel +
        " " +
        info.third_name_kafeel +
        " " +
        info.last_name_kafeel
      }</td>
      </tr>


      <tr class="last">
      <td class="key">?????????? ????????????  ????????????</td>
      <td> ${info.national_id_kafeel}</td>
      </tr>


      <tr class="last">
      <td class="key">?????? ??????????????  ????????????</td>
      <td> ${info.type_doc_kafeel}</td>
    </tr>

    <tr class="last">
    <td class="key">?????? ?????????????? ????????????</td>
    <td> ${info.number_doc_kafeel}</td>
  </tr>

  <tr class="last">
  <td class="key">?????????? ????????????</td>
  <td> ${info.gender_kafeel}</td>
</tr>

<tr class="last">
<td class="key">?????? ???????????? ????????????</td>
<td> ${info.phone_kafeel}</td>
</tr>

<tr class="last">
<td class="key">???????????????? ????????????</td>
<td> ${info.region_kafeel}</td>
</tr>

<tr class="last">
<td class="key">?????? ??????????????  ????????????</td>
<td> ${info.region_kafeel}</td>
</tr>

<tr class="last">
<td class="key"> ?????? ???????????? ????????????</td>
<td> ${info.street_kafeel}</td>
</tr>

<tr class="last">
<td class="key">???????? ???????? ????????????</td>
<td> ${info.landmark_kafeel}</td>
</tr>

<tr class="last">
<td class="key">?????? ????????????  ????????????</td>
<td> ${info.house_number_kafeel}</td>
</tr>

<tr class="last">
<td class="key">?????? ??????????  ????????????</td>
<td> ${info.type_of_employment_kafeel}</td>
</tr>

<tr class="last">
<td class="key">?????? ??????????  ????????????</td>
<td> ${info.employer_kafeel}</td>
</tr>

<tr class="last">
<td class="key">?????????????? ????????????</td>
<td> ${info.job_kafeel}</td>
</tr>

<tr class="last">
<td class="key">?????? ???????? ??????????  ????????????</td>
<td> ${info.phone_work_kafeel}</td>
</tr>


<tr class="last">
<td class="key">???????? ?????????? ????????????  ????????????</td>
<td> ${info.monthly_income_rate_kafeel}</td>
</tr>

<tr class="last">
<td class="key">???????? ?????? ?????? ????????????</td>
<td> ${info.other_source_of_income_kafeel}</td>
</tr>

<tr class="last">
<td class="key">???????? ?????????? ?????????? ????????????</td>
<td> ${info.other_income_value_kafeel}</td>
</tr>

<tr class="last">
<td class="key">???????? ?????????????? </td>
<td> ${info.is_daman_kafeel}</td>
</tr>
        </tbody>
      </table>
      <div class="footer">
        <table role="presentation" border="0" cellpadding="0" cellspacing="0">
          <tr>
            <td class="content-block">
              <span class="apple-link">Company Inc, Amman Jordan</span>
              <br />
              Don't like these emails?
              <a href="http://fareza.net">Unsubscribe</a>.
            </td>
          </tr>
          <tr>
            <td class="content-block powered-by">
              Powered by <a href="http://fareza.net">Fareza</a>.
            </td>
          </tr>
        </table>
      </div>
    </body>
  </html>
  `

  return emailTemplate
    }


  module.exports = template