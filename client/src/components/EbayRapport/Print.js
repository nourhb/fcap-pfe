/* eslint-disable */
import React, { useEffect, useState, useRef } from 'react';
import { Modal, Button } from "react-bootstrap";
import axios from "axios";
import './printdesign.css'
import image from '../../assets/images/logo.png'


function Printmodal(props) {
  const [record, setRecord] = useState([]);

  const loadRapport = async () => {

    await axios.get(`http://localhost:5000/api/v1/ebay/print/${props.data}`).then((result) => {

      console.log(result.data)
      setRecord(result.data);
    });
  };
  useEffect(() => {
    loadRapport();
  }, []);

  function printDivInvoice() {
    var divContents = document.getElementById("INVOICE").innerHTML; var a = window.open('', '', 'height=1000, width=1000');
    a.document.write('<html>');
    a.document.write("<body> <h1>Div contents are <br>");
    a.document.write(divContents);
    a.document.write('</body></html>');
    a.document.close();
    a.print();
  }
  return (
    <div>
      <Modal
        {...props}

        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Print user data
          </Modal.Title>
        </Modal.Header>
        <Modal.Body >

          <div id="INVOICE" >
            <table border="0" cellPadding="0" cellSpacing="1" width="919" style={{ borderCollapse: 'collapse', tableLayout: 'fixed', width: '690pt' }}>
              {record.length > 0 && record.map((name, index) => (

                <tbody key={index}>
                  <tr height={"26"} style={{ height: '19.5pt' }}>
                    <td rowSpan="2" height={"81"} width={"81"} style={{ height: '60.75pt', width: '61pt' }} align="left" valign="top">
                      <span style={{ position: 'absolute', marginLeft: '13px', marginTop: '30px', width: '247px', height: '144px' }}>
                        <img src={image} width="247" height="144" />

                      </span><span>
                        <table cellPadding="0" cellSpacing="0" >
                          <tbody style={{ msoHeightSource: 'userset' }}><tr>
                            <td rowSpan="2" height="81" className="xl104" width="81" style={{
                              height: '60.75pt',
                              width: '61pt'
                            }}><a name="Print_Area"></a></td>
                          </tr>
                          </tbody></table>
                      </span></td>

                    <td colSpan="3" class="3" width="424" style={{ width: '319pt' }}><span style={{ msoSpacerun: 'yes' }}>&nbsp; </span>Sale Invoice</td>
                    <td width={"79"} class="xl84" style={{ width: '59pt' }}></td>
                    <td width={"74"} class="xl65" style={{ width: '56pt' }}></td>
                    <td width={"87"} class="xl65" style={{ width: '65pt' }}></td>
                    <td width={"87"} class="xl65" style={{ width: '65pt' }}></td>
                    <td width={"87"} class="xl65" style={{ width: '65pt' }}></td>
                  </tr>
                  <tr height={"55"} style={{ msoHeightSource: 'userset', height: '41.25pt' }}>
                    <td height="55" className="xl67" width="201" style={{ height: '41.25pt', width: '151pt' }}></td>
                    <td className="xl67" width="125" style={{ width: '94pt' }}></td>
                    <td colSpan="3" className='xl105' rowSpan="3" width={251} style={{ width: '189pt' }}>First
                      Choice Auto Parts LTD<br />
                      Unit 1 Green Street Motors<br />
                      Albert Road<br />
                      Darlington , Durham<br />
                      DL1 2PD<br />
                      United Kingdom<br />
                      07768705663<br />
                      first.choice.auto.parts.ltd@gmail.com
                      https://www.ebay.co.uk/str/onlineautospares</td>
                    <td className="xl66"></td>
                    <td className="xl66"></td>
                    <td className="xl66"></td>
                  </tr>
                  <tr height="40" style={{ msoHeightSource: 'userset', height: '30.0pt' }}>
                    <td height="40" className="xl68" width="81" style={{ height: '30.0pt', width: '61pt' }}>FROM</td>
                    <td width={201} className="xl69" style={{ width: '151pt' }}></td>
                    <td width={125} className="xl69" style={{ width: '94pt' }}></td>
                    <td className="xl66"></td>
                    <td className="xl66"></td>
                    <td className="xl66"></td>
                  </tr>
                  <tr height="66" style={{ msoHeightSource: 'userset', height: '49.5pt' }}>
                    <td height="66" className="xl70" style={{ height: '49.5pt' }}>Bill To</td>
                    <td className="xl71" width="201" style={{ width: '151pt' }}></td>
                    <td className="xl71" width="125" style={{ width: '94pt' }}></td>
                    <td className="xl66"></td>
                    <td className="xl66"></td>
                    <td className="xl66"></td>
                  </tr>
                  <tr height="27" style={{ msoHeightSource: 'userset', height: '20.25p' }}>
                    <td height="27" className="xl72" style={{ height: '20.25pt' }}>Bill To</td>
                    <td width={201} className="xl71" style={{ width: '151pt' }}></td>
                    <td width={125} className="xl71" style={{ width: '94pt' }}></td>
                    <td className="xl66"></td>
                    <td className="xl66"></td>
                    <td width="74" className="xl95" style={{ width: '56pt' }}></td>
                    <td className="xl66"></td>
                    <td className="xl73"></td>
                    <td className="xl66"></td>
                  </tr>
                  <tr height="10" className="xl66" style={{ msoHeightSource: 'userset', height: '7.5pt' }}>
                    <td height="10" className="xl96" style={{ height: '7.5pt' }}></td>
                    <td width="201" className="xl71" style={{ width: '151pt' }}></td>
                    <td width="125" className="xl71" style={{ width: '94pt' }}></td>
                    <td className="xl66"></td>
                    <td className="xl66"></td>
                    <td width="74" className="xl95" style={{ width: '56pt' }}></td>
                    <td className="xl66"></td>
                    <td className="xl73"></td>
                    <td className="xl66"></td>
                  </tr>
                  <tr height="21" className="xl66" style={{ msoHeightSource: 'userset', height: '15.75pt' }}>
                    <td height="21" className="xl74" style={{ height: '15.75pt' }}>Name:</td>
                    <td className="xl75" >{name['Buyer name']}</td>
                    <td className="xl76"></td>
                    <td className="xl102" width="98" style={{ width: '74pt' }}>Item Number</td>
                    <td colSpan="2" className="xl106" width="153" style={{ borderLeft: 'none', width: '115pt' }}>	{name['Item number']}</td>
                    <td className="xl92"></td>
                    <td className="xl92"></td>
                    <td className="xl92"></td>
                  </tr>
                  <tr className="xl92" height="21" style={{ msoHeightSource: 'userset', height: '15.75pt' }}>
                    <td height="21" className="xl77" style={{ height: '15.75pt' }}>First Line:</td>
                    <td className="xl75">{name['Post to address 1']}</td>
                    <td className="xl71" width="125" style={{ width: '94pt' }}></td>
                    <td className="xl102" width="98" style={{ borderTop: 'none', width: '74pt' }}>Date</td>
                    <td colSpan="2" className="xl107" width="153" style={{ borderLeft: 'none', width: '115pt' }}>{name['Sale date']}</td>
                    <td className="xl92"></td>
                    <td className="xl92"></td>
                    <td className="xl92"></td>
                  </tr>
                  <tr className="xl92" height="21" style={{ msoHeightSource: 'userset', height: '15.75pt' }}>
                    <td height="21" className="xl77" style={{ height: '15.75pt' }}>City:</td>
                    <td className="xl71" width="201" style={{ width: '151pt' }}>{name['Post to city']}</td>
                    <td className="xl71" width="125" style={{ width: '94pt' }}></td>
                    <td className="xl102" width="98" style={{ borderTop: 'none', width: '74pt' }}>Sales Record</td>
                    <td colSpan="2" className="xl108" style={{ borderLeft: 'none' }}>{name['Sales record']}</td>
                    <td className="xl92"></td>
                    <td className="xl92"></td>
                    <td className="xl92"></td>
                  </tr>
                  <tr className="xl92" height="22" style={{ msoHeightSource: 'userset', height: '16.5pt' }}>
                    <td height="22" className="xl77" style={{ height: '16.5pt' }}>Province:</td>
                    <td className="xl71" width="201" style={{ width: '151pt' }}>{name['Post to county']}</td>
                    <td className="xl71" width="125" style={{ width: '94pt' }}></td>
                    <td className="xl102" width="98" style={{ borderTop: 'none', width: '74pt' }}>Custom Label</td>
                    <td colSpan="2" className="xl110" style={{ borderRight: '1.0pt solid black', borderLeft: 'none' }}>{name['Custom label']}</td>
                    <td className="xl92"></td>
                    <td className="xl92"></td>
                    <td className="xl92"></td>
                  </tr>
                  <tr className="xl92" height="24" style={{ msoHeightSource: 'userset', height: '18.0pt' }}>
                    <td height="24" className="xl77" style={{ height: '18.0pt' }}>Post Code:</td>
                    <td className="xl71" width="201" style={{ width: '151pt' }}>{name['Post to postcode']}</td>
                    <td className="xl71" width="125" style={{ width: '94pt' }}></td>
                    <td colSpan="3" className="xl93"></td>
                    <td className="xl92"></td>
                    <td className="xl92"></td>
                    <td className="xl92"><span style={{ msoSpacerun: 'yes' }}>&nbsp;</span></td>
                  </tr>
                  <tr className="xl92" height="24" style={{ msoHeightSource: 'userset', height: '18.0pt' }}>
                    <td height="24" className="xl77" style={{ height: '18.0pt' }}>Country:</td>
                    <td className="xl71" width="201" style={{ width: '151pt' }}>{name['Post to country']}</td>
                    <td className="xl71" width="125" style={{ width: '94pt' }}></td>
                    <td colSpan="3" className="xl93"></td>
                    <td className="xl92"></td>
                    <td className="xl92"></td>
                    <td className="xl92"></td>
                  </tr>
                  <tr className="xl92" height="24" style={{ msoHeightSource: 'userset', height: '18.0pt' }}>
                    <td height="24" className="xl77" style={{ height: '18.0pt' }}>Phone:</td>
                    <td className="xl78" width="201" style={{ width: '151pt' }}>{name['Post to phone']}</td>
                    <td className="xl71" width="125" style={{ width: '94pt' }}></td>
                    <td className="xl93"></td>
                    <td className="xl93"></td>
                    <td className="xl94"></td>
                    <td className="xl92"></td>
                    <td className="xl92"></td>
                    <td className="xl92"></td>
                  </tr>
                  <tr className="xl92" height="24" style={{ msoHeightSource: 'userset', height: '18.0pt' }}>
                    <td height="24" className="xl77" style={{ height: '18.0pt' }}>Email:</td>
                    <td className="xl79" colSpan="2" style={{ msoIgnore: 'colspan', }}>{name['Buyer email']}</td>
                    <td className="xl93"></td>
                    <td className="xl93"></td>
                    <td className="xl94"></td>
                    <td className="xl92"></td>
                    <td className="xl92"></td>
                    <td className="xl92"></td>
                  </tr>
                  <tr height="21" style={{ msoHeightSource: 'userset', height: '15.95pt' }}>
                    <td height="21" className="xl71" width="81" style={{ height: '15.95pt', width: '61pt' }}></td>
                    <td className="xl71" width="201" style={{ width: '151pt' }}></td>
                    <td className="xl71" width="125" style={{ width: '94pt' }}></td>
                    <td colSpan="3" className="xl71" width="251" style={{ width: '189pt' }}></td>
                    <td className="xl66"></td>
                    <td className="xl66"></td>
                    <td className="xl66"></td>
                  </tr>
                  <tr height="40" style={{ msoHeightSource: 'userset', height: '30.0pt' }}>
                    <td height="40" className="xl88" style={{ height: '30.0pt' }}>QTY</td>
                    <td colSpan="4" className="xl89" width="503" style={{ borderLeft: 'none', width: '378pt' }}>Description</td>
                    <td className="xl89" width="74" style={{ borderLeft: 'none', width: '56pt' }}>Price</td>
                    <td className="xl66"></td>
                    <td className="xl66"></td>
                    <td className="xl66"></td>
                  </tr>
                  <tr className="xl80" height="40" style={{ msoHeightSource: 'userset', height: '30.0pt' }}>
                    <td height={"40px"} className="xl86" style={{ height: '30.0pt', borderTop: 'none' }}>{name['Quantity']}</td>
                    <td colSpan={"4px"} className="xl114" width={"503px"} style={{ borderLeft: 'none', width: '378pt' }}>{name['Item title']}</td>
                    <td className="xl85" style={{ msoHeightSource: 'userset', borderTop: 'none', borderLeft: 'none' }}>
                      <span style={{ msoSpacerun: 'yes', }}>&nbsp;</span>£<span style={{ msoSpacerun: 'yes', }}>&nbsp;&nbsp;&nbsp;&nbsp;
                      </span>{name['Sold for']}</td>
                    <td className="xl80"></td>
                    <td className="xl80"></td>
                    <td className="xl80"></td>
                  </tr>
                  <tr height={"40px"} style={{ msoHeightSource: 'userset', height: '30.0pt' }}>
                    <td height={"40px"} className="xl83" style={{ height: '30.0pt', borderTop: 'none' }}>&nbsp;</td>
                    <td colSpan={"4px"} className="xl86" style={{ borderLeft: 'none' }}>&nbsp;</td>
                    <td className="xl87" style={{ borderTop: 'none', borderLeft: 'none' }}>&nbsp;</td>
                    <td className="xl66"></td>
                    <td className="xl66"></td>
                    <td className="xl66"></td>
                  </tr>
                  <tr height={"34px"} style={{ msoHeightSource: 'userset', height: '25.5pt' }}>
                    <td height={"34px"} className="xl97" style={{ height: '25.5pt', borderTop: 'none' }}>&nbsp;</td>
                    <td colSpan={"4px"} className="xl109">&nbsp;</td>
                    <td className="xl90" style={{ borderTop: 'none' }}>&nbsp;</td >
                    <td className="xl66"></td>
                    <td className="xl66"></td>
                    <td className="xl66"></td>
                  </tr >
                  <tr height={"35px"} style={{ msoHeightSource: 'userset', height: '26.25pt' }}>
                    <td height={"35px"} className="xl71" width={"81px"} style={{ height: '26.25pt', width: '61pt' }}></td>
                    <td colSpan={"4px"} className="xl113"></td>
                    <td className="xl98">&nbsp;</td>
                    <td className="xl66"></td>
                    <td className="xl66"></td>
                    <td className="xl66"></td>
                  </tr>
                  <tr height={"74px"} style={{ msoHeightSource: 'userset', height: '55.5pt' }}>
                    <td height={"74px"} className="xl71" width={"81px"} style={{ height: '55.5pt', width: '61pt' }}></td>
                    <td className="xl71" width={"201px"} style={{ width: '151pt' }}></td>
                    <td className="xl81" width={"125px"} style={{ width: '94pt' }}></td>
                    <td className="xl76"></td>
                    <td className="xl76"></td>
                    <td className="xl91">&nbsp;</td>
                    <td className="xl66"></td>
                    <td className="xl66"></td>
                    <td className="xl66"></td>
                  </tr>
                  <tr className="xl80" height={"31px"} style={{ msoHeightSource: 'userset', height: '23.25pt' }}>
                    <td colSpan={"2px"} height={"31px"} className="xl81" width={"282px"} style={{ height: '23.25pt', width: '212pt' }}></td>
                    <td className="xl81" width={"125px"} style={{ width: '94pt' }}></td>
                    <td className="xl80"></td>
                    <td className="xl101">Total</td>
                    <td className="xl103" style={{ borderTop: 'none', borderLeft: 'none' }}><span style={{ msoSpacerun: 'yes' }}>&nbsp;</span>£<span >&nbsp;&nbsp;&nbsp;
                    </span>{name['Sold for']} </td>
                    <td className="xl80"></td>
                    <td className="xl80"></td>
                    <td className="xl80"></td>
                  </tr >
                  <tr className="xl80" height={"31px"} style={{ msoHeightSource: 'userset', height: "23.25pt" }}>
                    <td height={"31px"} className="xl81" width={"81px"} style={{ height: '23.25pt', width: '61pt' }}></td>
                    <td className="xl81" width={"201px"} style={{ width: '151pt' }}></td>
                    <td className="xl81" width={"125px"} style={{ width: '94pt' }}></td>
                    <td className="xl80"></td>
                    <td className="xl99"></td>
                    <td className="xl100"></td>
                    <td className="xl80"></td>
                    <td className="xl80"></td>
                    <td className="xl80"></td>
                  </tr>
                  <tr height={"24px"} style={{ msoHeightSource: 'userset', height: "18.0pt" }}>
                    <td colSpan={"6px"} rowSpan={"8px"} height={"177px"} className="xl112" width={"658px"} style={{ height: '133.35pt', width: '495pt' }}>
                      VAT Registration Number: GB 392316003<br />
                      This invoice was issued under the global accounting scheme, and VAT must
                      not be reclaimed on any amounts on this invoice.<span style={{ msoSpacerun: 'yes' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></td>
                    <td className="xl66"></td>
                    <td className="xl66"></td>
                    <td className="xl66"></td>
                  </tr>
                  <tr height={"24px"} style={{ msoHeightSource: 'userset', height: "18.0pt" }} >
                    <td height={"24px"} className="xl66" style={{ height: "18.0pt" }} ></td>
                    <td className="xl66"></td>
                    <td className="xl66"></td>
                  </tr>
                  <tr height={"24px"} tyle={{ msoHeightSource: 'userset', height: "18.0pt" }}>
                    <td height={"24px"} className="xl66" tyle={{ height: "18.0pt" }}></td>
                    <td className="xl66"></td>
                    <td className="xl66"></td>
                  </tr>
                  <tr height="24" style={{ msoHeightSource: 'userset', height: '18.0pt' }}>
                    <td height={"24 px"} className="xl66" style={{ height: "18.0pt" }}></td>
                    <td className="xl66"></td>
                    <td className="xl66"></td>
                  </tr>
                  <tr height={"15px"} style={{ msoHeightSource: 'userset', height: '11.25pt' }}>
                    <td height={"15px"} className="xl66" style={{ height: "11.25pt" }}></td>
                    <td className="xl66"></td>
                    <td className="xl66"></td>
                  </tr>
                  <tr height={"28px"} style={{ msoHeightSource: 'userset', height: '21.0pt' }}>
                    <td height={"28px"} className="xl66" style={{ height: "21.0pt" }}></td>
                    <td className="xl66"></td>
                    <td className="xl66"></td>
                  </tr>
                  <tr height={"18px"} style={{ msoHeightSource: 'userset', height: '14.1pt' }}>
                    <td height={"18px"} className="xl66" style={{ height: "14.1pt" }}></td>
                    <td className="xl66"></td>
                    <td className="xl66"></td>
                  </tr>
                  <tr height={"20px"} style={{ msoHeightSource: 'userset', height: '15.0pt' }}>
                    <td height={"20px"} className="xl66" style={{ height: "15.0pt" }}></td>
                    <td className="xl66"></td>
                    <td className="xl66"></td>
                  </tr>
                  <tr height={"32px"} style={{ msoHeightSource: 'userset', height: '24.0pt' }}>
                    <td height={"32px"} className="xl82" style={{ height: "24.0pt" }}></td>
                    <td className="xl82"></td>
                    <td className="xl82"></td>
                    <td className="xl82"></td>
                    <td className="xl82"></td>
                    <td className="xl82"></td>
                    <td className="xl66"></td>
                    <td className="xl66"></td>
                    <td className="xl66"></td>
                  </tr>
                  <tr height={"36px"} style={{ msoHeightSource: 'userset', height: '27.0pt' }}>
                    <td height={"36px"} className="xl82" style={{ height: "27.0pt" }}></td>
                    <td className="xl82"></td>
                    <td className="xl82"></td>
                    <td className="xl82"></td>
                    <td className="xl82"></td>
                    <td className="xl82"></td>
                    <td className="xl66"></td>
                    <td className="xl66"></td>
                    <td className="xl66"></td>
                  </tr>
                  <tr height={"0px"} style={{ display: 'none' }}>
                    <td width={"81px"} style={{ width: '61px' }}></td>
                    <td width={"201px"} style={{ width: '151pt' }}></td>
                    <td width={"125px"} style={{ width: '94pt' }}></td>
                    <td width={"98px"} style={{ width: '74pt' }}></td>
                    <td width={"79px"} style={{ width: '59pt' }}></td>
                    <td width={"74px"} style={{ width: '65pt' }}></td>
                    <td width={"87px"} style={{ width: '65pt' }}></td>
                    <td width={"87px"} style={{ width: '65pt' }}></td>
                    < td width={"87px"} style={{ width: '65pt' }}></td >
                  </tr >
                </tbody >))}</table >






          </div >
        </Modal.Body >
        <Modal.Footer><input type="button" value="click" onClick={() => { printDivInvoice(INVOICE) }} />
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal ></div >

  );
}
export default Printmodal;