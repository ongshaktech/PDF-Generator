import { useState } from "react";
import InvoicePDF from "./InvoicePDF";
import { pdf } from "@react-pdf/renderer";

const InvoiceForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    companyAddress: "",
    city: "",
    country: "",
    details: {
      invoiceNumber: "",
      invoiceDate: "",
      billingId: "",
      accountId: "",
    },
    totalUSD: "",
    summaryFor: "",
    subtotal: "",
    vat: "",
    subTotalBDT: "",
    vatBDT: "",
    totalBDT: "",
    exchangeRate: "",
  });

  const handleChange = (e, index = null) => {
    const { name, value } = e.target;
    if (index !== null) {
      const updatedItems = [...formData.items];
      updatedItems[index][name] = value;
      setFormData({ ...formData, items: updatedItems });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  let [showPdf, setShowPdf] = useState(false);

  const generatePDF = async () => {
    // const blob = await pdf(<InvoicePDF data={formData} />).toBlob();
    // const url = URL.createObjectURL(blob);
    // const link = document.createElement("a");
    // link.href = url;
    // link.download = "invoice.pdf";
    // link.click();

    setShowPdf(true);
  };

  console.log("formData", formData);

  return (
    <>
      {showPdf ? <InvoicePDF data={formData} /> : null}
      <div className="min-h-screen w-full flex justify-center items-center">
        <div className="h-auto w-[700px] bg-white p-10 shadow-2xl flex flex-col gap-3">
          <h2 className="text-center font-bold pb-10 text-2xl">Invoice Form</h2>
          <div className="flex gap-4 items-center">
            <input
              type="text"
              name="name"
              placeholder="Bill To"
              className="w-full border p-3 outline-none rounded-md"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="text"
              name="companyName"
              placeholder="Company Name"
              className="w-full border p-3 outline-none rounded-md"
              value={formData.companyName}
              onChange={handleChange}
            />
          </div>
          <div className="flex gap-4 items-center">
            <input
              type="text"
              name="companyAddress"
              placeholder="Company Address"
              className="w-full border p-3 outline-none rounded-md"
              value={formData.companyAddress}
              onChange={handleChange}
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              className="w-full border p-3 outline-none rounded-md"
              value={formData.city}
              onChange={handleChange}
            />
          </div>{" "}
          <div className="flex gap-4 items-center">
            <input
              type="text"
              name="country"
              placeholder="Country"
              className="w-full border p-3 outline-none rounded-md"
              value={formData.country}
              onChange={handleChange}
            />
            <input
              type="text"
              name="invoiceNumber"
              placeholder="Invoice Number"
              className="w-full border p-3 outline-none rounded-md"
              value={formData?.details?.invoiceNumber}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  details: {
                    ...formData?.details,
                    invoiceNumber: e.target.value,
                  },
                })
              }
            />
          </div>
          <div className="flex gap-4 items-center">
            <input
              type="text"
              name="invoiceDate"
              placeholder="Invoice Date"
              className="w-full border p-3 outline-none rounded-md"
              value={formData?.details?.invoiceDate}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  details: {
                    ...formData?.details,
                    invoiceDate: e.target.value,
                  },
                })
              }
            />
            <input
              type="text"
              name="billingId"
              placeholder="Billing ID"
              className="w-full border p-3 outline-none rounded-md"
              value={formData?.details?.billingId}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  details: {
                    ...formData?.details,
                    billingId: e.target.value,
                  },
                })
              }
            />
          </div>
          <div className="flex gap-4 items-center">
            <input
              type="text"
              name="accountId"
              placeholder="Account ID"
              className="w-full border p-3 outline-none rounded-md"
              value={formData?.details?.accountId}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  details: {
                    ...formData?.details,
                    accountId: e.target.value,
                  },
                })
              }
            />
            <input
              type="text"
              name="totalUSD"
              placeholder="Total USD"
              className="w-full border p-3 outline-none rounded-md"
              value={formData.totalUSD}
              onChange={handleChange}
            />
          </div>
          <div className="flex gap-4 items-center">
            <input
              type="text"
              name="summaryFor"
              placeholder="Summary For"
              className="w-full border p-3 outline-none rounded-md"
              value={formData.summaryFor}
              onChange={handleChange}
            />
            <input
              type="text"
              name="subtotal"
              placeholder="Sub Total"
              className="w-full border p-3 outline-none rounded-md"
              value={formData.subtotal}
              onChange={handleChange}
            />
          </div>
          <div className="flex gap-4 items-center">
            <input
              type="text"
              name="vat"
              placeholder="Vat"
              className="w-full border p-3 outline-none rounded-md"
              value={formData.vat}
              onChange={handleChange}
            />
            <input
              type="text"
              name="subTotalBDT"
              placeholder="Sub Total BDT"
              className="w-full border p-3 outline-none rounded-md"
              value={formData.subTotalBDT}
              onChange={handleChange}
            />
          </div>
          <div className="flex gap-4 items-center">
            <input
              type="text"
              name="vatBDT"
              placeholder="Vat BDT"
              className="w-full border p-3 outline-none rounded-md"
              value={formData.vatBDT}
              onChange={handleChange}
            />
            <input
              type="text"
              name="totalBDT"
              placeholder="Total BDT"
              className="w-full border p-3 outline-none rounded-md"
              value={formData.totalBDT}
              onChange={handleChange}
            />
          </div>
          <input
            type="text"
            name="exchangeRate"
            placeholder="Exchange Rate"
            className="w-full border p-3 outline-none rounded-md"
            value={formData.exchangeRate}
            onChange={handleChange}
          />
          <button
            onClick={generatePDF}
            className="p-4 rounded-md bg-green-500 text-white"
          >
            Generate Invoice PDF
          </button>
        </div>
      </div>
    </>
  );
};

export default InvoiceForm;
