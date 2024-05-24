import { PDFDownloadLink } from "@react-pdf/renderer";
import { BookingPass } from "../../react-pdf";
export default function DownloadPass() {
  const bookingDetails = {
    bookingNumber: "MFD20246S2804",
    payeeName: "Ditsa Sen",
    contactNumber: "8697445958",
    email: "ditsasen@gmail.com",
    bookingDate: "Feb 18, 2024, 9:40 PM",
    safariDate: "May 14, 2024",
    safariSlot: "Afternoon",
    charges: {
      safariCharges: "5000.00",
      gypsyCharges: "0",
      guideCharges: "0",
      cameraCharges: "885.00",
      totalPaid: "5885.00",
      paymentReference: "CPADNPOIZ4",
    },
    ecoTourists: [
      {
        name: "Suvojit Kumar Amboli",
        gender: "Male",
        age: 59,
        country: "India",
        identityProof: "Aadhar Card - 436795355418",
      },
      {
        name: "Anuradha Amboli",
        gender: "Female",
        age: 54,
        country: "India",
        identityProof: "Aadhar Card - 870470089079",
      },
      {
        name: "Madhumita Dhar",
        gender: "Female",
        age: 54,
        country: "India",
        identityProof: "Aadhar Card - 583375409774",
      },
      {
        name: "Tapan Kumar Dhar",
        gender: "Male",
        age: 63,
        country: "India",
        identityProof: "Aadhar Card - 559742381345",
      },
      {
        name: "Ditsa Sen",
        gender: "Female",
        age: 27,
        country: "India",
        identityProof: "Aadhar Card - 329738958674",
      },
    ],
    addonDetails: [
      {
        deviceName: "Point & Shoot Camera/DSLR/Mirror less camera with lens",
        deviceCharges: "295.00",
        centralGst: "9.00%",
        stateGst: "9.00%",
      },
      {
        deviceName: "Point & Shoot Camera/DSLR/Mirror less camera with lens",
        deviceCharges: "295.00",
        centralGst: "9.00%",
        stateGst: "9.00%",
      },
    ],
  };
  return (
    <div>
      <PDFDownloadLink
        document={<BookingPass bookingDetails={bookingDetails} />}
        fileName="document.pdf"
      >
        {({ loading }) => (loading ? "Loading document..." : "Download PDF")}
      </PDFDownloadLink>
    </div>
  );
}
