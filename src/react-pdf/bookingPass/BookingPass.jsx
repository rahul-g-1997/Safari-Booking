import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
import QRCode from "qrcode";
// Define black and white styles
const styles = StyleSheet.create({
  page: {
    padding: 20,
    fontFamily: "Helvetica",
  },
  sectionContainer: {
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#000000", // Black
    margin: 5,
  },
  sectionHeading: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#000000", // Black
    textAlign: "center",
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#000000",
  },
  sectionHeading2: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#000000", // Black
    textAlign: "center",
    padding: 5,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderBottomColor: "#000000",
  },
  textSection: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#000000",
    padding: 5,
  },
  column: {
    flex: 1,
    fontSize: 10,
    padding: 5,
    borderRightWidth: 1,
    borderRightColor: "#000000",
  },
  lastColumn: {
    borderRightWidth: 0,
    justifyContent: "center",
  },
  text: {
    fontSize: 10,
  },
  qrCodeContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
  },
  table: {
    display: "table",
    width: "auto",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#000000", // Black
    margin: "10 5",
    marginHorizontal: 5,
  },
  tableRow: {
    flexDirection: "row",
  },
  tableColHeader: {
    backgroundColor: "#f2f2f2", // Light gray for header background
    borderRightWidth: 1,
    borderRightColor: "#000000",
    fontSize: 10,
    padding: 5,
  },
  tableCol: {
    flex: 1,
    borderRightWidth: 1,
    borderRightColor: "#000000",
    padding: 5,
  },
  tableCell: {
    fontSize: 10,
    color: "#000000", // Black
  },
  tableHeaderCell: {
    fontWeight: "bold",
  },
  footerNote: {
    fontSize: 12,
    marginTop: 20,
    color: "#000000", // Black
    textAlign: "justify",
  },
  col1: { flex: 0.5 }, // Smaller width for Sr. No.
  col2: { flex: 2 }, // Adjusted width for other columns
  col3: { flex: 1.5 },
  col4: { flex: 2 },
  col5: { flex: 2 },
  listItem: {
    flexDirection: "row",
    marginBottom: 1,
    margin: 5,
    marginLeft: 20,
  },
  bulletPoint: {
    width: 10,
    fontSize: 15,
  },
  listText: {
    flex: 1,
    fontSize: 10,
  },
});

class QRCodeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      qrCodeDataURL: "",
    };
  }

  componentDidMount() {
    this.generateQRCode();
  }

  async generateQRCode() {
    try {
      const qrCodeDataURL = await QRCode.toDataURL(this.props.value);
      this.setState({ qrCodeDataURL });
    } catch (error) {
      console.error("Error generating QR code:", error);
    }
  }

  render() {
    return (
      <Image
        src={this.state.qrCodeDataURL}
        style={{ ...styles.qrCode, width: 100, height: 100 }}
      />
    );
  }
}
const parkTimings = [
  {
    season: "1 July to 30 Sept.",
    slot: "Afternoon",
    entryTime: "14.30 PM",
    exitTime: "18.30 PM",
  },
  {
    season: "1 July to 30 Sept.",
    slot: "Morning",
    entryTime: "6.00 AM",
    exitTime: "10.00 AM",
  },
  {
    season: "1 Mar to 30 Apr",
    slot: "Afternoon",
    entryTime: "14.30 PM",
    exitTime: "18.30 PM",
  },
  {
    season: "1 Mar to 30 Apr",
    slot: "Morning",
    entryTime: "6.00 AM",
    exitTime: "10.00 AM",
  },
  {
    season: "1 May to 30 Jun",
    slot: "Morning",
    entryTime: "5.30 AM",
    exitTime: "9.30 AM",
  },
  {
    season: "1 May to 30 Jun",
    slot: "Afternoon",
    entryTime: "15.00 PM",
    exitTime: "19.00 PM",
  },
  {
    season: "1 Nov to 29 Feb",
    slot: "Afternoon",
    entryTime: "14.00 PM",
    exitTime: "18.00 PM",
  },
  {
    season: "1 Nov to 29 Feb",
    slot: "Morning",
    entryTime: "6.30 AM",
    exitTime: "10.30 AM",
  },
  {
    season: "1 Oct to 31 Oct",
    slot: "Afternoon",
    entryTime: "14.30 PM",
    exitTime: "18.30 PM",
  },
  {
    season: "1 Oct to 31 Oct",
    slot: "Morning",
    entryTime: "6.00 AM",
    exitTime: "10.00 AM",
  },
];

const cancellationRules = [
  {
    rule: "3 to 1 day before the date of excursion",
    deduction: "100% of the reservation amount.",
  },
  {
    rule: "15 to 4 day before the date of excursion",
    deduction: "80% of the reservation amount.",
  },
  {
    rule: "59 to 16 day before the date of excursion",
    deduction: "50% of the reservation amount.",
  },
  {
    rule: "120 to 60 day before the date of excursion",
    deduction: "100% of the reservation amount.",
  },
];

const BookingPass = ({ bookingDetails }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.sectionContainer}>
        <View style={styles.sectionHeading}>
          <Text>Tadoba Andhari Tiger Reserve (Buffer)</Text>
          <Text>Junona (Buffer)</Text>
          <Text>Maharashtra Forest Department</Text>
          <Text>[Online Safari Pass] Sharing Full Gypsy</Text>
        </View>
        <View style={styles.textSection}>
          <View style={[styles.column, styles.lastColumn]}>
            <Text style={styles.text}>
              Booking No. : {bookingDetails.bookingNumber}
            </Text>
            <Text style={styles.text}>
              Payee Name : {bookingDetails.payeeName}
            </Text>
            <Text style={styles.text}>
              Contact No. : {bookingDetails.contactNumber}
            </Text>
            <Text style={styles.text}>Email ID : {bookingDetails.email}</Text>
          </View>
          <View style={{ borderLeftWidth: 1 }}>
            <QRCodeComponent value={bookingDetails.bookingNumber} />
          </View>
        </View>
        <View style={styles.textSection}>
          <View style={styles.column}>
            <Text>Booking Date : {bookingDetails.bookingDate}</Text>
            <Text>Safari Date : {bookingDetails.safariDate}</Text>
            <Text>Safari Slot : {bookingDetails.safariSlot}</Text>
          </View>
          <View style={styles.column}>
            <Text>
              Safari Charges (Inc. GST) : {bookingDetails.charges.safariCharges}
              /- Rs.
            </Text>
            <Text>
              Gypsy Charges : {bookingDetails.charges.gypsyCharges}/- Rs.
            </Text>
            <Text>
              Guide Charges : {bookingDetails.charges.guideCharges}/- Rs.
            </Text>
          </View>
          <View style={[styles.column, styles.lastColumn]}>
            <Text>
              Camera Charges : {bookingDetails.charges.cameraCharges}/- Rs.
            </Text>
          </View>
        </View>{" "}
        <View style={styles.textSection}>
          <View style={[styles.column, styles.lastColumn]}>
            <Text>
              Payment Gateway Reference No. :{" "}
              {bookingDetails.charges.paymentReference}
            </Text>
          </View>
          <View style={[styles.column, styles.lastColumn]}>
            <Text>Paid Amount : {bookingDetails.charges.totalPaid}/- Rs.</Text>
          </View>
        </View>
        <View style={styles.sectionHeading}>
          <Text>Eco-Tourist Details</Text>
        </View>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <View style={[styles.tableCol, styles.col1, styles.tableColHeader]}>
              <Text style={styles.tableHeaderCell}>Sr. No.</Text>
            </View>
            <View style={[styles.tableCol, styles.col2, styles.tableColHeader]}>
              <Text style={styles.tableHeaderCell}>Tourist Name</Text>
            </View>
            <View style={[styles.tableCol, styles.col3, styles.tableColHeader]}>
              <Text style={styles.tableHeaderCell}>Gender (Age)</Text>
            </View>
            <View style={[styles.tableCol, styles.col2, styles.tableColHeader]}>
              <Text style={styles.tableHeaderCell}>Country</Text>
            </View>
            <View style={[styles.tableCol, styles.col3, styles.tableColHeader]}>
              <Text style={styles.tableHeaderCell}>Identity Proof</Text>
            </View>
          </View>
          {bookingDetails.ecoTourists.map((tourist, index) => (
            <View key={index} style={styles.tableRow}>
              <View style={[styles.tableCol, styles.col1]}>
                <Text style={styles.tableCell}>{index + 1}</Text>
              </View>
              <View style={[styles.tableCol, styles.col2]}>
                <Text style={styles.tableCell}>{tourist.name}</Text>
              </View>
              <View style={[styles.tableCol, styles.col3]}>
                <Text style={styles.tableCell}>
                  {tourist.gender} ({tourist.age})
                </Text>
              </View>
              <View style={[styles.tableCol, styles.col2]}>
                <Text style={styles.tableCell}>{tourist.country}</Text>
              </View>
              <View style={[styles.tableCol, styles.col3]}>
                <Text style={styles.tableCell}>{tourist.identityProof}</Text>
              </View>
            </View>
          ))}
        </View>
        <View style={styles.sectionHeading2}>
          <Text>Addon Details</Text>
        </View>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <View style={[styles.tableCol, styles.col1, styles.tableColHeader]}>
              <Text style={styles.tableHeaderCell}>Sr. No.</Text>
            </View>
            <View style={[styles.tableCol, styles.col2, styles.tableColHeader]}>
              <Text style={styles.tableHeaderCell}>Device Name</Text>
            </View>
            <View style={[styles.tableCol, styles.col3, styles.tableColHeader]}>
              <Text style={styles.tableHeaderCell}>
                Device Charges (Inc. GST)
              </Text>
            </View>
            <View style={[styles.tableCol, styles.col2, styles.tableColHeader]}>
              <Text style={styles.tableHeaderCell}>Central Gst</Text>
            </View>
            <View style={[styles.tableCol, styles.col2, styles.tableColHeader]}>
              <Text style={styles.tableHeaderCell}>State Gst</Text>
            </View>
          </View>
          {bookingDetails.addonDetails.map((addon, index) => (
            <View key={index} style={styles.tableRow}>
              <View style={[styles.tableCol, styles.col1]}>
                <Text style={styles.tableCell}>{index + 1}</Text>
              </View>
              <View style={[styles.tableCol, styles.col2]}>
                <Text style={styles.tableCell}>{addon.deviceName}</Text>
              </View>
              <View style={[styles.tableCol, styles.col3]}>
                <Text style={styles.tableCell}>
                  {addon.deviceCharges}/- Rs.
                </Text>
              </View>
              <View style={[styles.tableCol, styles.col2]}>
                <Text style={styles.tableCell}>{addon.centralGst}</Text>
              </View>
              <View style={[styles.tableCol, styles.col2]}>
                <Text style={styles.tableCell}>{addon.stateGst}</Text>
              </View>
            </View>
          ))}
        </View>
        <View style={styles.section}>
          <View style={styles.listItem}>
            <Text style={styles.bulletPoint}>•</Text>
            <Text style={styles.listText}>
              Point & Shoot Camera/DSLR/Mirrorless camera with lens - 250/- Rs.
            </Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.bulletPoint}>•</Text>
            <Text style={styles.listText}>
              Video camera (non-Professional & non Commercial use), Handy cam -
              250/- Rs.
            </Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.bulletPoint}>•</Text>
            <Text style={styles.listText}>
              Original ID proof must be carried by all visitors during the
              visit.
            </Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.bulletPoint}>•</Text>
            <Text style={styles.listText}>
              Carrying/Using mobile phones inside tiger reserve during safari is
              prohibited.
            </Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.bulletPoint}>•</Text>
            <Text style={styles.listText}>
              Only registered/authorized safari vehicles are allowed inside the
              park.
            </Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.bulletPoint}>•</Text>
            <Text style={styles.listText}>
              Please wear nature-colored clothes that blend with nature.
            </Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.bulletPoint}>•</Text>
            <Text style={styles.listText}>
              Teasing wild animals by any means is a punishable offense, hence
              please don&apos;t tease wild animals nor try to feed any animals.
            </Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.bulletPoint}>•</Text>
            <Text style={styles.listText}>
              Don&apos;t get down from the safari vehicle under any
              circumstances except in the designated areas.
            </Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.bulletPoint}>•</Text>
            <Text style={styles.listText}>
              Tiger Reserve/Sanctuary is a plastic-free zone. Use of disposable
              plastic in any form is banned. Littering within the park is a
              punishable offense.
            </Text>
          </View>
        </View>
        <View style={styles.sectionHeading2}>
          <Text>Cancellation Rules</Text>
        </View>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <View style={[styles.tableCol, styles.col1, styles.tableColHeader]}>
              <Text style={styles.tableHeaderCell}>Sr. No.</Text>
            </View>
            <View style={[styles.tableCol, styles.col4, styles.tableColHeader]}>
              <Text style={styles.tableHeaderCell}>Cancellation Rule</Text>
            </View>
            <View style={[styles.tableCol, styles.col4, styles.tableColHeader]}>
              <Text style={styles.tableHeaderCell}>Rate of Deduction</Text>
            </View>
          </View>

          {cancellationRules.map((rule, index) => (
            <View key={index} style={styles.tableRow}>
              <View style={[styles.tableCol, styles.col1]}>
                <Text style={styles.tableCell}>{index + 1}</Text>
              </View>
              <View style={[styles.tableCol, styles.col4]}>
                <Text style={styles.tableCell}>{rule.rule}</Text>
              </View>
              <View style={[styles.tableCol, styles.col4]}>
                <Text style={styles.tableCell}>{rule.deduction}</Text>
              </View>
            </View>
          ))}
        </View>
        <View style={styles.section}>
          <View style={styles.listItem}>
            <Text style={styles.bulletPoint}>•</Text>
            <Text style={styles.listText}>
              The period shall be counted with reference to 00.00 hours of the
              date of excursion.
            </Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.bulletPoint}>•</Text>
            <Text style={styles.listText}>
              Refund amount will be sent to group leader or any person
              authorized by him.
            </Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.bulletPoint}>•</Text>
            <Text style={styles.listText}>
              If you are cancelling your ticket, the Cancellation amount may
              take more than 30 days to reflect in your bank account.{" "}
            </Text>
          </View>
        </View>
        <View style={styles.sectionHeading2}>
          <Text>Park Timings</Text>
        </View>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <View style={[styles.tableCol, styles.col3, styles.tableColHeader]}>
              <Text style={styles.tableHeaderCell}>Season</Text>
            </View>
            <View style={[styles.tableCol, styles.col2, styles.tableColHeader]}>
              <Text style={styles.tableHeaderCell}>Slot</Text>
            </View>
            <View style={[styles.tableCol, styles.col2, styles.tableColHeader]}>
              <Text style={styles.tableHeaderCell}>Entry Time</Text>
            </View>
            <View style={[styles.tableCol, styles.col2, styles.tableColHeader]}>
              <Text style={styles.tableHeaderCell}>Exit Time</Text>
            </View>
          </View>

          {parkTimings.map((timing, index) => (
            <View key={index} style={styles.tableRow}>
              <View style={[styles.tableCol, styles.col3]}>
                <Text style={styles.tableCell}>{timing.season}</Text>
              </View>
              <View style={[styles.tableCol, styles.col2]}>
                <Text style={styles.tableCell}>{timing.slot}</Text>
              </View>
              <View style={[styles.tableCol, styles.col2]}>
                <Text style={styles.tableCell}>{timing.entryTime}</Text>
              </View>
              <View style={[styles.tableCol, styles.col2]}>
                <Text style={styles.tableCell}>{timing.exitTime}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    </Page>
  </Document>
);

export default BookingPass;
